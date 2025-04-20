import { useState } from 'react';
import { ReactComponent as Mail } from '../../assets/svg/social/Mail.svg';
import { useSubscribeEmailMutation } from '../../services/Subscriber';
import { toast } from 'react-toastify';

const Subscribe = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [subscribeEmail] = useSubscribeEmailMutation();
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!email) {
            setError('Email is required');
            return;
        }
        else if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Invalid email address')
            return;
        }
        setError('');
        setIsSubmitting(true);

        try {
            const response = await subscribeEmail({ email }).unwrap();
            toast.success(response.message || 'Thank you for subscribing');
            setEmail('')
        } catch (err) {
            if (err.status === 404 || err.originalStatus === 404) {
                toast.error("Subscription service is currently unavailable. Please try later.");
            } else if (err.error?.includes("Unexpected token '<'")) {
                alert("Server error: Invalid response. Contact support.");
            } else {
                alert("Failed to subscribe. Please try again.");
            }
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className='w-[330px] max-[996px]:w-[250px] max-xl:w-[180px] max-[996px]:text-center max-[764px]:w-[300px] max-[528px]:w-[200px] 
        max-[528px]:text-start
        '>
            <h1 className="font-bold text-base max-[996px]:text-sm ">Subscribe</h1>
            <p className="font-medium text-[13px] max-[996px]:text-[11px] mt-3">Enter your email to get notified about our new update </p>

            <div className="mt-3 flex items-center  rounded-[10px] bg-[#1637BA33] px-3 py-2 cursor-pointer w-full h-[54px] 
            max-[996px]:h-[45px] max-xl:h-[30px]
            border-[3px] border-commonblue  max-xl:border-2
            ">

                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-full bg-transparent text-black placeholder:text-black text-[14px] max-[996px]:text-xs px-3
                    outline-none"
                />
                {
                    isSubmitting ? (
                        <div className="ml-2 flex items-center justify-center h-[23px] w-[23px]">
                            <svg className="animate-spin h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                            </svg>
                        </div>
                    ) : (
                        <button
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className="ml-2 p-1 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed rounded transition-all"
                        >
                            <Mail className="h-[23px] w-[23px]  fill-black hover:fill-white transition-all duration-300" />
                        </button>
                    )
                }

            </div>
            {error && <p className="text-red-500 text-[13px] font-semibold mt-2 px-3">{error}</p>}
        </div>
    )
}
export default Subscribe;
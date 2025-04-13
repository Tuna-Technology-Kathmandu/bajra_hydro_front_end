import { ReactComponent as Mail } from '../../assets/svg/social/Mail.svg';

const Subscribe = () => {
    return (
        <div className='w-[330px] max-[996px]:w-[250px] max-xl:w-[180px] max-[996px]:text-center max-[764px]:w-[300px] max-[528px]:w-[200px] 
        max-[528px]:text-start
        '>
            <h1 className="font-bold text-base max-[996px]:text-sm ">Subscribe</h1>
            <p className="font-medium text-[13px] max-[996px]:text-[11px] mt-3">Enter your email to get notified about our new update </p>

            <div className="mt-3 flex items-center  rounded-[10px] bg-[#1637BA33] px-3 py-2 cursor-pointe w-full h-[54px] 
            max-[996px]:h-[45px] max-xl:h-[30px]
            border-[3px] border-commonblue  max-xl:border-2
            ">

                <input
                    type="text"
                    placeholder="Email"
                    className="w-full h-full bg-transparent text-black placeholder:text-black text-[14px] max-[996px]:text-xs px-3
                    outline-none"
                />

                <Mail className="h-[23px] w-[23px] fill-black cursor-pointer" />
            </div>
        </div>
    )
}
export default Subscribe;
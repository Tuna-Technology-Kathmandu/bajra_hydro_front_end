import { lazy } from "react";
import CommonHero from "../../components/heroComponent/CommonHero";
import Hydro from '../../assets/images/hydro3.webp';
const ContactForm = lazy(() => import('../../components/form/ContactForm'));
import { ReactComponent as Location } from '../../assets/svg/location.svg';
import { ReactComponent as PoBox } from '../../assets/svg/pobox.svg';
import { ReactComponent as Mail } from '../../assets/svg/social/Mail.svg';
import { ReactComponent as Phone } from '../../assets/svg/phone.svg';
import GoogleMapIframe from "../../components/map/GoogleMap";


const ContactUsIndex = () => {
    return (
        <main>
            <CommonHero img={Hydro} title='Contact Us' />
            <section className="w-full p-[65px] max-md:p-[30px] px-[160px] max-md:mt-7 max-[658px]:mt-4">
                <ContactForm />
            </section>
            <section className="w-full bg-[#48CAE44D] px-[65px] py-20 flex justify-between max-xl:flex-col-reverse max-xl:gap-7 max-xl:items-center">
                <div className="flex items-center flex-col w-[330px] ">
                    <Location className='w-[24px] h-[24px] max-sm:w-[21px] max-sm:h-[21px] fill-commonblue' />
                    <p className="font-semibold text-sm mt-4 max-xl:text-center max-sm:text-xs">S. Home, 3rd Floor - G6, H.N. 161 Bagdurbar, Sundhara - 11, Kathmandu, Nepal</p>
                </div>
                <div className="flex items-center flex-col">
                    <PoBox className='w-[24px] h-[24px] fill-commonblue max-sm:w-[21px] max-sm:h-[21px]' />
                    <p className="font-semibold text-sm max-sm:text-xs mt-4">5518</p>
                </div>
                <div className="flex items-center flex-col">
                    <Mail className='w-[24px] h-[24px] fill-commonblue max-sm:w-[21px] max-sm:h-[21px]' />
                    <a href='mailto:bajra@example.com' className="font-semibold text-sm mt-4 max-sm:text-xs  hover:text-commonblue/70 transition-all duration-300 ease-in-out">bajra@example.com</a>
                </div>
                <div className="flex items-center flex-col">
                    <Phone className='w-[24px] h-[24px] fill-commonblue max-sm:w-[21px] max-sm:h-[21px]' />
                    <a
                        href='tel:+9771234567890'
                        className="font-semibold text-sm mt-4 max-sm:text-xs  hover:text-commonblue/70 transition-all duration-300 ease-in-out">+977 1234567890</a>
                </div>
            </section>

            {/* map leaflet */}
            <section className="mt-10 h-[500px] relative z-0 max-md:mt-20">
                <GoogleMapIframe />
            </section>

        </main>
    )
}
export default ContactUsIndex;
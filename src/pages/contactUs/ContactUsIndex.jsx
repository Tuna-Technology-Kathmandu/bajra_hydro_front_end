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
            <section className="px-[160px] max-[1144px]:px-[75px] max-md:px-[30px] my-20 max-md:my-10 max-sm:my-7">
                <ContactForm />
            </section>
            <section className="w-full bg-[#48CAE44D] px-[65px] py-20 flex justify-between max-xl:flex-col-reverse max-xl:gap-7 max-xl:items-center">
                <div className="flex items-center flex-col w-[330px] ">
                    <Location className='w-[24px] h-[24px] max-sm:w-[21px] max-sm:h-[21px] fill-commonblue' />
                    <p className="font-semibold text-sm mt-4 max-xl:text-center max-sm:text-xs">Kathmandu-10, Budhhanagar, BPC 4th floor</p>
                </div>
                <div className="flex items-center flex-col">
                    <PoBox className='w-[24px] h-[24px] fill-commonblue max-sm:w-[21px] max-sm:h-[21px]' />
                    <p className="font-semibold text-sm max-sm:text-xs mt-4">11690</p>
                </div>
                <div className="flex items-center flex-col">
                    <Mail className='w-[24px] h-[24px] fill-commonblue max-sm:w-[21px] max-sm:h-[21px]' />
                    <a href='mailto:bajraenergyofficial@gmail.com' className="font-semibold text-sm mt-4 max-sm:text-xs  hover:text-commonblue/70 transition-all duration-300 ease-in-out">
                        bajraenergyofficial@gmail.com
                    </a>
                </div>
                <div className="flex items-center flex-col">
                    <Phone className='w-[24px] h-[24px] fill-commonblue max-sm:w-[21px] max-sm:h-[21px]' />

                    <div className="mt-4">
                        <span className="font-semibold text-sm  max-sm:text-xs  hover:text-commonblue/70 transition-all duration-300 ease-in-out">
                            <a href="tel:015905890">015905890</a>
                        </span>
                        {/* <span className='ml-2 font-semibold text-sm max-sm:text-xs  hover:text-commonblue/70 transition-all duration-300 ease-in-out'>
                            <a href="tel:549494">549494</a>
                        </span> */}
                    </div>
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
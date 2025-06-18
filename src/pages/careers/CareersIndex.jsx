import CommonHero from "../../components/heroComponent/CommonHero";
import Hydro from '../../assets/images/hydro3.webp';
import BenefitIndex from "./BenefitIndex";
import { lazy } from "react";
const JobsIndex = lazy(() => import('./jobs/JobsIndex'))

const CareersIndex = () => {
    return (
        <main>
            <CommonHero img={Hydro} title='Careers' />
           <div className='px-[75px] max-md:px-[30px] my-20 max-md:my-10 max-sm:my-7'>
               <BenefitIndex/>
               <JobsIndex/>
           </div>
        </main>
    )
}
export default CareersIndex;
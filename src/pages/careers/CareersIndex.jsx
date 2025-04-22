import CommonHero from "../../components/heroComponent/CommonHero";
import Hydro from '../../assets/images/hydro3.webp';
import BenefitIndex from "./BenefitIndex";
import { lazy } from "react";
const JobsIndex = lazy(() => import('./jobs/JobsIndex'))

const CareersIndex = () => {
    return (
        <main>
            <CommonHero img={Hydro} title='Careers' />
            <BenefitIndex />
            <JobsIndex />
        </main>
    )
}
export default CareersIndex;
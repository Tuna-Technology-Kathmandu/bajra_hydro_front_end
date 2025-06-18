import CommonHero from "../../components/heroComponent/CommonHero";
import Hydro from '../../assets/images/hydro3.webp';
import { lazy } from "react";
const ReportContainer = lazy(() => import("./ReportContainer"))

const ReportIndex = () => {
    return (
        <main>
            <CommonHero img={Hydro} title='Reports' />
            <ReportContainer />
        </main>
    )
}
export default ReportIndex;
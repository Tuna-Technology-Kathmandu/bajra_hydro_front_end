import CommonHero from "../../components/heroComponent/CommonHero";
import Hydro from '../../assets/images/hydro3.webp';
import ReportContainer from "./ReportContainer";

const ReportIndex = () => {
    return (
        <main>
            <CommonHero img={Hydro} title='Reports' />
            <ReportContainer />
        </main>
    )
}
export default ReportIndex;
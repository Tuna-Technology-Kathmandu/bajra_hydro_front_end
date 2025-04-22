import CommonHero from "../../components/heroComponent/CommonHero";
import Hydro from '../../assets/images/hydro3.webp';
import { lazy } from "react";
const AboutDetail = lazy(() => import("./AboutDetail"))

const AboutUsIndex = () => {
    return (
        <main>
            <CommonHero img={Hydro} title='About Us' />
            <AboutDetail />
        </main>
    )
}
export default AboutUsIndex;
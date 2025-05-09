import { lazy } from "react";
import HomeHero from "../../components/heroComponent/HomeHero";
const AboutUsSection = lazy(() => import("./aboutUsSection/AboutUsSection"));
const ChairmanSection = lazy(() => import("./chairmanSection/ChairmanSection"));
const MilestoneSection = lazy(() => import("./milestoneSection/MilestoneSection"));
const NewsSection = lazy(() => import("./newsSection/NewsSection"));

const HomeIndex = () => {
    return (
        <main>
            <HomeHero />
            <AboutUsSection />
            <ChairmanSection />
            <MilestoneSection />
             <NewsSection /> 
        </main>
    )
}
export default HomeIndex;
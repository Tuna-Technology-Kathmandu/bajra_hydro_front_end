import HomeHero from "../../components/heroComponent/HomeHero";
import AboutUsSection from "./aboutUsSection/AboutUsSection";
import ChairmanSection from "./chairmanSection/ChairmanSection";
import MilestoneSection from "./milestoneSection/MilestoneSection";
import NewsSection from "./newsSection/NewsSection";

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
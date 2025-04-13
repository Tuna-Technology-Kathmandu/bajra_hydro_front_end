import CommonHero from "../../heroComponent/CommonHero";
import Hydro from '../../../assets/images/hydro3.webp';
import ProjectDetails from "./ProjectDetails";

const ProjectSinglePage = () => {
    return (
        <main>
            <CommonHero img={Hydro} title='Project' />
            <ProjectDetails />
        </main>
    )
}
export default ProjectSinglePage;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeIndex from "./pages/home/HomeIndex";
import Layout from "./Layout";
import AboutUsIndex from "./pages/about/AboutUsIndex";
import ContactUsIndex from "./pages/contactUs/ContactUsIndex";
import NewsIndex from "./pages/news/NewsIndex";
import NewsSinglePage from "./components/singlepage/news/NewsSinglePage";
import ReportIndex from "./pages/report/ReportIndex";
import ProjectSinglePage from "./components/singlepage/project/ProjectSinglePage";
import CareersIndex from "./pages/careers/CareersIndex";
import OnGoingProject from "./pages/project/OnGoingProject";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeIndex />} />
          <Route path="about-us" element={<AboutUsIndex />} />
          <Route path="contact-us" element={<ContactUsIndex />} />
          <Route path="news-and-update" element={<NewsIndex />} />
          <Route path='/single-news/:slug' element={<NewsSinglePage />} />
          <Route path='/reports' element={<ReportIndex />} />
          <Route path='/project' element={<ProjectSinglePage />} />
          <Route path='/careers' element={<CareersIndex />} />

          {/* singlepages*/}
          <Route path="/ongoing-projects" element={<OnGoingProject />} />


        </Route>
      </Routes>
    </Router>
  );
};

export default App;
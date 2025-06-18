import { useEffect, useState } from "react";
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
import ErrorPage from "./pages/error/ErrorPage";
import PopUp from "./components/popUp/PopUp";
import "../src/components/popUp/PopUp.css"
import { useGetPopUpQuery } from "./services/PopUpApi";
import GalleryPage from "./pages/gallery/GalleryPage";

const App = () => {
  const [showPopUp, setShowPopUp] = useState(true);

   const { data, error, isLoading } = useGetPopUpQuery({
    page: 1,
    limit: 10,
  });

   const closePopUp = () => {
    setShowPopUp(false);
  };

    useEffect(() => {
    setShowPopUp(true);
  }, []);

  const imageUrl = data?.popup?.[0]?.url || "https://placehold.co/600x400";
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeIndex />} />
          <Route path="/about-us" element={<AboutUsIndex />} />
          <Route path="/contact-us" element={<ContactUsIndex />} />
          <Route path="/news-and-update" element={<NewsIndex />} />
          <Route path='/single-news/:slug' element={<NewsSinglePage />} />
          <Route path='/reports' element={<ReportIndex />} />
          <Route path='/single-project/:slug' element={<ProjectSinglePage />} />
          <Route path='/careers' element={<CareersIndex />} />
          <Route path="/gallery" element={<GalleryPage/>}/>
          <Route path='*' element={<ErrorPage />} />

          {/* singlepages*/}
          <Route path="/projects" element={<OnGoingProject />} />


        </Route>
      </Routes>
      <PopUp  show={showPopUp} onClose={closePopUp} imageUrl={imageUrl}/>

    </Router>
  );
};

export default App;
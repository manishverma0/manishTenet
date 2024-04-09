import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Error404 from "../components/Error404/Error404";
import CaseStudy from "../components/CaseStudy/CaseStudy";
import Strategy from "../components/Strategy/strategy";
import Industry from "../components/Industry/Industry";
import Solution from "../components/Solutions/Solutions";
import About from '../components/About/About'
import SingleServicePage from '../components/Service/SingleService/Single'
import Partners from '../components/Partners/Partners'
import ToolsAndTech from '../components/ToolsAndTechnologies/ToolsAndTech'
import WhiteLabel from "../components/WhiteLabel/WhiteLabel";
import Service from "../components/Service/Service/Service";
import Career from "../components/Career/Career";
import Test from "../components/Test/Test";
import ContactUs from "../components/ContactUs/ContactUs";
import BlogSingle from "../components/Single/SingleBlog/BlogSingle";
import SingleInsight from '../components/Single/SingleInsights/InsightSingle'
import ThankYouPage from "../components/ThankYouPage/ThankYouPage";
import JobDetails from "../components/Career/JobDetails/JobDetails";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="/industry" element={<Industry />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="*" element={<Error404 />} />
        {/* Manish */}
        <Route path="/single" element={<SingleServicePage/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/" element={<About/>}/>
        <Route path="/partners" element={<Partners/>}/>
        <Route path="/ourtools" element={<ToolsAndTech/>}/>
        <Route path="/whitelabel" element={<WhiteLabel/>}/>
        <Route path="/career" element={<Career/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/singleblog" element={<BlogSingle/>}/>
        <Route path="/singleinsight" element={<SingleInsight/>}/>
        <Route path="/thankyou" element={<ThankYouPage/>}/>
        <Route path="/test" element={<Test/>}/>
        <Route path="/jobdetail" element={<JobDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
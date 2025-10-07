import React from "react";
import HomePage from "../Pages/HomePage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import FindJob from "../Pages/FindJob";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import FindTalentPage from "../Pages/FindTalentPage";
import TalentProfilePage from "../Pages/TalentProfilePage";
import PostJobPage from "../Pages/PostJobPage";
import JobDescPage from "../Pages/JobDescPage";
import ApplyJobPage from "../Pages/ApplyJobPage";
import CompanyPage from "../Pages/CompanyPage";
import PostedJobPage from "../Pages/PostedJobPage";
import JobHistoryPage from "../Pages/JobHistoryPage";
import SignUpPage from "../Pages/SignUpPage";
import ProfilePage from "../Pages/ProfilePage";
import { Divider } from "@mantine/core";
import { useSelector } from "react-redux";

const AppRoutes = () => {
  const user = useSelector((state) => state.user);
  return (
    <BrowserRouter>
      <div className="relative">
        <Header />
        <Divider mx="md" size="xs" orientation="horizontal" />
        <Routes>
          <Route path="/find-jobs" element={<FindJob />} />
          <Route path="/find-talent" element={<FindTalentPage />} />
          <Route path="/talent-profile/:id" element={<TalentProfilePage />} />
          <Route path="/jobs/:id" element={<JobDescPage />} />

          <Route path="/post-job/:id" element={<PostJobPage />} />
          <Route path="/posted-jobs/:id" element={<PostedJobPage />} />
          <Route path="/apply-job/:id" element={<ApplyJobPage />} />
          <Route path="/company/:id" element={<CompanyPage />} />
          <Route path="/job-history" element={<JobHistoryPage />} />
          <Route
            path="/signup"
            element={user ? <Navigate to="/" /> : <SignUpPage />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <SignUpPage />}
          />
          <Route path="/profile" element={<ProfilePage />} />

          <Route path="/" element={<HomePage />} />
          {/* <Route path="/*" element={<HomePage />} /> */}
        </Routes>
        <Divider mx="md" size="xs" className="" />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;

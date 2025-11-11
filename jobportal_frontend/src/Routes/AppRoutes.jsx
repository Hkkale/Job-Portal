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
import ProtectedRoute from "../Services/ProtectedRoute";
import PublicRoute from "../Services/PublicRoute";
import TradeMark from "../Components/TradeMark/TradeMark";
import ErrorPage from "../Pages/ErrorPage";

const AppRoutes = () => {
  const user = useSelector((state) => state.user);
  return (
    <BrowserRouter>
      <div className="relative">
        <Header />
        <Divider mx="md" size="xs" orientation="horizontal" />
        <Routes>
          <Route path="/find-jobs" element={<ProtectedRoute allowedRoles={["APPLICANT"]}> <FindJob /></ProtectedRoute>} />
          <Route path="/find-talent" element={<ProtectedRoute allowedRoles={["EMPLOYER","APPLICANT"]}> <FindTalentPage /></ProtectedRoute>} />
          <Route path="/talent-profile/:id" element={<TalentProfilePage />} />
          <Route path="/jobs/:id" element={<JobDescPage />} />
          <Route path="/post-job/:id" element={<ProtectedRoute allowedRoles={["EMPLOYER","APPLICANT"]}> <PostJobPage /></ProtectedRoute>} />
          <Route path="/posted-jobs/:id" element={<ProtectedRoute allowedRoles={["EMPLOYER","APPLICANT"]}> <PostedJobPage /></ProtectedRoute>} />
          <Route path="/apply-job/:id" element={<ApplyJobPage />} />
          <Route path="/company/:id" element={<CompanyPage />} />
          <Route path="/job-history" element={<ProtectedRoute allowedRoles={["APPLICANT","APPLICANT"]}> <JobHistoryPage /></ProtectedRoute>} />
          <Route
            path="/signup"
            element={<PublicRoute><SignUpPage /></PublicRoute>}
          />
          <Route
            path="/login"
            element={<PublicRoute><SignUpPage /></PublicRoute>}
          />
          <Route path="/profile" element={<ProtectedRoute allowedRoles={["APPLICANT"]}> <ProfilePage /></ProtectedRoute>} />

          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <Divider mx="md" size="xs" className="" />
        <Footer />
        <TradeMark/>
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;

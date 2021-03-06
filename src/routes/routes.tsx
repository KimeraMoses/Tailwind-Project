import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AutheticatedView, LoggedInRedirect } from "@views";
import BookingForm from "../components/BookingSummary/BookingComponents/BookingForm/BookingForm";
import PaymentForm from "./../components/BookingSummary/BookingComponents/PaymentForm/PaymentForm";
import OtpForm from "./../components/BookingSummary/BookingComponents/PaymentForm/OtpForm";
import PaymentStatus from "./../components/BookingSummary/BookingComponents/PaymentForm/PaymentStatus";
import DashboardLayout from "./../pages/Dashboard/DashboardLayout";
import SearchDoctors from "./../pages/Dashboard/PatientsMenuPanels/SearchDoctors";
import PatientsAppointments from "./../pages/Dashboard/PatientsMenuPanels/PatientsAppointments";
import DoctorDetails from "./../components/DoctorCard/DoctorDetails";
import Messages from "./../pages/Dashboard/GeneralPanels/Messages";
import {
  NotFound,
  Home,
  AboutUs,
  Login,
  ForgotPassword,
  Register,
  ResetPassword,
  BookAppointment,
  Appointments,
  AppointmentDetail,
  Profile,
  CreateSchedule,
  Privacy,
  TermsConditions,
  AppointmentBooking,
} from "../pages";
import HelpCenter from "./../pages/Dashboard/GeneralPanels/HelpCenter";
// import Scheduling from "./../pages/Dashboard/DoctorsMenuPanels/AvailabilitySettings/Scheduling";
import Service from "./../pages/ServicePage/Service";
import ContactUs from "./../pages/ContactUs/ContactUs";
import NewsFeeds from "./../pages/Dashboard/GeneralPanels/NewsFeeds";
import NewBlogPost from "./../pages/Dashboard/DoctorsMenuPanels/NewBlogPost/NewBlogPost";
import ComingSoon from "./../pages/Dashboard/GeneralPanels/ComingSoon";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/services" element={<Service />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route
        path="/appointment"
        element={<Navigate to="/appointment/booking" />}
      />
      <Route path="/appointment" element={<AppointmentBooking />}>
        <Route path="booking" element={<BookingForm />} />
        <Route path="payment" element={<PaymentForm />} />
        <Route path="otp" element={<OtpForm />} />
        <Route path="payment-success" element={<PaymentStatus type="fail" />} />
      </Route>

      <Route path="help-center" element={<HelpCenter />} />

      <Route
        path="/dashboard"
        element={
          <AutheticatedView>
            <DashboardLayout />
          </AutheticatedView>
        }
      >
        <Route path="user" element={<NewsFeeds />} />
        <Route path="new-blog-post" element={<NewBlogPost />} />
        <Route path="doctors" element={<SearchDoctors />} />
        <Route path="doctors/:doctorName" element={<DoctorDetails />} />
        <Route path="appointments" element={<PatientsAppointments />} />
        <Route path="messages" element={<Messages />} />
        <Route
          path="health-finacial-scheme"
          element={<ComingSoon title="MedAtlas Health Financial Scheme" />}
        />
        <Route path="scheduling" element={<CreateSchedule />} />
        <Route path="profile-settings" element={<Profile />} />
      </Route>
      <Route
        path="/login"
        element={
          <LoggedInRedirect>
            <Login />
          </LoggedInRedirect>
        }
      />
      <Route
        path="/register"
        element={
          <LoggedInRedirect>
            <Register />
          </LoggedInRedirect>
        }
      />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route
        path="/doctor/:id/book-appointment"
        element={
          <AutheticatedView>
            <BookAppointment />
          </AutheticatedView>
        }
      />
      <Route
        path="/appointments"
        element={
          <AutheticatedView>
            <Appointments />
          </AutheticatedView>
        }
      />
      <Route
        path="/appointment/:id"
        element={
          <AutheticatedView>
            <AppointmentDetail />
          </AutheticatedView>
        }
      />
      {/* <Route
        path="/account"
        element={
          <AutheticatedView>
            <Profile />
          </AutheticatedView>
        }
      /> */}
      <Route
        path="/schedule"
        element={
          <AutheticatedView>
            <CreateSchedule />
          </AutheticatedView>
        }
      />

      {/* Not found route */}
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

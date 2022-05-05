import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AutheticatedView, LoggedInRedirect } from "@views";
import BookingForm from "../components/BookingSummary/BookingComponents/BookingForm/BookingForm";
import PaymentForm from "./../components/BookingSummary/BookingComponents/PaymentForm/PaymentForm";
import OtpForm from "./../components/BookingSummary/BookingComponents/PaymentForm/OtpForm";
import PaymentStatus from "./../components/BookingSummary/BookingComponents/PaymentForm/PaymentStatus";
import DashboardLayout from "./../pages/Dashboard/DashboardLayout";
import SearchDoctors from "./../pages/Dashboard/PatientsMenuPanels/SearchDoctors";
import NewsFeeds from "./../pages/Dashboard/PatientsMenuPanels/NewsFeeds";
import PatientsAppointments from "./../pages/Dashboard/PatientsMenuPanels/PatientsAppointments";
import DoctorDetails from "./../components/DoctorCard/DoctorDetails";
import ProfileSettings from "./../pages/Dashboard/DoctorsMenuPanels/ProfileSettings/ProfileSettings";
import Messages from "./../pages/Dashboard/GeneralPanels/Messages";
import Scheduling from "./../pages/Dashboard/GeneralPanels/Scheduling";
import {
  NotFound,
  Home,
  AboutUs,
  Login,
  ForgotPassword,
  Register,
  ResetPassword,
  DoctorList,
  BookAppointment,
  Appointments,
  AppointmentDetail,
  Profile,
  CreateSchedule,
  Privacy,
  TermsConditions,
  AppointmentBooking,
} from "../pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
      <Route path="/about-us" element={<AboutUs />}></Route>
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
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="news-feeds" element={<NewsFeeds />} />
        <Route path="search-doctors" element={<SearchDoctors />} />
        <Route path="doctors/:doctorName" element={<DoctorDetails />} />
        <Route
          path="patients-appointments"
          element={<PatientsAppointments />}
        />
        <Route path="messages" element={<Messages />} />
        <Route path="scheduling" element={<Scheduling />} />
        <Route path="profile-settings" element={<ProfileSettings />} />
      </Route>
      <Route
        path="/login"
        element={
          <LoggedInRedirect>
            <Login />
          </LoggedInRedirect>
        }
      ></Route>
      <Route
        path="/register"
        element={
          <LoggedInRedirect>
            <Register />
          </LoggedInRedirect>
        }
      ></Route>
      <Route path="/forgot-password" element={<ForgotPassword />}></Route>
      <Route path="/reset-password" element={<ResetPassword />}></Route>
      <Route
        path="/doctors"
        element={
          <AutheticatedView>
            <DoctorList />
          </AutheticatedView>
        }
      ></Route>
      <Route
        path="/doctor/:id/book-appointment"
        element={
          <AutheticatedView>
            <BookAppointment />
          </AutheticatedView>
        }
      ></Route>
      <Route
        path="/appointments"
        element={
          <AutheticatedView>
            <Appointments />
          </AutheticatedView>
        }
      ></Route>
      <Route
        path="/appointment/:id"
        element={
          <AutheticatedView>
            <AppointmentDetail />
          </AutheticatedView>
        }
      ></Route>
      <Route
        path="/account"
        element={
          <AutheticatedView>
            <Profile />
          </AutheticatedView>
        }
      ></Route>
      <Route
        path="/schedule"
        element={
          <AutheticatedView>
            <CreateSchedule />
          </AutheticatedView>
        }
      ></Route>

      {/* Not found route */}
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>
  );
};

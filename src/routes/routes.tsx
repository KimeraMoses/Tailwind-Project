import React from "react";
import { Routes, Route } from "react-router-dom";
import { AutheticatedView, LoggedInRedirect } from "@views";
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
} from "../pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
      <Route path="/about-us" element={<AboutUs />}></Route>
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

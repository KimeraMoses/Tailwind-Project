import axios from "axios";
import * as models from "@interface/models";
import * as input from "@interface/input";
import { setCurrentUser } from "@redux-store";
import {
  requestInterceptor,
  responseInterceptor,
  AuthTokenHandler,
  responseErrorInterceptor,
} from "./interceptor";
import { removeEmptyQueryParams } from "@utils";

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const instance = axios.create({
  baseURL: `${API_ENDPOINT}/api`,
});

instance.interceptors.request.use(requestInterceptor);
instance.interceptors.response.use(
  responseInterceptor,
  responseErrorInterceptor
);

const storeUser = async (userPrm: Promise<models.Account>) => {
  const user = await userPrm;
  setCurrentUser(user);
  return user;
};

const reloadUser = async <T = any>(dataPrm: Promise<T>) => {
  const data = await dataPrm;
  HttpApi.getAccount();
  return data;
};

export class HttpApi {
  // Google Calendar auth refresh
  static async refreshGoogleCalendarAccess() {
    return instance.post<never, models.ApiResponse>(
      `/google-calendar/refresh-access`
    );
  }

  // Account
  static async login(data: input.SignInInput) {
    return storeUser(
      instance.post<input.SignInInput, models.Account>(`/account/signin`, data)
    );
  }

  static async createAccount(data: input.AccountCreateInput) {
    return instance.post<input.AccountCreateInput, models.Account>(
      `/account/signup`,
      data
    );
  }

  static async forgotPassword(data: input.ForgotPasswordInput) {
    return instance.post<input.ForgotPasswordInput, models.ApiResponse>(
      `/account/forgotpassword`,
      data
    );
  }

  static async resetPassword(data: input.ResetPasswordInput) {
    return instance.post<input.ForgotPasswordInput, models.ApiResponse>(
      `/account/resetpassword`,
      data
    );
  }

  static async changePassword(data: input.UpdatePasswordInput) {
    return instance.post<input.UpdatePasswordInput, models.ApiResponse>(
      `/account/changepassword`,
      data
    );
  }

  static async deleteProfilePicture() {
    return instance.delete<input.ForgotPasswordInput, models.Account>(
      `/account/profile-picture`
    );
  }

  static async uploadProfilePicture(data: input.RawFileUploads) {
    return storeUser(
      instance.post<input.RawFileUploads, models.Account>(
        `/account/profile-picture`,
        data
      )
    );
  }

  static async getAccount() {
    return storeUser(instance.get<never, models.Account>(`/account`));
  }

  static async updateAccount(data: input.AccountUpdateInput) {
    return storeUser(
      instance.patch<input.AccountUpdateInput, models.Account>(`/account`, data)
    );
  }

  static async signOut() {
    AuthTokenHandler.token = null;
    setCurrentUser(null);
  }

  // Consultations
  static async getConsultation(_id: string) {
    return instance.get<never, models.Consultation>(`/consultation/${_id}`);
  }

  static async getConsultations(params?: input.ConsultationSearchInput) {
    return instance.get<
      input.ConsultationSearchInput | undefined,
      models.Consultation[]
    >(`/consultation`, { params });
  }

  static async createConsultation(data: input.ConsultationUpdateInput) {
    return reloadUser(
      instance.post<input.ConsultationUpdateInput, models.Consultation>(
        `/consultation`,
        data
      )
    );
  }

  static async updateConsultation(
    _id: string,
    data: input.ConsultationUpdateInput
  ) {
    return reloadUser(
      instance.patch<input.ConsultationUpdateInput, models.Consultation>(
        `/consultation/${_id}`,
        data
      )
    );
  }

  static async deleteConsultation(_id: string) {
    return reloadUser(
      instance.delete<never, models.Consultation>(`/consultation/${_id}`)
    );
  }

  // Cerfification
  static async createCertification(data: input.CertificationCreateInput) {
    return storeUser(
      instance.post<input.CertificationCreateInput, models.Account>(
        `/account/certification`,
        data
      )
    );
  }

  static async deleteCertification(_id: string) {
    return storeUser(
      instance.delete<never, models.Account>(`/account/certification/${_id}`)
    );
  }

  // Public Doctors
  static async getDoctor(_id: string) {
    return instance.get<never, models.Account>(`/doctor/${_id}`);
  }

  static async getDoctors(params: input.AccountSearchInput) {
    params = removeEmptyQueryParams(params);
    return instance.get<input.AccountSearchInput, models.Account[]>(`/doctor`, {
      params,
    });
  }

  // Appointments
  static async createAppointment(data: input.AppointmentCreateInput) {
    return instance.post<input.AppointmentCreateInput, models.Appointment>(
      `/appointment`,
      data
    );
  }

  static async getAppointment(_id: string) {
    return instance.get<never, models.Appointment>(`/appointment/${_id}`);
  }

  static async getAppointments(params: input.AppointmentSearchInput) {
    return instance.get<input.AppointmentSearchInput, models.Appointment[]>(
      `/appointment`,
      { params }
    );
  }

  static async updateAppointment(
    _id: string,
    data: input.AppointmentUpdateInput
  ) {
    return instance.patch<input.AppointmentUpdateInput, models.Appointment>(
      `/appointment/${_id}`,
      data
    );
  }

  static async approveAppointment(
    _id: string,
    data: input.AppointmentUpdateInput
  ) {
    return instance.patch<input.AppointmentUpdateInput, models.Appointment>(
      `/appointment/${_id}/approve`,
      data
    );
  }

  static async declineAppointment(_id: string) {
    return instance.patch<never, models.Appointment>(
      `/appointment/${_id}/decline`
    );
  }

  // Availabilities
  static async createAvailability(data: input.AvailabilityCreateInput) {
    return instance.post<input.AvailabilityCreateInput, models.Availability>(
      `/availability`,
      data
    );
  }

  static async setAvailabilities(data: input.AvailabilityCreateInput[]) {
    return instance.put<input.AvailabilityCreateInput[], models.Availability[]>(
      `/availability`,
      data
    );
  }

  static async getAvailability(_id: string) {
    return instance.get<never, models.Availability>(`/availability/${_id}`);
  }

  static async getAvailabilities(params: input.AvailabilitySearchInput) {
    return instance.get<input.AvailabilitySearchInput, models.Availability[]>(
      `/availability`,
      { params }
    );
  }

  static async getOpenAvailabilities(params: input.AvailabilitySearchInput) {
    return instance.get<input.AvailabilitySearchInput, models.Availability[]>(
      `/availability/open`,
      { params }
    );
  }

  static async updateAvailability(
    _id: string,
    data: input.AvailabilityUpdateInput
  ) {
    return instance.patch<input.AvailabilityUpdateInput, models.Availability>(
      `/availability/${_id}`,
      data
    );
  }

  static async deleteAvailability(_id: string) {
    return instance.delete<never, models.ApiResponse>(`/availability/${_id}`);
  }
}

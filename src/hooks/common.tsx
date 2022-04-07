import React, { useEffect, useState, useCallback, useMemo } from "react";
import moment from "moment-timezone";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import * as models from "@interface/models";
import * as input from "@interface/input";
import { HttpApi } from "@api";
import { useCurrentUser as AccountUseCurrentUser } from "@redux-store";

// Doctors hooks and reducers

export const useGetDoctor = (_id: string) => {
  const [doctor, setDoctor] = useState<models.Account | null>(null);

  useEffect(() => {
    HttpApi.getDoctor(_id).then((r) => setDoctor(r));
  }, [_id]);

  return doctor;
};

export const useSearchDoctors = (params: input.AccountSearchInput) => {
  const [doctors, setDoctors] = useState<models.Account[] | null>(null);

  useEffect(() => {
    HttpApi.getDoctors(params).then((rs) => setDoctors(rs));
  }, [params]);

  return doctors;
};

export const useGetDoctorReducer = () => {
  const [doctor, setDoctor] = useState<models.Account | null>(null);

  const getDoctor = useCallback(async (_id: string) => {
    const r = await HttpApi.getDoctor(_id);
    setDoctor(r);
    return r;
  }, []);

  return [doctor, getDoctor];
};

export const useSearchDoctorsReducer = () => {
  const [doctors, setDoctors] = useState<models.Account[] | null>(null);

  const getDoctors = useCallback(async (params: input.AccountSearchInput) => {
    const rs = await HttpApi.getDoctors(params);
    setDoctors(rs);
    return rs;
  }, []);

  return [doctors, getDoctors];
};

// Availability hooks and reducers
export const useGetAvailability = (_id: string) => {
  const [availability, setAvailability] = useState<models.Availability | null>(
    null
  );

  useEffect(() => {
    HttpApi.getAvailability(_id).then((r) => setAvailability(r));
  }, [_id]);

  return availability;
};

export const useSearchAvailabilities = (
  params: input.AvailabilitySearchInput
) => {
  const [availabilities, setAvailabilities] = useState<
    models.Availability[] | null
  >(null);

  useEffect(() => {
    HttpApi.getAvailabilities(params).then((rs) => setAvailabilities(rs));
  }, [params]);

  return availabilities;
};

export const useSearchOpenAvailabilities = (
  params: input.AvailabilitySearchInput
) => {
  const [availabilities, setAvailabilities] = useState<
    models.Availability[] | null
  >(null);

  useEffect(() => {
    HttpApi.getOpenAvailabilities(params).then((rs) => setAvailabilities(rs));
  }, [params]);

  return availabilities;
};

export const useGetAvailabilityReducer = () => {
  const [availability, setAvailability] = useState<models.Availability | null>(
    null
  );

  const getAvailability = useCallback(async (_id: string) => {
    const r = await HttpApi.getAvailability(_id);
    setAvailability(r);
    return r;
  }, []);

  return [availability, getAvailability];
};

export const useGetAvailabilitiesReducer = () => {
  const [availabilities, setAvailabilities] = useState<
    models.Availability[] | null
  >(null);

  const getAvailabilities = useCallback(
    async (params: input.AvailabilitySearchInput) => {
      const rs = await HttpApi.getAvailabilities(params);
      setAvailabilities(rs);
      return rs;
    },
    []
  );

  return [availabilities, getAvailabilities];
};

export const useGetOpenAvailabilitiesReducer = () => {
  const [availabilities, setAvailabilities] = useState<
    models.Availability[] | null
  >(null);

  const getAvailabilities = useCallback(
    async (params: input.AvailabilitySearchInput) => {
      const rs = await HttpApi.getOpenAvailabilities(params);
      setAvailabilities(rs);
      return rs;
    },
    []
  );

  return [availabilities, getAvailabilities];
};

// Appointment hooks and reducers

export const useGetAppointment = (_id: string) => {
  const [appointment, setAppointment] = useState<models.Appointment | null>(
    null
  );

  useEffect(() => {
    HttpApi.getAppointment(_id).then((r) => setAppointment(r));
  }, [_id]);

  return appointment;
};

export const useSearchAppointments = (params: input.AppointmentSearchInput) => {
  const [appointments, setAppointments] = useState<models.Appointment[] | null>(
    null
  );

  useEffect(() => {
    HttpApi.getAppointments(params).then((rs) => setAppointments(rs));
  }, [params]);

  return appointments;
};

export const useGetAppointmentReducer = () => {
  const [appointment, setAppointment] = useState<models.Appointment | null>(
    null
  );

  const getAppointment = useCallback(async (_id: string) => {
    const r = await HttpApi.getAppointment(_id);
    setAppointment(r);
    return r;
  }, []);

  return [appointment, getAppointment];
};

export const useSearchAppointmentsReducer = () => {
  const [appointments, setAppointments] = useState<models.Appointment[] | null>(
    null
  );

  const getAppointments = useCallback(
    async (params: input.AppointmentSearchInput) => {
      const rs = await HttpApi.getAppointments(params);
      setAppointments(rs);
      return rs;
    },
    []
  );

  return [appointments, getAppointments];
};

// Account hooks and reducers

export const useGetAccount = () => {
  const [account, setAccount] = useState<models.Account | null>(null);

  useEffect(() => {
    HttpApi.getAccount().then((r) => setAccount(r));
  }, []);

  return account;
};

export const useUpdateAccount = (params: input.AccountUpdateInput) => {
  const [account, setAccount] = useState<models.Account | null>(null);

  useEffect(() => {
    HttpApi.updateAccount(params).then((rs) => setAccount(rs));
  }, [params]);

  return account;
};

export const useGetAccountReducer = () => {
  const [account, setAccount] = useState<models.Account | null>(null);

  const getAccount = useCallback(async () => {
    const r = await HttpApi.getAccount();
    setAccount(r);
    return r;
  }, []);

  return [account, getAccount];
};

export const useUpdateAccountReducer = () => {
  const [account, setAccount] = useState<models.Account | null>(null);

  const updateAccount = useCallback(
    async (params: input.AccountUpdateInput) => {
      const r = await HttpApi.updateAccount(params);
      setAccount(r);
      return r;
    },
    []
  );

  return [account, updateAccount];
};

// Consultations
export const useGetConsultationsReducer = () => {
  const [consultations, setConsultations] = useState<models.Consultation[]>([]);

  const getConsultations = useCallback(
    async (params?: input.ConsultationSearchInput) => {
      const r = await HttpApi.getConsultations(params);
      setConsultations(r);
      return r;
    },
    []
  );

  return [consultations, getConsultations];
};

// Signout
export const useSignOutReducer = () => {
  const signOut = useCallback(async () => {
    await HttpApi.signOut();
  }, []);

  return [signOut];
};

export const useCurrentUser = AccountUseCurrentUser;

export const useTimeZone = () => {
  return useCurrentUser()?.timeZone || moment.tz.guess(true);
};

export const useTimeZoneUpdateReducer = () => {
  const [timeZone, setTimeZone] = useState(useTimeZone());

  const updateTimeZone = useCallback(async (newTimezone: string) => {
    const account = await HttpApi.updateAccount({ timeZone: newTimezone });
    setTimeZone(account.timeZone);
    return account.timeZone;
  }, []);

  return [timeZone, updateTimeZone] as [
    string,
    (timeZone: string) => Promise<string>
  ];
};

export const useQuery = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};

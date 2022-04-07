import { HttpApi } from "@api";

const GA_API_KEY = process.env.REACT_APP_GA_API_KEY;
const GA_CLIENT_ID = process.env.REACT_APP_GA_CLIENT_ID;

const CalendarScopes = "https://www.googleapis.com/auth/calendar.events.owned";
const DiscoveryDocs = [
  "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
];

declare const gapi: any;
declare const window: any;

export function getGaApiPromise() {
  return window.gapiPromise;
}

export const ConnectGoogleCalendar = async () => {
  await getGaApiPromise();

  return new Promise((res, rej) => {
    gapi.auth2.authorize(
      {
        client_id: GA_CLIENT_ID,
        scope: CalendarScopes,
        response_type: "code permission",
        access_type: "offline",
      },
      async (response: any) => {
        if (response.error) {
          rej(false);
          return;
        }

        console.log(response);
        //save response
        await HttpApi.updateAccount({ googleCalendarAuthCode: response.code });
        const { success } = await HttpApi.refreshGoogleCalendarAccess();
        res(success);
      }
    );
  });
};

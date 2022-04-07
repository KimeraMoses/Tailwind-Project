import countriesQuery from "countries-code";

type QueryInfo = {
  country_name_en: string;
  alpha2: string;
};

const AfricanCountries = [
  "DZ",
  "AO",
  "BJ",
  "BW",
  "BF",
  "BI",
  "CM",
  "CV",
  "CF",
  "TD",
  "KM",
  "CG",
  "CD",
  "CI",
  "DJ",
  "EG",
  "GQ",
  "ER",
  "ET",
  "GA",
  "GM",
  "GH",
  "GN",
  "GW",
  "KE",
  "LS",
  "LR",
  "LY",
  "MG",
  "ML",
  "MW",
  "MR",
  "MU",
  "YT",
  "MA",
  "MZ",
  "NA",
  "NE",
  "NG",
  "RE",
  "RW",
  "ST",
  "SN",
  "SC",
  "SL",
  "SO",
  "ZA",
  "SS",
  "SD",
  "SZ",
  "TZ",
  "TG",
  "TN",
  "UG",
  "EH",
  "ZM",
  "ZW",
];

export const CountryList = AfricanCountries.map((code) => ({
  id: code,
  name: countriesQuery.getCountry(code) as string,
}));

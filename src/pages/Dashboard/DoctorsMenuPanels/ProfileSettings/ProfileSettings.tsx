import { DecoratedButton } from "@components";
import React from "react";
import { InputField } from "src/components/InputField";
import images from "../../../../assets/team/margret.png";
import { countryData } from "@constants";
import { RiAttachment2 } from "react-icons/ri";
import image1 from "../../../../assets/pdf.png";

const countryCurrency = [
  {
    label: "UGX",
    value: "ugx",
  },
  {
    label: "USD",
    value: "usd",
  },
];

const ProfileSettings = () => {
  return (
    <div className="bg-white pt-2 pb-3">
      <div className="bg-white flex">
        <div className="w-1/2 px-2 border-r border-primary pr-5">
          <h4 className="text-base text-primary font-bold">Profile Picture</h4>
          <div className="flex items-end">
            <img
              src={images}
              alt="doctors Name0"
              className="rounded-full border border-accent w-36 h-36"
            />
            <DecoratedButton
              hoverColor="accent"
              color="primary"
              className="p-1 text-sm px-2"
            >
              Upload Photo
            </DecoratedButton>
          </div>
          <div className="flex gap-4 my-4 w-full">
            <div className="w-1/2">
              <h6 className="text-primary font-medium text-sm mb-1">
                First Name
              </h6>
              <InputField
                type="text"
                placeholder="First Name"
                name="fname"
                value="Margret"
              />
            </div>
            <div className="w-1/2">
              <h6 className="text-primary font-medium text-sm mb-1">SurName</h6>
              <InputField
                type="text"
                placeholder="SurName"
                name="lname"
                value="Mutumba"
              />
            </div>
          </div>
          <div className="flex gap-4 my-4 w-full">
            <div className="w-1/2">
              <h6 className="text-primary font-medium text-sm mb-1">Gender</h6>
              <select className="form-select block box-border border border-gray w-full rounded-lg select-none py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary mr-2 font-Poppins transition ease-in-out">
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="w-1/2">
              <h6 className="text-primary font-medium text-sm mb-1">
                Email Address
              </h6>
              <InputField
                type="email"
                placeholder="Email"
                name="email"
                value="margret@medatlas.com"
              />
            </div>
          </div>

          <div className="my-4">
            <h6 className="text-primary font-medium text-sm mb-1">
              Languages spoken
            </h6>
            <InputField
              type="text"
              placeholder="Languages"
              name="lang"
              value="English, Luganda, French"
            />
          </div>
          <div className="my-4">
            <h6 className="text-primary font-medium text-sm mb-1">
              Mobile Number
            </h6>
            <div className="flex">
              <select
                defaultValue="+256"
                className="form-select block box-border border border-gray w-full rounded-lg select-none py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary mr-2 font-Poppins transition ease-in-out"
              >
                {countryData.map((country) => (
                  <option
                    className="travelcompany-input"
                    value={country.code}
                    key={country.code}
                  >
                    {country.name}
                  </option>
                ))}
              </select>
              <InputField
                type="number"
                placeholder="759130054"
                name="lang"
                value=""
              />
            </div>
            <div className="flex gap-4 my-4 w-full">
              <div className="w-1/2">
                <h6 className="text-primary font-medium text-sm mb-1">
                  Country of Residence
                </h6>
                <select
                  defaultValue="+256"
                  className="form-select block box-border border border-gray w-full rounded-lg select-none py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary mr-2 font-Poppins transition ease-in-out"
                >
                  {countryData.map((country) => (
                    <option
                      className="travelcompany-input"
                      value={country.code}
                      key={country.code}
                    >
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-1/2">
                <h6 className="text-primary font-medium text-sm mb-1">City</h6>
                <InputField
                  type="text"
                  placeholder="City"
                  name="city"
                  value=""
                />
              </div>
            </div>
            <div className="my-4">
              <h6 className="text-primary font-medium text-sm mb-1">
                Speciality
              </h6>
              <InputField
                type="text"
                placeholder="speciality"
                name="speciality"
                value="Oethopedics"
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 px-2 pl-5">
          <div className="my-4">
            <h4 className="text-base text-primary font-bold">About Me</h4>
            <textarea
              className="textarea textarea-primary box-border border border-gray w-full rounded-lg select-none text-gray-700 leading-tight py-2 px-3 focus:outline-none focus:border-primary mr-2 font-Poppins"
              placeholder="Add information about you (will be visible to patients)"
            ></textarea>
          </div>
          <div className="my-4">
            <h6 className="flex items-center mb-1 font-Poppins font-medium text-sm text-primary">
              <RiAttachment2 />
              Attachments (2)
            </h6>
            <div
              className="p-5 rounded-xl flex flex-wrap items-center"
              style={{
                background: `linear-gradient(100.32deg, #FCF5FF -6.29%, #F5E4FF 88.21%)`,
              }}
            >
              <div className="flex flex-col items-center justify-center mr-1">
                <img src={image1} alt="pdf" className="w-8 h-auto" />
                <h6 className="text-xs text-primary font-medium">
                  Medical/Practitioner Degree.pdf
                </h6>
              </div>
              <div className="flex flex-col items-center justify-center mr-1">
                <img src={image1} alt="pdf" className="w-8 h-auto" />
                <h6 className="text-xs text-primary font-medium">
                  Medical/Practitioner Degree.pdf
                </h6>
              </div>
              <div className="w-8 h-8 rounded-xl bg-backgroundPurple flex items-center justify-center text-white m-1">
                +
              </div>
            </div>
            <div className="my-1">
              <p className="text-base text-primary">
                <strong className="text-accent mr-1">Note:</strong>Please only
                upload the Medical Degree or Practitioner Degree,Specialist
                Certification and Current Practising License. These documents
                will <strong className="text-primary">not be visible</strong> to
                patients and only for administrative use.
              </p>
            </div>
          </div>

          <div className="my-4">
            <h6 className="text-primary font-medium text-sm mb-1">
              Health Facility Name and Address
            </h6>
            <InputField
              type="text"
              placeholder="location"
              name="location"
              value="mulago"
            />
          </div>
          <div className="my-4">
            <h6 className="text-primary font-medium text-sm mb-1">
              Conultation Fees (Convert to USD)
            </h6>
            <div className="flex">
              <select
                defaultValue="+256"
                className="form-select block box-border border border-gray w-full rounded-lg select-none py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary mr-2 font-Poppins transition ease-in-out"
              >
                {countryCurrency.map((currency) => (
                  <option
                    className="travelcompany-input"
                    value={currency.value}
                    key={currency.value}
                  >
                    {currency.label}
                  </option>
                ))}
              </select>
              <InputField
                type="number"
                placeholder="50,000"
                name="amount"
                value=""
              />
            </div>
          </div>
          <div className="my-4">
            <h6 className="text-primary font-medium text-sm mb-1">
              Follow-up Fees
            </h6>
            <div className="flex">
              <select
                defaultValue="+256"
                className="form-select block box-border border border-gray w-full rounded-lg select-none py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary mr-2 font-Poppins transition ease-in-out"
              >
                {countryCurrency.map((currency) => (
                  <option
                    className="travelcompany-input"
                    value={currency.value}
                    key={currency.value}
                  >
                    {currency.label}
                  </option>
                ))}
              </select>
              <InputField
                type="number"
                placeholder="50,000"
                name="amount"
                value=""
              />
            </div>
          </div>
          <div className="my-4">
            <h6 className="text-primary font-medium text-sm mb-1">
              Mode of Payment
            </h6>
            <div className="flex">
              <select
                defaultValue="+256"
                className="form-select block box-border border border-gray w-full rounded-lg select-none py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary mr-2 font-Poppins transition ease-in-out"
              >
                <option>Mobile Money</option>
                <option>Bank Transfer</option>
              </select>
              <InputField
                type="number"
                placeholder="759130054"
                name="number"
                value=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-4">
        <DecoratedButton
          color="primary"
          hoverColor="accent"
          className="px-4 py-1 w-1/2"
        >
          Update Profile
        </DecoratedButton>
      </div>
    </div>
  );
};

export default ProfileSettings;

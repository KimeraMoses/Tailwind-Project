import { DecoratedButton } from "@components";
// import React, { useState } from "react";
import { InputField } from "src/components/InputField";
import images from "../../../assets/team/margret.png";
import medLogo from "../../../assets/medatlas_logo.png";

import { countryData } from "@constants";

const ProfileSetting = () => {
  // const [values, setValues] = useState({
  //   image: "",
  // })
  return (
    <div className="bg-backgroundSidebar p-3 rounded">
      <form className="bg-white pt-2 pb-3">
        <div className="flex">
          <div className="w-1/2 px-2 border-r border-primary pr-5">
            <h4 className="text-base text-primary font-bold">
              Profile Picture
            </h4>
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
                <h6 className="text-primary font-medium text-sm mb-1">
                  Surname
                </h6>
                <InputField
                  type="text"
                  placeholder="SurName"
                  name="lname"
                  value="Mutumba"
                />
              </div>
            </div>

            <div className="my-4">
              <h6 className="text-primary font-medium text-sm mb-1">Gender</h6>
              <select className="form-select block box-border border border-gray w-full rounded-lg select-none py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary mr-2 font-Poppins transition ease-in-out">
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="my-4">
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
                  value="759130054"
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
                  <h6 className="text-primary font-medium text-sm mb-1">
                    City
                  </h6>
                  <InputField
                    type="text"
                    placeholder="City"
                    name="city"
                    value="Kampala"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center my-4">
              <DecoratedButton
                color="primary"
                hoverColor="accent"
                className="px-4 py-1 w-1/2"
                type="submit"
              >
                Update Profile
              </DecoratedButton>
            </div>
          </div>
          <div className="w-1/2 px-2 pl-5 flex items-center justify-center">
            <img src={medLogo} alt="MedAtlas Inc" className="" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileSetting;

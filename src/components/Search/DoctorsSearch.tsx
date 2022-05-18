import React from "react";
import { BiSearch } from "react-icons/bi";
import { MdFilterList } from "react-icons/md";
import { InputField } from "./../InputField/InputField";

interface SearchProps {
  onSearchHandler: (e: any) => void;
  searchTerm: string;
}

const DoctorsSearch: React.FunctionComponent<SearchProps> = ({
  onSearchHandler,
  searchTerm,
}) => {
  return (
    <div className="w-full flex bg-white shadow-md p-2 rounded-md items-center select-none">
      <div className="text-primary flex mr-3 items-center font-medium">
        <MdFilterList className="text-2xl mr-1" /> Filter
      </div>
      <div className="flex-grow">
        <div className="flex items-center bg-background rounded-xl px-2">
          <BiSearch className="text-xl text-grayPrimary" />
          <InputField
            placeholder="Search Name or Speciality or Location"
            value={searchTerm}
            name="search"
            type="search"
            onChange={onSearchHandler}
            customClasses="border-none bg-background rounded-none"
          />
        </div>
      </div>
    </div>
  );
};

export default DoctorsSearch;

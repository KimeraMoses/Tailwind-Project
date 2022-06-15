import React, { useEffect, useState } from "react";
import DoctorCardDashboard from "src/components/DoctorCard/DoctorCardDashboard";
import DoctorsSearch from "./../../../components/Search/DoctorsSearch";
// import { useSearchDoctors } from "@hooks";
import { DoctorsList } from "./../../Home/DoctorsSection/DoctorsSection";

const SearchDoctors = () => {
  // const doctorsList = useSearchDoctors({});
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<any[] | null>([]);
  const keyWordHandler = (e: any) => {
    const { value } = e.target;
    setSearchTerm(value);

    if (searchTerm !== "") {
      const Results = DoctorsList.filter((Result: any) => {
        return Object.values(Result)
          .join(" ")
          .replace(/-/g, " ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(Results);
    }
  };
  useEffect(() => {
    setSearchResults([]);
  }, [searchTerm.length < 1]);

  // const filteredData: any[] = [];

  // if (searchResults && searchResults?.length > 0) {
  //   searchResults.forEach((result) => {
  //     filteredData.push(result);
  //   });
  // }

  return (
    <div className="w-full bg-backgroundSidebar p-3 rounded">
      <h3 className="text-primary font-semibold text-2xl mb-5">Doctors</h3>
      <DoctorsSearch onSearchHandler={keyWordHandler} searchTerm={searchTerm} />
      <div className="my-6 mx-3">
        {searchTerm.length > 3 && searchResults && searchResults.length < 1 ? (
          <div className="text-center w-full shadow-md rounded-2xl bg-white p-10 m-4 mx-auto font-medium">
            No Doctors with{" "}
            <strong className="text-primary">{searchTerm}</strong> found! <br />{" "}
            Try another search term
          </div>
        ) : (
          (searchResults && searchResults.length > 0
            ? searchResults
            : DoctorsList
          ).map((doctor) => {
            return (
              <DoctorCardDashboard
                key={doctor.name}
                name={doctor.name}
                image={doctor.image}
                speciality={doctor.speciality}
                city={doctor.city}
                country={doctor.country}
                rating={doctor.rating}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default SearchDoctors;

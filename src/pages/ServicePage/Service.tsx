import React from "react";
import { Footer } from "./../../components/Footer/Footer";
import { DecoratedButton } from "./../../components/Buttons/ButtonDecorated";
import { serviceData } from "./../../constants/services";

const Service: React.FunctionComponent = () => {
  return (
    <>
      <div className="bg-background py-6 px-10">
        <h3 className="text-primary font-semibold text-3xl mb-5">Services</h3>

        <div className="flex flex-wrap">
          {serviceData.map((item) => {
            return (
              <div className="w-1/2 p-4" key={item.id}>
                <div className="bg-white rounded-md shadow-md flex p-2">
                  <div className="mr-1 rounded-full w-1/5">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-48 h-24"
                    />
                  </div>
                  <div className="ml-2 w-4/5">
                    <h6 className="text-primary text-md font-bold">
                      {item.title}
                    </h6>
                    <p className="text-md">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center my-4">
          <DecoratedButton
            color="primary"
            hoverColor="accent"
            className="px-6 py-2"
            type="button"
          >
            Load More...
          </DecoratedButton>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service;

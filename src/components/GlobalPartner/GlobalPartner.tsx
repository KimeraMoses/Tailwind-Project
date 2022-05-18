import React from "react";
import GlobalPartnerCard from "./GlobalPartnerCard";
import Partner1 from "../../assets/partners/WH.png";
import Partner2 from "../../assets/partners/Fertility.png";
import Partner3 from "../../assets/partners/vessel.png";

const GlobalPartner: React.FunctionComponent = () => {
  return (
    <div className="mt-12 px-10 text-center">
      <h3 className="text-primary text-4xl font-semibold mb-8">
        Global Partnerships
      </h3>
      <div className="flex gap-8 justify-center">
        <GlobalPartnerCard
          title="Women’s Hospital"
          location="Uganda, Tanzania, Zambia"
          image={Partner1}
        />
        <GlobalPartnerCard
          title="Neogenesis Fertilty Center"
          location="Uganda"
          image={Partner2}
        />
        <GlobalPartnerCard
          title="Vessel Is Me"
          location="Uganda"
          image={Partner3}
        />
      </div>
    </div>
  );
};

export default GlobalPartner;

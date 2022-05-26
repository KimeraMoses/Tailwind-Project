import { faqs } from "@constants";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FaqCard from "./FaqCard";
import { YTLink } from "./../../../../constants/faqs";

const Faqs: React.FunctionComponent = () => {
  const userRole = useSelector((state: any) => state.account.userRole);
  const isPatient = userRole && userRole === "patient" ? true : false;

  let currentFaqs = [];
  if (!isPatient) {
    currentFaqs = faqs.filter((faq) => faq.type !== "patient");
  } else {
    currentFaqs = faqs.filter((faq) => faq.type !== "doctor");
  }
  return (
    <div className="w-full pr-5 py-5">
      {currentFaqs.map((faq) => {
        return (
          <FaqCard
            key={faq.id}
            FaqTitle={faq.qn}
            FaqContent={faq.ans}
            FaqOpen={faq.id === 1 ? true : false}
          />
        );
      })}

      <FaqCard
        FaqTitle="Who benefits from MedAtlas?"
        FaqContent="There are three main beneficiaries of telemedicine;"
        FaqOpen={false}
      >
        <div className="mb-2">
          <strong>Patients:</strong>
          <p>
            MedAtlas gives patients the opportunity to receive care without a
            trip to the doctor’s office. They don’t have to take time away from
            work or family responsibilities. They don’t waste time travelling,
            or money on parking or public transportation. They don’t risk
            exposure to other patients with communicable illnesses. And they get
            better health outcomes and become more engaged in their own
            healthcare.
          </p>
        </div>
        <div className="mb-2">
          <strong>Specialists:</strong>
          <p>
            Video visits reduce the time of each encounter, allowing providers
            to see more patients, more efficiently. This boosts revenue and
            minimises overhead expenses. MedAtlas reduces no-shows and
            cancellations. It also helps secure patient loyalty in a competitive
            healthcare landscape.
          </p>
        </div>
        <div className="mb-2">
          <strong>The Healthcare System:</strong>
          <p>
            Even if you never use MedAtlas yourself, you will likely benefit
            from the practice. The efficiency will reduce wait-times for
            in-person visits, help keep people with non-urgent conditions out of
            the emergency room, and improve the overall health of the
            population.
          </p>
        </div>
      </FaqCard>
      {isPatient && (
        <FaqCard FaqTitle="How do I book an appointment with MedAtlas?">
          <p>
            Please watch our booking instruction video{" "}
            <Link to={YTLink} className="font-bold text-accent">
              here
            </Link>{" "}
            or pdf instructions.If you experience any challenges, contact the
            MedAtlas team at info@medatlas.com or via Whatsapp + 1 226 899 6265.
          </p>
        </FaqCard>
      )}
    </div>
  );
};

export default Faqs;

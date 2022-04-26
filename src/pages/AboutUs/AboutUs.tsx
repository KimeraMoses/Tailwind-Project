import { Link } from "react-router-dom";
import { Footer } from "@components";
import GlobalPartner from "src/components/GlobalPartner/GlobalPartner";
import TeamSection from "src/components/TeamSection/TeamSection";
import image1 from "../../assets/AboutUs.png";
import MissionSection from "./MissionSection";

export const AboutUs = () => {
  return (
    <div className="w-full">
      <div className="bg-header bg-cover text-primary font-medium">
        <div className="flex flex-col bg-background rounded-md px-8">
          <h2 className="p-4 text-3xl font-bold mb-0 mt-5">About MedAtlas</h2>

          <div className="flex p-4 w-full">
            <div className="w-2/3">
              <img src={image1} alt="" className="w-full rounded-md" />
            </div>
            <div className="flex-grow ml-9">
              <div className="text-justify">
                <h3 className="text-2xl font-semibold">Our Story</h3>
                <p className="text-justify">
                  MedAtlas has been born out of the challenges many Africans
                  face when looking for specialist help. <br />
                  When you discover that you need a particular doctor to solve
                  your health problem and often, you may not be sure where to
                  start.
                </p>

                <p className="text-justify">
                  You think,{" "}
                  <i>
                    "Where should I start?" "Who should I ask?" "Where do I find
                    this type of doctor?" and "How much will it cost?"
                  </i>
                </p>
                <p className="text-justify">
                  After over 10 years of experiencing similar challenges, we are
                  excited to introduce the solution that brings peace of mind!
                </p>
              </div>
              <div className="py-5">
                <p className="text-justify">
                  With just a few clicks, speak to a certified specialist doctor
                  in the comfort of your own home.
                </p>
                <p className="text-justify">
                  Our technology makes it easier to get timely, convenient &#38;
                  confidential care without all the hustle. Our specialist
                  doctors have been thoroughly checked to give you quality care
                  online and in person. MedAtlas Specialist Doctors in Africa,
                  from Africa and for Africa.{" "}
                </p>
                <div className="mt-3">
                  <p className="text-justify">
                    Why wait? Start today at{" "}
                    <Link to="/" className="text-accent">
                      www.medatlas.com
                    </Link>
                  </p>
                  <p className="text-justify">
                    The future of specialist healthcare in Africa!{"  "}
                    <Link to="/" className="text-accent">
                      Join us today!
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-backgroundGray py-6">
        <MissionSection />
        <TeamSection />
        <GlobalPartner />
      </div>
      <Footer />
    </div>
  );
};

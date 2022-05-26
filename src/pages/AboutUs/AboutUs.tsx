import { Link } from "react-router-dom";
import { Footer } from "@components";
import GlobalPartner from "src/components/GlobalPartner/GlobalPartner";
// import TeamSection from "src/components/TeamSection/TeamSection";
import image1 from "../../assets/AboutUs.png";
import MissionSection from "./MissionSection";

export const AboutUs = () => {
  return (
    <div className="w-full">
      <div className="bg-header bg-cover text-primary font-medium">
        <div className="flex flex-col bg-background rounded-md px-8">
          <h2 className="p-4 text-3xl font-bold mb-0 mt-5">About MedAtlas</h2>

          <div className="flex p-4 w-full">
            <div className="w-1/2">
              <img src={image1} alt="" className="w-full h-auto rounded-md" />
            </div>
            <div className="w-1/2 ml-9">
              <div className="text-justify font-semibold text-primary">
                <h3 className="text-2xl font-bold mb-3">Our Story</h3>
                <p className="text-justify text-lg mb-4">
                  MedAtlas has been born out of the challenges many individuals
                  face when looking for specialist help in Africa and other
                  underresourced contexts.
                </p>
                <p className="text-justify text-lg mb-4">
                  When you discover that you need a specific doctor to solve
                  your health problem and often, you may not be sure where to
                  start.
                </p>
                <p className="text-justify text-lg mb-4">
                  You think, "Where should I start?" "Who should I ask?" "Where
                  do I find this type of doctor?" “Are they certified?” and "How
                  much will it cost?"
                </p>

                <p className="text-justify text-lg mb-4">
                  After over 10 years of research and personal experience with
                  similar challenges, MedAtlas is excited to introduce the
                  solution that brings peace of mind!
                </p>
                <p className="text-justify text-lg mb-4">
                  With just a few simple clicks, speak to a certified specialist
                  doctor in the comfort of your own home.
                </p>
                <p className="text-justify text-lg mb-4">
                  Our technology makes it easier to get timely, convenient &
                  confidential care without all the hustle. Our specialist
                  clinicians have been thoroughly checked to give you quality
                  care online and in person.
                </p>

                <div className="mt-3">
                  <p className="text-justify text-base">
                    Why wait? Start today at{" "}
                    <Link to="/" className="text-accent">
                      www.medatlas.com
                    </Link>
                  </p>
                  <p className="text-justify text-base">
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
        {/* <TeamSection /> */}
        <GlobalPartner />
      </div>
      <Footer />
    </div>
  );
};

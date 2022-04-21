import { Link } from "react-router-dom";
import { Footer } from "@components";
import GlobalPartner from "src/components/GlobalPartner/GlobalPartner";
import TeamSection from "src/components/TeamSection/TeamSection";
import image1 from "../../assets/partners/Fertility.png";

export const AboutUs = () => {
  return (
    <div className="w-full">
      <div className="py-6 px-20 bg-header bg-cover text-primary font-medium">
        <div className="border flex flex-col border-gray bg-backgroundGray rounded-md">
          <h2 className="p-4 text-4xl font-bold mb-0">About MedAtlas</h2>

          <div className="p-5 text-lg leading-8">
            <div className="flex items-start">
              <div className="pr-5">
                <img src={image1} alt="" className="w-126 h-auto rounded-md" />
              </div>
              <div className="">
                <h3 className="text-2xl font-semibold">Our Story</h3>
                <p>
                  MedAtlas has been born out of the challenges many Africans
                  face when looking for specialist help. <br />
                  When you discover that you need a particular doctor to solve
                  your health problem and often, you may not be sure where to
                  start.
                </p>

                <p>
                  You think,{" "}
                  <i>
                    "Where should I start?" "Who should I ask?" "Where do I find
                    this type of doctor?" and "How much will it cost?"
                  </i>
                </p>
              </div>
            </div>
            <p>
              After over 10 years of experiencing similar challenges, we are
              excited to introduce the solution that brings peace of mind!
            </p>
            <h3 className="text-2xl font-semibold mt-5 mb-2">Our Mission</h3>

            <p>
              MedAtlas is on a mission to make it easier to find &#38; connect
              with licensed specialist doctors from anywhere in Africa.
            </p>

            <h3 className="text-2xl font-semibold mt-5 mb-2">Our Vision</h3>
            <p>
              MedAtlas’ vision is accessible and affordable specialist
              healthcare in Africa.
            </p>

            <div className="py-5">
              <p>
                With just a few clicks, speak to a certified specialist doctor
                in the comfort of your own home.
              </p>
              <p>
                Our technology makes it easier to get timely, convenient &#38;
                confidential care without all the hustle. Our specialist doctors
                have been thoroughly checked to give you quality care online and
                in person. MedAtlas Specialist Doctors in Africa, from Africa
                and for Africa.{" "}
              </p>
              <div className="mt-3">
                <p>
                  Why wait? Start today at{" "}
                  <Link to="/" className="text-accent">
                    www.medatlas.com
                  </Link>
                </p>
                <p>
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
      <div className="w-full bg-backgroundGray py-6 px-20">
        <TeamSection />
        <GlobalPartner />
      </div>
      <Footer />
    </div>
  );
};

import { Link } from "react-router-dom";
import { Footer } from "@components";

export const AboutUs = () => {
  return (
    <>
      <div className="bg-primary p-6">
        <div className="flex gap-3 text-xs text-white font-thin">
          <Link to="/">Home</Link>/ About
        </div>
        <h1 className="b text-white text-xl font-semibold">Our History</h1>
      </div>

      <div className="p-6 bg-white">
        <div className="border flex flex-col gap-4 border-gray text-primary ">
          <h3 className="border border-b border-gray p-4 text-black text-lg font-semibold">
            About MedAtlas
          </h3>
          <div className="p-5 flex flex-col gap-4 text-lg leading-8">
            <p>
              Have you or a loved one ever discovered that you need a particular
              doctor to solve your health problem and not be sure where to
              start?
            </p>
            <p>
              You think,{" "}
              <i>
                "Where should I start?" "Who should I ask?" "Where do I find
                this type of doctor?" and "How much will it cost?"
              </i>
            </p>
            <p>
              After over 10 years of experiencing similar challenges, we are
              excited to introduce the solution that brings peace of mind!
            </p>
            <h1 className="text-2xl text-accent">
              MedAtlas is on a mission to make it easier to find & connect with
              licensed specialist doctors in Africa.
            </h1>
            <p>
              With just a few clicks, speak to a certified specialist doctor in
              the comfort of your own home.
            </p>
            <p>
              Our technology makes it easier to get timely, convenient &
              confidential care without all the hustle. Our specialist doctors
              have been thoroughly checked to give you quality care online and
              in person. MedAtlas Specialist Doctors in Africa, from Africa and
              for Africa.
            </p>
            <p>
              Why wait? Start today at{" "}
              <Link to="/" className="text-accent">
                www.medatlas.com
              </Link>{" "}
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
      <Footer />
    </>
  );
};

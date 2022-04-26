import React from "react";
import image from "../../assets/partners/vessel.png";
import image2 from "../../assets/MedAtlasDoctors.png";

const MissionSection = () => {
  return (
    <div className="mx-8 text-center select-none">
      <div className="flex justify-between">
        <div className="flex flex-col w-1/2 gap-3">
          <div className="px-5">
            <div className="rounded-full">
              <img
                className="w-28 h-28 rounded-full mx-auto"
                src={image}
                alt=""
                width="124"
                height="124"
              />
            </div>
            <h3 className="text-primary text-2xl font-Poppins font-semibold mt-2">
              Our Mission
            </h3>
            <p className="text-sm mt-3 text-primary font-semibold">
              MedAtlas is on a mission to make it easier to find &#38; connect
              with licensed specialist doctors from anywhere in Africa.
            </p>
          </div>
          <div className="px-5 mt-2">
            <div className="rounded-full bg-white w-28 h-28 mx-auto">
              <img
                className="w-28 h-28 rounded-full mx-auto"
                src={image2}
                alt=""
                width="124"
                height="124"
              />
            </div>
            <h3 className="text-primary text-2xl font-Poppins font-semibold mt-2">
              Our Vision
            </h3>
            <p className="text-sm mt-3 text-primary font-semibold">
              MedAtlas’ vision is accessible and affordable specialist
              healthcare in Africa.
            </p>
          </div>
        </div>
        <div className="w-1/2 flex justify-center pt-5">
          {/* <div className="w-full h-128 "> */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/SvSXT3kdio4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            //   allowfullscreen ={true}
          ></iframe>
          {/* <video
              src="https://www.youtube.com/watch?v=SvSXT3kdio4"
              loop
              autoPlay
            /> */}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default MissionSection;

import React from "react";
import { TeamData } from "src/constants/TeamData";
import TeamCard from "./TeamCard/TeamCard";

const TeamSection = () => {
  return (
    <div className="mt-8 px-8 text-center">
      <h3 className="text-primary text-4xl font-semibold mb-10">Our Team</h3>
      <div className="flex mt-6 justify-between">
        {TeamData.map((team) => {
          return (
            <TeamCard
              key={team.name}
              name={team.name}
              firstName={team.firstName}
              image={team.image}
              title={team.title}
              proffession={team.profession}
              linkedIn={team.linkedIn}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TeamSection;

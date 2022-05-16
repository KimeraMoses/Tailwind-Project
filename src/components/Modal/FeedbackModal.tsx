import React from "react";
import { BsEmojiNeutral } from "react-icons/bs";
import { RadioInput } from "../InputField";
import { DecoratedButton } from "./../Buttons/ButtonDecorated";

const FeedbackModal = () => {
  return (
    <div className="w-128 bg-white p-3 rounded-lg mb-20 shadow-md mt-14">
      <div className="mx-1 p-3 bg-accent text-center text-white font-semibold mb-4">
        Feedback Form
      </div>
      <h4 className="mb-3 text-primary">
        Tell us what you think about our services!
      </h4>
      <div className="flex items-center justify-between px-4 mt-5">
        <div className="flex flex-col justify-center items-center">
          <BsEmojiNeutral className="text-4xl text-primary" />
          <div className="form-check form-check-inline">
            <RadioInput value="option1" label="Bad" name="feedback" id="01" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <BsEmojiNeutral className="text-4xl text-primary" />
          <div className="form-check form-check-inline">
            <RadioInput value="option1" label="Okay" name="feedback" id="01" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <BsEmojiNeutral className="text-4xl text-primary" />
          <div className="form-check form-check-inline">
            <RadioInput value="option1" label="Good" name="feedback" id="01" />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h4 className="mb-3 text-primary">
          What did you like? What can we do better?
        </h4>
        <textarea
          rows={4}
          className="textarea textarea-primary box-border border border-gray w-full rounded-lg select-none text-gray-700 leading-tight py-2 px-3 focus:outline-none focus:border-primary mr-2 font-Poppins"
          placeholder="Type here"
        ></textarea>
      </div>
      <div className="flex justify-center my-4">
        <DecoratedButton
          color="primary"
          hoverColor="accent"
          className="px-4 py-1 w-1/2"
          type="submit"
        >
          Submit
        </DecoratedButton>
      </div>
    </div>
  );
};

export default FeedbackModal;

import React, { useState } from "react";
import RichTextEditor from "./RichTextEditor";
import { BiImageAdd } from "react-icons/bi";
import { CheckBoxInput } from "./../../../../components/InputField/InputField";
import { DoctorMinCard } from "./../../../../components/BookingSummary/BookingComponents/BookingForm/BookingForm";
import { DecoratedButton } from "@components";

const NewBlogPost = () => {
  const [image, setImage] = useState<unknown>("");
  const imageHandler = () => {
    document.getElementById("post_image_input_change")?.click();
  };

  //====POST IMAGE HANDLER====//
  const postImageHandler = async (e: any) => {
    const file = e.target.files[0];
    const Image = await convertbase64Logo(file);
    setImage(Image);
  };

  const convertbase64Logo = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div className="bg-backgroundSidebar w-full p-3 rounded">
      <div
        style={{ fontStyle: "italic", color: "red" }}
        className="mt-1 py-3 px-2"
      >
        <div className="mt-1">
          The form is not connected to recieve data at the moment
        </div>
      </div>
      <h3 className="text-primary font-semibold text-2xl mb-3">
        Write your own article
      </h3>
      <p className="mb-2">
        Share what you know or feel the world should get to know in your feild
        of expertise
      </p>
      <div className="w-full">
        <RichTextEditor />

        <div className="my-5">
          <h4 className="text-primary font-medium text-lg">
            Upload Post Image
          </h4>
          <div
            onClick={imageHandler}
            className="flex flex-col items-center justify-center w-full cursor-pointer p-20 bg-[#EFF2F5] mt-5 border border-dashed rounded-md border-grayPrimary h-36"
          >
            <div>
              <BiImageAdd className="text-6xl text-primary" />
            </div>
            <input
              type="file"
              title=""
              hidden
              value=""
              id="post_image_input_change"
              onChange={postImageHandler}
            />
          </div>
        </div>

        <div className="my-3">
          <h3 className="text-primary font-semibold text-lg mb-3">
            Declaration
          </h3>
          <p className="flex items-start">
            <CheckBoxInput
              id="name"
              onChange={(e) => console.log("Checked", e.target.checked)}
              name="name"
              className="mr-2"
            />
            I declare that the information I have written is solely my
            professional view points and not those of MedAtlas or the employees
            of MedAtlas. I have written this piece in my right frame of mind and
            without coercion.
          </p>
          <div className="my-3 p-3 bg-white">
            <DoctorMinCard />
          </div>
        </div>

        <div className="flex justify-center items-center my-5">
          <DecoratedButton
            color="primary"
            hoverColor="accent"
            className="rounded-lg w-80"
            disabled
          >
            Submit
          </DecoratedButton>
        </div>
      </div>
    </div>
  );
};

export default NewBlogPost;

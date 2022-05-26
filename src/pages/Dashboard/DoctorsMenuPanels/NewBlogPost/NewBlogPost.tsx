import React, { useState } from "react";
import RichTextEditor from "./RichTextEditor";
import { BsImage } from "react-icons/bs";

const NewBlogPost = () => {
  const [image, setImage] = useState<unknown>("");

  const imageHandler = () => {
    document.getElementById("post_image_input_change")?.click();
  };

  //====POST IMAGE HANDLER====//
  const postImageHandler = async (e: any) => {
    const file = e.target.files[0];
    const Image = await convertbase64Logo(file);
    const CImage = Image;
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
            className="flex flex-col items-center justify-center w-full cursor-pointer p-20 bg-[#EFF2F5] mt-5 border border-grayPrimary h-36"
          >
            <BsImage className="text-6xl text-primary" />
            <input
              type="file"
              hidden
              title=""
              value=""
              id="post_image_input_change"
              onChange={postImageHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBlogPost;

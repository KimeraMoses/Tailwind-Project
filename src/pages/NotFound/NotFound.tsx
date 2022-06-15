import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div
      className="
      bg-background
     w-full
     h-screen 
     p-10 
     flex justify-center items-center flex-col"
    >
      <h1 className="text-4xl text-primary mb-5">Not Found Page !</h1>
      <Link
        to="/"
        className="mt-5 shadow border border-gray rounded-md text-white font-medium px-4 py-2  transition bg-primary hover:bg-accent"
      >
        Back Home
      </Link>
    </div>
  );
};

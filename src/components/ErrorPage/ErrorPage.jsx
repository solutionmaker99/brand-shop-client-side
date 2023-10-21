import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center text-center flex-col space-y-5 my-auto h-screen">
      <h2 className="text-3xl font-bold">404</h2>
      <p className="text-xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-xl font-bold">Not Found</p>
    </div>
  );
};

export default ErrorPage;

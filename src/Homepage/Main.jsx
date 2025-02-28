import React from "react";

const Main = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <a href="https://colorlib.com/wp/templates/" className="mb-8">
        <img
          src="https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-push-logo.png"
          alt="Colorlib logo"
          className="mx-auto block"
        />
      </a>

      <h1 className="text-2xl font-bold text-center mb-4">
        Thank you for using our template!
      </h1>

      <p className="text-center mb-6">
        For more awesome templates please visit{" "}
        <strong>
          <a
            href="https://colorlib.com/wp/templates/"
            className="text-blue-600 hover:underline"
          >
            Colorlib
          </a>
        </strong>
        .
      </p>

      <p className="text-center text-red-600 font-medium mb-2">
        <strong>
          Copyright information for the template can't be altered/removed unless
          you purchase a license.
        </strong>
      </p>

      <p className="text-center mb-2">
        <strong>
          Removing copyright information without the license will result in
          suspension of your hosting and/or domain name(s).
        </strong>
      </p>

      <p className="text-center">
        <strong>
          More information about the license is available{" "}
          <a
            href="https://colorlib.com/wp/licence/"
            className="text-blue-600 hover:underline"
          >
            here
          </a>
          .
        </strong>
      </p>
    </div>
  );
};

export default Main;

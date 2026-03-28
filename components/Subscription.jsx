import React from "react";

function Subscription() {
  return (
    <div className="text-center my-8">
      <p className="text-5xl tracking-wide font-medium">Latest Blogs</p>
      <p className="mt-10 max-w-185 m-auto text-xs sm:text-base ">
        Find all the info you need on Stray Kids - latest, past and what not all
        in one place here! Stray Kids everywhere aruond the world!
      </p>
      <form
        className="flex justify-between max-w-[500] scale-75 sm:scale-100 mx-auto mt-10 border border-black"
        action=""
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="pl-4 outline-none"
        />
        <button
          type="submit"
          className="border border-black py-4 px-4 sm:px-8 active:bg-gray-500 active:text-white hover:bg-gray-300 cursor-pointer"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default Subscription;

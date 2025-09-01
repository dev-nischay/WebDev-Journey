import { useState } from "react";

export default () => {
  const [input, setInput] = useState("");
  return (
    <>
      <div className="mx-auto text-center leading-10  h-1/2 w-3/4 flex flex-col gap-5 items-center ">
        <div className="text-xl ">
          <span className="text-cyan-400 ">Webinar</span>.gg
        </div>
        <div className="text-xl  ">Verify Your Age</div>
        <div className="text-xs text-gray-200  ">
          Please confirm your birth year.This data will not be stored
        </div>
        <input
          type="text"
          className=" w-60 py-3 px-5 rounded  bg-blue-900 text-xs"
          placeholder="Your Birth Year"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={() => alert("Form submitted")}
          className="text-white bg-gray-400 px-24 py-2 rounded font-medium text-xs"
        >
          Continue
        </button>
      </div>
    </>
  );
};

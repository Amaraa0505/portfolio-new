import React from "react";

const Texts = () => {
  return (
    <div id="first" className="scroll-smooth h-[100%]">
      <h1 className="absolute top-52 left-[400px] text-white font-semibold text-5xl ">
        Think better with Amarsanaa
      </h1>
      <div className="absolute top-96 left-[400px]">
        <div className="text-slate-500 text-2xl font-semibold hover: ">
          Programming
        </div>
        <p className=" text-slate-300 text-xl font-semibold">* HTML</p>
        <p className=" text-slate-300 text-xl font-semibold">* CSS</p>
        <p className=" text-slate-300 text-xl font-semibold">* JAVASCRIPT</p>
      </div>
      <div className="absolute top-96 left-[900px]">
        <h1 className=" text-slate-500 text-2xl font-semibold">Works</h1>
        <p className=" text-slate-300 text-xl font-semibold">* MARS-V</p>
        <p className=" text-slate-300 text-xl font-semibold">* NEPKO KIDS</p>
        <p className=" text-slate-300  text-xl font-semibold">* LOUD LIBRARY</p>
      </div>
    </div>
  );
};

export default Texts;

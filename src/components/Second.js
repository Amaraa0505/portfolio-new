import React from "react";

export const Second = () => {
  return (
    <div id="second" className="h-[100%]">
      <div className="top-[1100px] absolute left-[1200px] ">
        <h1 className=" text-slate-500 text-3xl font-semibold border-y-2">
          Volunteer
        </h1>
        <li className=" text-slate-300  text-xl font-semibold">
          World Space week (2 times)
        </li>
        <li className=" text-slate-300 text-xl font-semibold">
          Festival as an organizer (2 times)
        </li>
        <li className=" text-slate-300 text-xl font-semibold">Mars-v</li>
      </div>
      <div className="top-[1150px] absolute left-10 flex flex-col gap-5">
        <h1 className="text-slate-500  text-3xl font-semibold border-b-[3px]">
          About Me
        </h1>
        <p className=" text-white  w-80 text-xl">
          I'm Amarsanaa. I'm freelance Full Stack developer. I'm very passionate
          and dedicated to my work. I have aquired the skills necessary to build
          great and premium websites
        </p>
      </div>
      <img
        src="me.jpg"
        className="absolute rounded-full top-[1185px] left-[410px] w-[430px] h-[420px] border-4 border-purple-800"
      ></img>
      <div className="absolute top-[1300px] left-[920px]">
        <h1 className="text-slate-500 font-semibold text-2xl  border-y-2">
          INTERSTS
        </h1>
        <li className="text-slate-300 font-semibold text-xl">Dancing</li>
        <li className="text-slate-300 font-semibold text-xl">
          Interesting piano
        </li>
        <li className="text-slate-300 font-semibold text-xl">Travelling</li>
      </div>
      <div className=" absolute top-[1100px] left-[920px] ">
        <h1 className="text-slate-500 font-semibold text-2xl border-y-2">
          SKILLS
        </h1>
        <li className="text-slate-300 font-semibold text-xl">Chess</li>
        <li className="text-slate-300 font-semibold text-xl">Gymnastic</li>
        <li className="text-slate-300 font-semibold text-xl">
          Make people angry
        </li>
      </div>
    </div>
  );
};

import React from "react";

export const Third = () => {
  return (
    <div id="third" className="h-[100%]">
      {/* <div className="absolute top-[2150px] flex left-10 gap-4 "> */}
      {/* <div className="flex flex-col gap-4">
          <input
            className="rounded-xl p-3 border-2 bg-green-600 border-green-600"
            placeholder="Name"
          />
          <input
            className="bg-purple-800 rounded-xl p-3 border-2 border-purple-800"
            placeholder="Email"
          />
          <input
            className="bg-purple-800 rounded-xl p-3 border-2 border-purple-800"
            placeholder="Phone"
          />
        </div> */}
      {/* 
        <input
          className="bg-purple-800 rounded-xl p-3 border-2 border-purple-800"
          placeholder="Your Message"
        /> */}
      {/* </div> */}

      {/* <button className="text-slate-300 font-semibold bg-purple-800 border-2 border-purple-800 rounded-xl p-2 h-10 absolute top-[2350px] left-10 w-[420px]">
        Send Message
      </button> */}

      <div className="absolute top-[2200px] left-36 flex flex-col gap-3">
        <h1 className="text-white">+976 86870550</h1>
        <h1 className="text-white ">amarsanaa.tumurbaatar26@gmail.com</h1>
        <h1 className="text-white ">Амарсанаа Төмөрбаатар</h1>
        <h1 className="text-white ">amarsanaa26</h1>
      </div>
      <div className="absolute top-[2200px] left-24 flex flex-col gap-3">
        <img src="phone.jpeg" className="w-6 h-6 rounded-full"></img>
        <img className="w-6 rounded-full h-6" src="mail.png"></img>
        <img className="w-6 rounded-full h-6 " src="fb.jpeg"></img>
        <img className="w-6 rounded-full h-6" src="ig.jpeg"></img>
      </div>
    </div>
  );
};

import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const router = useRouter();

  const screen = (name) => {
    const d = document.getElementById(name);
    d.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  };
  return (
    <div className="bg-black font-bold text-white sticky top-0 p-3 justify-center items-center flex">
      <div className="flex gap-3">
        {/* <p className="text-white font-bold" onClick={}> */}
        <div
          onClick={() => {
            screen("first");
          }}
        >
          Home
        </div>
        <div
          onClick={() => {
            screen("second");
          }}
        >
          About
        </div>
        <div
          onClick={() => {
            screen("third");
          }}
        >
          Contact
        </div>
      </div>
    </div>
  );
};

export default Header;

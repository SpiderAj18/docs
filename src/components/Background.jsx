import React from "react";

function Background() {
  return (
    <>
      <div className=" fixed z-[2] w-full h-screen">
        <div className="absolute top-[1%] bg-slate-800 w-full py-9 flex justify-center text-xl text-zinc-200">
          Document
        </div>
        <div className=" text-white opacity-20 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] absolute text-[130px]">
          Docs.
        </div>
      </div>
    </>
  );
}

export default Background;

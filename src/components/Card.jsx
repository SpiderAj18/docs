import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({ data,reference }) {
  return (
    <motion.div drag dragConstraints={reference} className="relative w-60 h-64 text-zinc-400 bg-zinc-900/90 rounded-[30px] p-5 overflow-hidden m-3 ">
      <h1>
        <FaRegFileAlt />
      </h1>
      <p className="text-sm mt-8">{data.desc}</p>
      <div className="footer absolute bottom-0 rounded-b-[20px] left-0 w-full ">
        <div className="flex items-center justify-between px-6 py-7">
          <h4 className="text-sm">{data.filesize}</h4>
          {data.close ? (
            <button className="text-xl">
              {" "}
              <IoCloseSharp></IoCloseSharp>
            </button>
          ) : (
            <button className="text-xl">
              <MdOutlineDownloadForOffline />
            </button>
          )}
        </div>

        {data.tag.isOpen ? (
          <div className="tag w-full bg-green-600 px-5 py-4 text-center text-zinc-200 cursor-pointer">
            Download now
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export default Card;

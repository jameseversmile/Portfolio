import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

// import React from 'react';

const Home = () => {
  return (
    <div
      className="h-[calc(80vh-4rem)] text-center items-center flex flex-col justify-center"
      style={{
        
        
      }}
    >
      <h4 className="great-vibes-regular text-9xl">James Idris</h4>
      <hr className="border-gray-300 my-2 w-2xs" />
      <p className="montserrat-regular text-md text-gray-600">
        Full Stack Software Developer
      </p>
      <hr className="border-gray-300 my-2 w-2xs" />
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <DiMongodb className="text-4xl text-green-600" />
        <SiTypescript className="text-4xl text-blue-600" />
        <FaReact className="text-4xl text-blue-600" />
        <RiJavascriptFill className="text-4xl text-yellow-500" />
        <p className="border-2 text border-gray-300 rounded-md p-3 special-gothic-expanded-one-regular text-center">
          Express.js
        </p>
        <FaCss3Alt className="text-4xl text-blue-600" />
        <FaHtml5 className="text-4xl text-orange-500" />
        <FaNodeJs className="text-4xl text-green-500" />
        <RiTailwindCssFill className="text-4xl text-blue-500" />
      </div>
    </div>
  );
};

export default Home;

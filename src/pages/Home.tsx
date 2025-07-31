import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const Home = () => {
  return (
    <div className="min-h-[calc(80vh-4rem)] text-center flex flex-col justify-center px-4">
      <h4 className="great-vibes-regular text-5xl sm:text-6xl md:text-7xl lg:text-9xl leading-tight">
        James Idris Adeiza
      </h4>

      <hr className="border-gray-300 my-2 w-24 sm:w-36 mx-auto" />

      <p className="montserrat-regular text-sm sm:text-md md:text-lg text-gray-600">
        Full Stack Software Developer
      </p>

      <hr className="border-gray-300 my-2 w-24 sm:w-36 mx-auto" />

      <div className="flex flex-wrap justify-center gap-4 mt-4 px-2">
        <DiMongodb className="text-3xl sm:text-4xl text-green-600" />
        <SiTypescript className="text-3xl sm:text-4xl text-blue-600" />
        <FaReact className="text-3xl sm:text-4xl text-blue-600" />
        <RiJavascriptFill className="text-3xl sm:text-4xl text-yellow-500" />
        <p className="border-2 border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base special-gothic-expanded-one-regular">
          Express.js
        </p>
        <FaCss3Alt className="text-3xl sm:text-4xl text-blue-600" />
        <FaHtml5 className="text-3xl sm:text-4xl text-orange-500" />
        <FaNodeJs className="text-3xl sm:text-4xl text-green-500" />
        <RiTailwindCssFill className="text-3xl sm:text-4xl text-blue-500" />
      </div>
    </div>
  );
};

export default Home;

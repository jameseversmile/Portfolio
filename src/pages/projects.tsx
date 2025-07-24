// import { useState } from "react"

const Projects = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold special-gothic-expanded-one-regular pt-9 ">
        My Projects
      </h1>
      <main>
        <div className=" py-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border items-center flex flex-col rounded h-72 ">
            <h2 className="text-lg font-semibold">Project 1</h2>
            <div className="border w-[80%] h-[40%] rounded m-2"></div>
            <p className="text-gray-600">Description of Project 1</p>
          </div>
          <div className="border items-center flex flex-col rounded h-72 ">
            <h2 className="text-lg font-semibold">Project 2</h2>
            <div className="border w-[80%] h-[40%] rounded m-2"></div>
            <p className="text-gray-600">Description of Project 2</p>
          </div>
          <div className="border items-center flex flex-col rounded h-72 ">
            <h2 className="text-lg font-semibold">Project 3</h2>
            <div className="border w-[80%] h-[40%] rounded m-2"></div>
            <p className="text-gray-600">Description of Project 3</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;

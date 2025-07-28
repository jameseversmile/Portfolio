
const Projects = () => {
  return (
    <div>
      <h1 className="text-2xl flex justify-center font-bold special-gothic-expanded-one-regular pt-9 ">
        My Projects
      </h1>
      <main>
        <div className="py-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-900 border items-center flex flex-col rounded h-72 relative">
            <h2 className="text-white text-lg font-semibold">Project 1</h2>
            <a
              className="border w-[80%] h-[40%] rounded m-2"
              href="https://my-portfolio-efzmu2qfu-james-idris-projects.vercel.app"
            >
              <img src="public/moove.png" className="object-cover w-full h-full rounded" />
            </a>
            <p className="text-gray-300 montserrat-regular">
              Description of Project 1
            </p>
          </div>
          <div className="bg-gray-900 border items-center flex flex-col rounded h-72 relative">
            <h2 className="text-white text-lg font-semibold">Project 2</h2>
            <a
              className="border w-[80%] h-[40%] rounded m-2"
              href="https://piggy-clone96james.vercel.app/"
            >
              <img src="/piggy.png" className="object-cover w-full h-full rounded" />
            </a>
            <p className="text-gray-300 montserrat-regular">
              Description of Project 1
            </p>
          </div>
          <div className="bg-gray-900 border items-center flex flex-col rounded h-72 relative">
            <h2 className="text-white text-lg font-semibold">Project 3</h2>
            <a
              className="border w-[80%] h-[40%] rounded m-2"
              href="https://my-portfolio-efzmu2qfu-james-idris-projects.vercel.app"
            >
              <img
                src='/portfolio-img.png'
                className="object-cover w-full h-full rounded"
              />
            </a>
            <p className="text-gray-300 montserrat-regular">
              Description of Project 1
            </p>
          </div>
          <div className="bg-gray-900 border items-center flex flex-col rounded h-72 relative">
            <h2 className="text-white text-lg font-semibold">Project 4</h2>
            <a
              className="border w-[80%] h-[40%] rounded m-2"
              href="https://my-portfolio-efzmu2qfu-james-idris-projects.vercel.app"
            >
              <img
                src='/cartimg.png'
                className="object-cover w-full h-full rounded"
              />
            </a>
            <p className="text-gray-300 montserrat-regular">
              Description of Project 1
            </p>
          </div>
          <div className="bg-gray-900 border items-center flex flex-col rounded h-72 relative">
            <h2 className="text-white text-lg font-semibold">Project 5</h2>
            <a
              className="border w-[80%] h-[40%] rounded m-2"
              href="https://piggy-clone96james.vercel.app/"
            >
              <img src='/meta.png' className="object-cover w-full h-full rounded" />
            </a>
            <p className="text-gray-300 montserrat-regular">
              Description of Project 1
            </p>
          </div>
          <div className="bg-gray-900 border items-center flex flex-col rounded h-72 relative">
            <h2 className="text-white text-lg font-semibold">Project 6</h2>
            <a
              className="border w-[80%] h-[40%] rounded m-2"
              href="https://my-portfolio-efzmu2qfu-james-idris-projects.vercel.app"
            >
              <img
                src='/portfolio-img.png'
                className="object-cover w-full h-full rounded"
              />
            </a>
            <p className="text-gray-300 montserrat-regular">
              Description of Project 1
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;

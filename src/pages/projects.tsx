
const Projects = () => {
  return (
    <div>
      <h1 className="text-2xl flex justify-center font-bold special-gothic-expanded-one-regular pt-9 ">
        My Projects
      </h1>
      <main>
        <div className="py-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-lg:mx-10 max-[1100px]:mx-10">
          <div className="bg-gray-900 border items-center flex flex-col rounded h-72 relative">
            <h2 className="text-white text-lg font-semibold">Project 1</h2>
            <a
              className="border w-[80%] h-[40%] rounded m-2"
              href="https://my-portfolio-efzmu2qfu-james-idris-projects.vercel.app"
            >
              <img src="/moove.png" className="object-cover w-full h-full rounded" />
            </a>
            <p className="text-gray-300 montserrat-regular">
              Moove - A Car Rental Service website Clone
            </p>
            <div className="m-2 text-center text-amber-50">
              <b>Tools Used: <span className="text-blue-500 bg-sky-400 mb-2">Html</span> and <span className="text-blue-500 bg-sky-400">CSS</span>. </b>
              <br />
              <i>first page i built during my training at sail</i>
            </div>
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
              piggy-clone - A PiggyVest Clone
            </p>
            <div className="m-2 text-center text-amber-50">
              <b>Tools Used: <span className="text-blue-500 bg-sky-400 mb-2">React.js</span>  <span className="text-blue-500 bg-sky-400">TailwindCSS</span>. </b>
              <br />
              <i>built with React.js and TailwindCSS</i>
            </div>
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
              Description of Project 3
            </p>
            <div className="m-2 text-center text-amber-50">
              <b>Tools Used: <span className="text-blue-500 bg-sky-400 mb-2">Reactjs</span>, <span className="text-blue-500 bg-sky-400 mb-2">Typscript</span> and <span className="text-blue-500 bg-sky-400">TailwindCSS</span>. </b>
              <br />
              <i>Portfolio built with simplicity and responsiveness as Project Theme </i>
            </div>
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
            <div className="m-2 text-center text-amber-50">
              <b>Tools Used: <span className="text-blue-500 bg-sky-400 mb-2">Html</span> and <span className="text-blue-500 bg-sky-400">CSS</span>. </b>
              <br />
              <i>A shopping Cart Page, enjoys building for learning purpose</i>
            </div>
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
              Meta About Page Clone
            </p>
            <div className="m-2 text-center text-amber-50">
              <b>Technologies Used: <span className="text-blue-500 bg-sky-400 mb-2">Html</span> and <span className="text-blue-500 bg-sky-400">CSS</span>. </b>
              <br />
              <i> Built for the Culture</i>
            </div>
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
              My Portfolio
            </p>
            <div className="m-2 text-center text-amber-50">
              <b>Tools Used: <span className="text-blue-500 bg-sky-400 mb-2">React</span><span className="text-blue-500 bg-sky-400 mb-2">Ts</span> and <span className="text-blue-500 bg-sky-400">Tailwind</span>. </b>
              <br />
              <i>first page i built during my training at sail</i>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;

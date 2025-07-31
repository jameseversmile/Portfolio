const Projects = () => {
  return (
    <div className="px-4 max-w-7xl mx-auto">
      <h1 className="text-2xl text-center font-bold special-gothic-expanded-one-regular pt-9">
        My Projects
      </h1>
      <main>
        <div className="py-9 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Project 1",
              img: "/moove.png",
              link: "https://my-portfolio-efzmu2qfu-james-idris-projects.vercel.app",
              desc: "Moove - A Car Rental Service website Clone",
              tools: "HTML and CSS",
              note: "first page i built during my training at sail"
            },
            {
              title: "Project 2",
              img: "/piggy.png",
              link: "https://piggy-clone96james.vercel.app/",
              desc: "PiggyVest Clone",
              tools: "React.js and TailwindCSS",
              note: "built with React.js and TailwindCSS"
            },
            {
              title: "Project 3",
              img: "/portfolio-img.png",
              link: "https://my-portfolio-efzmu2qfu-james-idris-projects.vercel.app",
              desc: "Portfolio Website",
              tools: "React.js, Typescript and TailwindCSS",
              note: "Portfolio built with simplicity and responsiveness"
            },
            {
              title: "Project 4",
              img: "/cartimg.png",
              link: "https://my-portfolio-efzmu2qfu-james-idris-projects.vercel.app",
              desc: "Shopping Cart Page",
              tools: "HTML and CSS",
              note: "Built for learning purposes"
            },
            {
              title: "Project 5",
              img: "/meta.png",
              link: "https://piggy-clone96james.vercel.app/",
              desc: "Meta About Page Clone",
              tools: "HTML and CSS",
              note: "Built for the Culture"
            },
            {
              title: "Project 6",
              img: "/portfolio-img.png",
              link: "https://my-portfolio-efzmu2qfu-james-idris-projects.vercel.app",
              desc: "My Portfolio",
              tools: "React, TS and Tailwind",
              note: "first page i built during my training at sail"
            }
          ].map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-lg p-4 flex flex-col items-center h-full"
            >
              <h2 className="text-white text-lg font-semibold mb-2">
                {project.title}
              </h2>
              <a
                className="w-full h-40 overflow-hidden rounded mb-3"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover rounded"
                />
              </a>
              <p className="text-gray-300 text-center mb-2">{project.desc}</p>
              <div className="text-center text-amber-50 text-sm">
                <b>
                  Technologies Used:{" "}
                  <span className="text-blue-500 bg-sky-400 px-1 rounded">
                    {project.tools}
                  </span>
                </b>
                <br />
                <i>{project.note}</i>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;

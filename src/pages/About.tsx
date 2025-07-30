

const About = () => {
  return (
    <div>
      <h1 className="flex justify-center special-gothic-expanded-one-regular text-2xl my-9 ">
        About Me
      </h1>
      <div className="flex max-sm:flex-col-reverse justify-center gap-12 items-center px-10">
        <p className="montserrat-regular text-gray-600 w-1/2 max-sm:w-full ">
          Hi, I'm James Idris, a Full Stack Software Developer. I have a passion
          for creating dynamic and responsive web applications. I enjoy working
          with the latest technologies and frameworks to deliver high-quality
          software solutions.
          <br />
          In my free time, I love to explore new technologies and work on
          personal projects that challenge my skills. in addition to coding, I
          also enjoy reading tech blogs, contributing to open source projects,
          and participating in online coding communities.
        </p>
        <div className="w-[300px]  z-10 rounded-[150%] bg-white">
          <img
            src='/myimage3.jpg'
            alt="Profile"
            className="object-fit rounded-full bg-white border-4"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

// import React from 'react'

const About = () => {
  return (
    <div>
        <h1 className="h-[100%] special-gothic-expanded-one-regular text-2xl my-9">About Me</h1>
        <div className="flex justify-center gap-12 items-center px-10">
            <p className="montserrat-regular text-md text-gray-600 w-1/2">Hi, I'm James Idris, a Full Stack Software Developer. 
                 I have a passion for creating dynamic and responsive web applications. I enjoy working with the latest technologies and frameworks to deliver high-quality software solutions.
                 <br />
                 In my free time, I love to explore new technologies and work on personal projects that challenge my skills. in addition to coding,
                 I also enjoy reading tech blogs, contributing to open source projects,
                and participating in online coding communities. 
            </p>
            <div className="w-[30%] h-75 border-2 rounded-[100%]">
                <img src="src/assets/myImg.png" alt="Profile" className=" size-full rounded-full " />
            </div>
        </div>
    </div>
  )
}

export default About
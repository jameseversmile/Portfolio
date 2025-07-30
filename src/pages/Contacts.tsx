

const Contacts = () => {
  return (
    <div className="max-[730px]:mx-15">
      <h1 className="text-2xl font-bold special-gothic-expanded-one-regular py-9 flex justify-center">
        Contact Me
      </h1>
    <div className="flex items-center gap-[10%] justify-center place-content-center max-sm:flex-col">
      <main>
        <h1 className="text-3xl font-bold mb-0 montserrat underline">Let's Connect!</h1>
        <i className="">I'm excited to discuss about your project.</i>
        <div className="flex flex-col mt-2 mb-10">
          <label htmlFor="email" className="mt-4">
            Email:
          </label>
          <input
            type="email"
            id="email" src="jameseversmile@gmail.com"
            className="border border-gray-300 p-2 rounded"
            placeholder="Your email"
          />
          <label htmlFor="message" className="mt-4 ">
            Message:
          </label>
          <textarea
            id="message"
            className="border border-gray-300 p-2 rounded"
            placeholder="Your message"
          />
          <button className="mt-4 bg-blue-500 text-white p-2 rounded">
            Send Message
          </button>
        </div >
        
      </main>
      <div className="w-[300px] border-b-3 shadow-blue-950 shadow-2xl h-auto place-content-center max-sm:w-[200px]">
           <img  src='/myimage3.png' alt="" />
      </div>
    </div>
    <b className="flex justify-center pt-10">Contact me at: devjamesidris@example.com</b>
    </div>
  );
};

export default Contacts;

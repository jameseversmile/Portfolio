import myImg from "/src/assets/myImg.png";

interface ContactsProps {
  imgSrc?: string;
}

const Contacts = ({ imgSrc = myImg }: ContactsProps) => {
  return (
    <div>
      <h1 className="text-2xl font-bold special-gothic-expanded-one-regular pt-9 flex justify-center">
        Contact Me
      </h1>
    <div className="flex items-center justify-center place-content-center ">
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
        <b>Contact me at: devjamesidris@example.com</b>
      </main>
      <img src={imgSrc} alt="" />
    </div>
    </div>
  );
};

export default Contacts;

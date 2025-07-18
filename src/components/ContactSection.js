import emailjs from "emailjs-com";
import SendIcon from "@mui/icons-material/Send";
import Tooltip from "@mui/material/Tooltip";
import { useRef, useState } from "react";

const ContactSection = () => {
  const form = useRef();

  const [showToast, setShowToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  const sendEmail = (e) => {
    setIsWaiting(true);
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Message sent: ", result.text);
          setShowToast(true);
          form.current.reset();
          setTimeout(() => setShowToast(false), 6000);
        },
        (error) => {
          console.error("Error: ", error.text);
          setShowErrorToast(true);
          setTimeout(() => setShowErrorToast(false), 6000);
        }
      );

    setTimeout(() => {
      setIsWaiting(false);
    }, 10000);

    e.target.reset();
  };

  const handleClick = () => {
    setIsWaiting(true);
    setTimeout(() => {
      setIsWaiting(false);
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="bg-[#0d1b2a] h-max sm:h-max flex items-center justify-center py-12 px-6"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 text-yellow-200">
          Get in Touch
        </h2>
        <p className="text-center text-gray-300 text-lg mb-8">
          Feel free to reach out to me for collaborations and discussions! 😀
        </p>

        <div className="max-w-3xl mx-auto bg-yellow-100 rounded-lg shadow-lg p-8 hover:bg-yellow-200 transform transition-transform duration-300 hover:scale-105">
          <div className="flex flex-col justify-center items-center text-center">
            <p className="text-xl mb-3 font-semibold">Reach out to me via:</p>
            <ul className="space-y-4 text-gray-900 text-lg">
              <li>
                <span className=" text-gray-700 font-bold">Email : </span>
                siddharth2013tenacian@gmail.com / siddharthmanna@icloud.com
              </li>

              <li>
                <span className=" text-gray-700 font-bold ">Phone :</span>
                +91-98833-53056 / +91-89458-12689
              </li>
            </ul>
          </div>
          <div className=" max-w-xl mx-auto bg-yellow-100 rounded-lg shadow-2xl p-6 mt-6 ">
            <p className="flex flex-col justify-center text-center mb-3 text-xl font-semibold">
              Or send a quick message
            </p>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2"
                ></textarea>
              </div>
              <div className="flex justify-center items-center">
                {/* <button
                  type="submit"
                  className="w-40 bg-yellow-400 text-black py-2 rounded-xl hover:bg-yellow-500 transition flex items-center justify-center gap-2"
                >
                  <span className="text-lg">Send</span>
                  <SendIcon className="w-5 h-5" />
                </button> */}
                <button
                  type="submit"
                  disabled={isWaiting}
                  className={`w-40 py-2 rounded-xl transition flex items-center justify-center gap-2
                  ${
                    isWaiting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-yellow-400 hover:bg-yellow-500"
                  }
                `}
                >
                  <span className="text-lg">
                    {isWaiting ? "Please Wait..." : "Send"}
                  </span>
                  {!isWaiting && <SendIcon className="w-5 h-5" />}
                </button>
              </div>
            </form>
          </div>

          <div className="mt-6 space-x-4 flex justify-center items-center gap-1">
            <Tooltip title="LinkedIn" arrow>
              <a
                href="https://www.linkedin.com/in/siddharth-manna-2350271b3/" // LinkedIn
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-10 h-10 inline-block transform hover:scale-125 transition duration-300"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </a>
            </Tooltip>
            <Tooltip title="Github" arrow>
              <a
                href="https://github.com/sidman51215196" //github
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-10 h-10 inline-block transform hover:scale-125 transition duration-300"
                >
                  <path d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z" />
                </svg>
              </a>
            </Tooltip>
            <Tooltip title="Instagram" arrow>
              <a
                href="https://www.instagram.com/sidman51215196/" //instagram
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-10 h-10 inline-block transform hover:scale-125 transition duration-300"
                >
                  <path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" />
                </svg>
              </a>
            </Tooltip>
            <Tooltip title="X (Twitter)" arrow>
              <a
                href="https://www.x.com/sidman51215196/" //twitter (x)
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-10 h-10 inline-block transform hover:scale-125 transition duration-300"
                >
                  <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
                </svg>
              </a>
            </Tooltip>
          </div>
        </div>
      </div>
      {showToast && (
        <div className="fixed bottom-5 right-5 bg-green-700 text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300 animate-bounce">
          Message sent successfully!
        </div>
      )}
      {showErrorToast && (
        <div className="fixed bottom-5 right-5 bg-red-700 text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300 animate-bounce">
          Failed to send message, try again
        </div>
      )}
    </section>
  );
};

export default ContactSection;

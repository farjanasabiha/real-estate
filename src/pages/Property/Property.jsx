import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Property = () => {
        useEffect(() => {
          AOS.init();
        }, []);
  document.title = "HomePress - Property";
    return (
      <div className="">
        <div className="bg-white">
          <section className="py-6">
            <h1 className="text-3xl font-semibold text-black text-center">
              Awesome family Apartment
            </h1>
            <p className="text-sm text-black font-light py-4 text-center">
              Creating an awesome family apartment involves thoughtfully
              blending functionality, comfort, and style to meet the needs of
              all family members.
            </p>
            <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
              <img
                data-aos="fade-left"
                src="https://i.ibb.co/qpX9Ppb/d12c6263e676cbf3a68a14e48c9e5d1a.jpg"
                alt=""
                className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square"
              />
              <img
                data-aos="fade-right"
                alt=""
                className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
                src="https://i.ibb.co/2t187GX/10250925-1.jpg"
              />
              <img
                data-aos="fade-right"
                alt=""
                className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
                src="https://i.ibb.co/4SDBwwd/19.jpg"
              />
              <img
                data-aos="fade-right"
                alt=""
                className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
                src="https://i.ibb.co/28dGfCt/f82fe2daff575358aa88281a74c2577a.jpg"
              />
              <img
                data-aos="fade-right"
                alt=""
                className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
                src="https://i.ibb.co/SdHZYL7/ai-generative-exterior-of-modern-luxury-house-with-garden-and-beautiful-sky-photo.jpg"
              />
            </div>
          </section>
          <section className="bg-gray-800 mt-12">
            <div className="container mx-auto">
              <div
                data-aos="fade-up"
                className=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24  text-gray-100"
              >
                <h2 className="mb-8 text-4xl font-bold leading-none text-center">
                  What do we have to offer?
                </h2>
                <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fill-current text-[#4b85f0]"
                    >
                      <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                      <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                    </svg>
                    <span className="text-white font-semibold">
                      Single-family homes
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fill-current text-[#4b85f0]"
                    >
                      <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                      <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                    </svg>
                    <span className="text-white font-semibold">
                      Townhouses{" "}
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fill-current text-[#4b85f0]"
                    >
                      <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                      <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                    </svg>
                    <span className="text-white font-semibold">Apartments</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fill-current text-[#4b85f0]"
                    >
                      <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                      <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                    </svg>
                    <span className="text-white font-semibold">
                      Student housing
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fill-current text-[#4b85f0]"
                    >
                      <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                      <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                    </svg>
                    <span className="text-white font-semibold">
                      Senior living community
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fill-current text-[#4b85f0]"
                    >
                      <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                      <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                    </svg>
                    <span className="text-white font-semibold">
                      Vacation rentals{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
};

export default Property;
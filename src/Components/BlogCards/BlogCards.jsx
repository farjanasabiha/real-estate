import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const BlogCards = ({ blog }) => {
  const { id, estate_title, image_link, segment, description, price, status } =
    blog;
  return (
    <div>
      <article className="flex flex-col shadow-lg rounded-md bg-white mt-8 group transition hover:scale-105 duration-300">
        <div
          aria-label="Te nulla oportere reprimique his dolorum"
        >
          <img
            alt=""
            className="object-cover w-full h-52 bg-gray-500 "
            src={image_link}
          />
        </div>
        <div className="flex flex-col flex-1 p-6">
          <div className="flex items-center justify-between">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-xs tracking-wider font-semibold uppercase hover:underline text-violet-800"
            >
              {estate_title}
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
              className="font-bold text-black"
            >
              {id}
            </a>
          </div>

          <a
            rel="noopener noreferrer"
            href="#"
            className="text-base mt-3 tracking-wider hover:underline text-black first-letter:uppercase font-semibold"
          >
            {segment}
          </a>
          <h3 className="flex-1 text-black py-2 text-sm font-medium leading-snug">
            {description}
          </h3>
          <div className="flex mb-4 flex-wrap font-bold uppercase justify-between pt-3 space-x-2 text-xs text-black">
            <span>Price : {price}</span>
            <span>{status}</span>
          </div>
          <Link to={`/blog/${id}`} className="bg-[#4885f8] px-5 py-3 rounded-md text-sm font-semibold">
            <div className="flex items-center justify-center gap-2">
              <span>View Property</span>{" "}
              <FaArrowRightLong className="font-bold text-lg" />
            </div>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogCards;

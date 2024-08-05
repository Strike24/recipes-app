import React from "react";

const Card = ({ title, image, description }) => {
  return (
    <div className="max-w-sm basis-full rounded-2xl bg-primary shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl">
      <a href="#" className="block">
        <img
          className="h-48 w-full rounded-t-lg object-cover"
          src={image}
          alt={title}
        />
      </a>
      <div className="flex flex-col items-start justify-center p-5">
        <a href="#" className="block">
          <h5 className="mb-2 text-2xl font-bold text-[#1F1510]">{title}</h5>
        </a>
        <p className="mb-3 text-gray-600">{description}</p>
        <a
          href="#"
          className="inline-flex items-center rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors duration-300 ease-in-out hover:bg-[#e64a4a]"
        >
          Read more
          <svg
            className="ml-2 h-4 w-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;

import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = ({ prj }) => {
  const images = prj.images;
  const source = prj.folder;

  const [id, setId] = useState(0);
  const nextImage = () => {
    setId((prev) => {
      if (prev === images.length - 1) return prev;
      return prev + 1;
    });
  };
  const previousImage = () => {
    setId((prev) => {
      if (prev === 0) return prev;
      return prev - 1;
    });
  };

  return (
    <div className="border-b border-gray-300">
      <h3 className="text-base font-semibold text-center p-2">{prj.title}</h3>
      <div
        className="bg-gray-200 relative overflow-hidden group"
        style={{ height: "450px", width: "300px" }}
      >
        <img
          src={source + images[id]}
          alt="project preview"
          className="object-contain h-full w-full"
        />
        <div className="absolute top-0 left-0 h-full w-full opacity-0 group-hover:opacity-100 transition-all ease-in-out  bg-white p-2 flex items-center">
          <div>
            <div>
              <h4 className="border-l-4 border-gray-800 ml-2 p-1">
                Description{" "}
                <span className="font-extrabold text-gray-800">:</span>{" "}
              </h4>
              <p
                style={{ lineHeight: "1.7", textIndent: "20px" }}
                className="p-3 text-sm text-gray-500 text-justify"
              >
                {prj.overview}.
              </p>
            </div>

            <div className="flex items-center justify-between my-4">
              
            </div>
            <div className="flex items-center justify-between">
              <h4 className="border-l-4 border-gray-800 ml-2 p-1">
                Tech
                <span className="font-extrabold text-gray-800"> :</span>{" "}
              </h4>
              <div className="space-x-2">
                {prj.tech.map((tech, i) => {
                  return (
                    <span
                      key={i}
                      className="p-1 rounded bg-gray-800 text-white"
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-2 space-x-2">
        <button
          disabled={id === 0}
          onClick={previousImage}
          className={`${
            id === 0
              ? "pointer-events-none bg-gray-400 cursor-not-allowed"
              : "cursor-pointer bg-black hover:bg-gray-800"
          } text-white p-1 rounded-full`}
        >
          <FaArrowLeft />
        </button>
        <span className="font-semibold italic">
          {id + 1} / {images.length}
        </span>
        <button
          disabled={id === images.length - 1}
          onClick={nextImage}
          className={`${
            id === images.length - 1
              ? "pointer-events-none bg-gray-400 cursor-not-allowed"
              : "cursor-pointer bg-black hover:bg-gray-800"
          } text-white p-1 rounded-full`}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;

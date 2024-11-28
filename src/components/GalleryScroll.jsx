import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const GalleryScroll = ({ images, className }) => {
  const containerRef = useRef(null); // For future custom container usage
  const { scrollYProgress } = useScroll(); // Tracks global page scrolling

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  const backgroundHeight = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <div
      className={`mt-10 place-self-center items-start w-full ${className} overflow-y-hidden bg-[rgba(255,255,255,0.2)] dark:bg-[rgba(63,63,63,0.51)] backdrop-blur-lg shadow-lg shadow-black/50 rounded-3xl max-w-[80%] max-h-[200vh]`}
      ref={containerRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div style={{ y: translateFirst }} key={`grid-1-${idx}`}>
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 m-0 p-0"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={`grid-2-${idx}`}>
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 m-0 p-0"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={`grid-3-${idx}`}>
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 m-0 p-0"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

GalleryScroll.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};

export default GalleryScroll;

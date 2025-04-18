import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "GET",
    image: "/getp.jpeg",
    link: "https://get-frontend.onrender.com",
    description: `To create a collaborative platform where
tech enthusiasts and professionals can share
knowledge, solve problems, and stay updated with
the latest industry trends through an interactive forum.`,
  },
  {
    id: 2,
    title: "Know it Forward",
    image: "/Education Stock Photo.jpg",
    description: `To create a collaborative platform where
tech enthusiasts and professionals can share
knowledge, solve problems, and stay updated with
the latest industry trends through an interactive forum.`,
  },
  {
    id: 3,
    title: "FITNESS",
    image: "/fitp.jpeg",
    link: "https://fitness-frontend-4md7.onrender.com",
    description: `Designed and developed a fitness application that dynamically
curates daily workout routines for users based on equipment availability (gym or home).
Each workout includes suggested rep ranges, durations, and multimedia demonstrations.
Features a built-in calendar for tracking consistency and workout history.`,
  },
  {
    id: 4,
    title: "How I Built This",
    image: "/github card.png",
    link: "https://gist.github.com/arturoa925/35d84161ec3077d1077bed8c11ee4edc",
    description: `To see how I built this portfolio, check out the breakdown in my Github Gist.`
  }
];

const swipeConfidenceThreshold = 10000; // Adjust this threshold for swipe sensitivity
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

function Carousel() {
  // * `page` holds the current index (and direction for animation)
  const [[page, direction], setPage] = useState([0, 0]);

  // * Make sure we loop correctly:
  const projectIndex =
    ((page % projects.length) + projects.length) % projects.length;

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  // * Variants for card transitions
  const variants = {
    enter: (direction) => ({
      x: 0, 
      opacity: 0,
      rotate: direction > 0 ? -10 : 10, // * Rotate slightly based on swipe direction
    }),
    center: {
      x: 0,
      opacity: 1,
      rotate: 0,
    },
    exit: (direction) => ({
      x: 0, 
      opacity: 0,
      rotate: direction > 0 ? 10 : -10,
    }),
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center">
      {/* Card Container */}
      <div className="relative flex justify-center items-center w-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            className="w-[90vw] h-[80vh] md:w-[60vw] md:h-[85vh] lg:w-[70vw] lg:h-[95vh] bg-white rounded-lg shadow-lg p-6"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { duration: 0 },
              rotate: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.1 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0}
            dragMomentum={false}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl text-center font-bold mb-2">
              {projects[projectIndex].title}
            </h2>
            <a href={projects[projectIndex]?.link} className="cursor-none">
            <img
              src={projects[projectIndex].image}
              alt={projects[projectIndex].title}
              className="block mx-auto w-full h-[40vh] md:w-[80vw] md:h-[45vh] lg:w-[85vw] lg:h-[70vh] object-contain mb-6"
            />
            </a>
            <p className="text-gray-600 mt-10 text-center text-base sm:text-lg md:text-xl lg:text-2xl">
              {projects[projectIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons - Placed below the card */}
      <div className="mt-8 flex space-x-4">
        <button
          onClick={() => paginate(-1)}
          className="bg-gray-300 p-3 rounded-full opacity-70 cursor-none"
        ></button>
        <button
          onClick={() => paginate(1)}
          className="bg-gray-300 p-3 rounded-full opacity-70 cursor-none"
        ></button>
      </div>
    </div>
  );
}

export default Carousel;

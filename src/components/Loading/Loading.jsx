import "./loading.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const textArray = ["Portfolio", "is", "Loading"];

const AnimatedText = ({ onComplete }) => {
  const [index, setIndex] = useState(0);
  const [showCircles, setShowCircles] = useState(false);
  const [hideText, setHideText] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        // * reach the last text, hide it and show the circles
        if (prevIndex + 1 === textArray.length) {
          clearInterval(interval);
          
          setTimeout(() => {
            setHideText(true);
            setShowCircles(true);
            setAnimationDone(true);
          }, 1500);

          setTimeout(() => {
            setAnimationDone(false);
            setShowCircles(false);
            onComplete && onComplete();
          }, 7000);

          return prevIndex;
        }
        return prevIndex + 1;
      });
      // * every 2.3 seconds move to the next text
    }, 2300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-5">
      {/* Animated Text */}
      {!hideText && (
        <AnimatePresence mode="wait">
          <motion.h1
            key={index}
            className="text-4xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-white text-center"
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 1, ease: "easeOut" },
            }}
            exit={{ opacity: 0, x: 100, transition: { duration: 0.25 } }}
          >
            {textArray[index]}
          </motion.h1>
        </AnimatePresence>
      )}

      {/* Bouncing Circles (Only Appear After Last Text) */}
      <AnimatePresence>
        {showCircles && animationDone && (
          <motion.div
            className="flex space-x-4 mt-5"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.5 } }} // Smooth fade-out
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: [0, -20, 0], opacity: 1 }}
                transition={{
                  duration: 0.75,
                  delay: i * 0.3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function Loading({ onComplete }) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <AnimatedText onComplete={onComplete} />
    </div>
  );
}

export default Loading;

import { motion } from "framer-motion";
import { useMemo } from "react";

function Aboutme() {
  const title = "About Me";

  const letters = useMemo(
    () =>
      title.split("").map((letter) => ({
        letter,
        offset: Math.floor(Math.random() * 21) - 10, // * Random offset between -10px and 10px
      })),
    [title]
  );

  const lines = [
    "It all started when",
    "I was 12,",
    <>
      <span className="underline">Apple</span> made me curious.
    </>,
    "How do iPhones work?",
    "Since, I have been",
    <>
      <span className="underline">hooked</span>.
    </>,
    "Learning to code.",
    "I want to create software that is:",
    <>
      <span className="underline">effortless</span>,
    </>,
    <>
      <span className="underline">ergonomic</span>,
    </>,
    <>
      <span className="underline">second nature</span>,
    </>,
    <>
      <span className="underline">unique</span>,
    </>,
    <>
      <span className="underline">inspiring</span>
    </>,
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2, ease: "easeOut" },
    },
  };

  return (
    <div className="aboutme">
      <h1 className="text-center text-4xl sm:text-4xl md:text-6xl lg:text-8xl text-white font-[Libre_Baskerville]">
        {letters.map((item, index) => (
          <motion.span
            key={index}
            style={{
              display: "inline-block",
              transform: `translateY(${item.offset}px)`,
            }}
          >
            {item.letter}
          </motion.span>
        ))}
      </h1>
      <motion.div
        className="text-center mt-15 leading-loose text-3xl sm:text-3xl md:text-5xl lg:text-7xl text-white font-[Libre_Baskerville]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {lines.map((line, index) => (
          <motion.p key={index} variants={lineVariants}>
            {line}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
}

export default Aboutme;

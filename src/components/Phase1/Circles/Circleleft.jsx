import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Circleleft() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1.75]);

  return (
    <div ref={targetRef} className="relative w-full h-[70vh] ">
      <motion.div
        className="absolute left-[-30vw] top-[30vh] w-[70vw] h-[70vw] sm:w-[45vw] sm:h-[45vw] md:w-[50vw] md:h-[50vw] lg:w-[50vw] lg:h-[50vw] bg-gray-500 rounded-full"
        style={{
          scaleX: scale,
          scaleY: scale,
        }}
        transition={{ duration: 3.5, ease: "easeInOut" }}
      />
    </div>
  );
}

export default Circleleft;

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Circleright() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 70vh", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 2]);

  return (
    <div ref={targetRef} className="relative h-[110vh] ">
      <motion.div
        className="absolute right-[-30vw] top-[2vh] w-[70vw] h-[70vw] sm:w-[45vw] sm:h-[45vw] md:w-[60vw] md:h-[60vw] lg:w-[60vw] lg:h-[60vw] bg-black rounded-full"
        style={{
          scaleX: scale,
          scaleY: scale,
        }}
        transition={{ duration: 3.5, ease: "easeInOut" }}
      />
    </div>
  );
}

export default Circleright;

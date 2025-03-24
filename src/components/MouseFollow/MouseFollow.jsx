import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed rounded-full bg-white"
      style={{
        width: "20px",
        height: "20px",
        top: position.y,
        left: position.x,
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
      }}
      animate={{
        top: position.y,
        left: position.x,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    />
  );
}

export default MouseFollower;

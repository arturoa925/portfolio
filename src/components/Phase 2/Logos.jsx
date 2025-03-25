import {motion} from "framer-motion";
import {useState, useEffect} from "react";

function Logos() {
  const [isMobile, setIsMobile] = useState(false);

  // * Check screen width to determine if it's mobile.
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    return (
      // * The motion.div is the container for all the logos
      <motion.div 
      className="relative w-[100vw] h-[120vw] mx-auto"
      // * On mobile, auto-rotate continuously; on desktop, rotate on hover.
      animate={isMobile ? { rotate: 360 } : {}}
      whileHover={isMobile ? {} : { rotate: 360 }}
      transition={
        isMobile
          ? { repeat: Infinity, duration: 4, ease: "linear" }
          : { duration: 4, ease: "linear" }
      }
    >
        {/* Top Center */}
        <img
          src="/API Icon.png"
          alt="API Icon"
         className="absolute w-[14vw] h-[14vw] sm:w-[14vw] sm:h-[14vw] md:w-[16vw] md:h-[16vw] lg:w-[16vw] lg:h-[16vw]"
          style={{ top: "5%", left: "50%", transform: "translate(-50%, 0)" }}
        />
        {/* Top Right */}
        <img
          src="/Css Icon.png"
          alt="Css Icon"
        className="absolute w-[14vw] h-[14vw] sm:w-[14vw] sm:h-[14vw] md:w-[16vw] md:h-[16vw] lg:w-[16vw] lg:h-[16vw]"
          style={{ top: "20%", left: "80%", transform: "translate(-50%, 0)" }}
        />
        {/* Right Center */}
        <img
          src="/Html Icon.png"
          alt="Html Icon"
        className="absolute w-[14vw] h-[14vw] sm:w-[14vw] sm:h-[14vw] md:w-[16vw] md:h-[16vw] lg:w-[16vw] lg:h-[16vw]"
          style={{ top: "50%", left: "90%", transform: "translate(-50%, -50%)" }}
        />
        {/* Bottom Right */}
        <img
          src="/Javascript Icon.png"
          alt="Javascript Icon"
        className="absolute w-[14vw] h-[14vw] sm:w-[14vw] sm:h-[14vw] md:w-[16vw] md:h-[16vw] lg:w-[16vw] lg:h-[16vw]"
          style={{ top: "80%", left: "80%", transform: "translate(-50%, -100%)" }}
        />
        {/* Bottom Center */}
        <img
          src="/Node JS Icon.png"
          alt="Node JS Icon"
        className="absolute w-[14vw] h-[14vw] sm:w-[14vw] sm:h-[14vw] md:w-[16vw] md:h-[16vw] lg:w-[16vw] lg:h-[16vw]"
          style={{ top: "90%", left: "50%", transform: "translate(-50%, -100%)" }}
        />
        {/* Bottom Left */}
        <img
          src="/Postgres Database Icon.png"
          alt="Postgres Database Icon"
        className="absolute w-[14vw] h-[14vw] sm:w-[14vw] sm:h-[14vw] md:w-[16vw] md:h-[16vw] lg:w-[16vw] lg:h-[16vw]"
          style={{ top: "80%", left: "20%", transform: "translate(0, -100%)" }}
        />
        {/* Left Center */}
        <img
          src="/Python Icon.png"
          alt="Python Icon"
        className="absolute w-[14vw] h-[14vw] sm:w-[14vw] sm:h-[14vw] md:w-[16vw] md:h-[16vw] lg:w-[16vw] lg:h-[16vw]"
          style={{ top: "50%", left: "10%", transform: "translate(0, -50%)" }}
        />
        {/* Top Left */}
        <img
          src="/React Icon.png"
          alt="React Icon"
        className="absolute w-[14vw] h-[14vw] sm:w-[14vw] sm:h-[14vw] md:w-[16vw] md:h-[16vw] lg:w-[16vw] lg:h-[16vw]"
          style={{ top: "20%", left: "20%", transform: "translate(-50%, 0)" }}
        />
        {/* Center (Optional, can be the star’s core) */}
        <img
          src="/Server Database Storage.png"
          alt="Server Database Storage"
        className="absolute w-[14vw] h-[14vw] sm:w-[14vw] sm:h-[14vw] md:w-[16vw] md:h-[16vw] lg:w-[16vw] lg:h-[16vw]"
          style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        />
         </motion.div>
    );
  }
  
  export default Logos;
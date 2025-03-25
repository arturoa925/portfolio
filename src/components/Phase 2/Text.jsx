import { motion } from "framer-motion";

function Text() {
 
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        // * cascade the children
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  
  const itemVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 10 },
    },
  };

  return (
    <motion.div
      className="lg:mt-40"
      variants={containerVariants}
      initial="hidden"
       // * Use whileHover for desktop and whileTap for mobile touches:
       whileHover="visible"
       whileTap="visible"
    >
      <div className="flex ml-12 sm:ml-12 md:ml-20 lg:ml-30">
        <motion.h1
          variants={itemVariants}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 1.15 }}
          className="text-4xl sm:text-4xl md:text-6xl lg:text-8xl text-white font-[Libre_Baskerville]"
        >
          Full
        </motion.h1>
      </div>
      <div className="flex ml-12 sm:ml-12 md:ml-20 lg:ml-30 mt-4">
        <motion.h1
          variants={itemVariants}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 1.15 }}
          className="text-4xl sm:text-4xl md:text-6xl lg:text-8xl text-white font-[Libre_Baskerville]"
        >
          Stack
        </motion.h1>
      </div>
      <div className="flex ml-12 sm:ml-12 md:ml-20 lg:ml-30 mt-4">
        <motion.h1
          variants={itemVariants}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 1.15 }}
          className="text-4xl sm:text-4xl md:text-6xl lg:text-8xl text-white font-[Libre_Baskerville]"
        >
          Engineer
        </motion.h1>
      </div>
    </motion.div>
  );
}

export default Text;
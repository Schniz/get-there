import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <motion.div animate={{ opacity: isVisible ? 1 : 0 }}>
        Welcome to remasterd
      </motion.div>
      <button onClick={() => setIsVisible(!isVisible)}>toggle</button>
    </>
  );
}

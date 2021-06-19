import React, { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "../components/Header";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <motion.div animate={{ opacity: isVisible ? 1 : 0 }}>
        <Header text="My Target" />

        {/* <img
          class="inline object-cover w-8 h-8 rounded-full"
          src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Profile image"
        /> */}
      </motion.div>
      <button onClick={() => setIsVisible(!isVisible)}>toggle</button>
    </>
  );
}

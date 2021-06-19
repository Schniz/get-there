import React, { useState } from "react";
import { motion } from "framer-motion";
import { Header, Image, Flex, FlexItem } from "../components";
// @ts-ignore
import car from "../images/car.jpg";
// @ts-ignore
import house from "../images/house.jpeg";
// @ts-ignore
import other from "../images/other.png";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <motion.div animate={{ opacity: isVisible ? 1 : 0 }}>
        <Header text="My Target" />
        <Flex>
          <FlexItem center>
            <Flex dir="column">
              <FlexItem center>
                <Image src={house} alt="House" size="avatar" />
              </FlexItem>
              <FlexItem center>
                <label className="p-4">House</label>
              </FlexItem>
            </Flex>
          </FlexItem>
          <FlexItem center>
            <Flex dir="column">
              <FlexItem center>
                <Image src={car} alt="Car" size="avatar" />
              </FlexItem>
              <FlexItem center>
                <label className="p-4">Car</label>
              </FlexItem>
            </Flex>
          </FlexItem>
          <FlexItem center>
            <Flex dir="column">
              <FlexItem center>
                <Image src={other} alt="Other" size="avatar" />
              </FlexItem>
              <FlexItem center>
                <input
                  type="text"
                  placeholder="Other"
                  className="w-full my-2 h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
                />
              </FlexItem>
            </Flex>
          </FlexItem>
        </Flex>
        <Flex>
          <FlexItem center>
            <input
              type="number"
              placeholder="1,000,000$"
              className="w-10/12 text-center my-28 h-12 px-4 mb-2 text-2xl text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
            />
          </FlexItem>
        </Flex>
      </motion.div>
      <button
        className="float-right p-5"
        onClick={() => setIsVisible(!isVisible)}
      >
        Next
      </button>
    </>
  );
}

import { FaBagShopping } from "react-icons/fa6";
import { header1 } from "../../assets";
import { Link } from "react-router-dom";

import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="relative">
      <div className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-20 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pt-12">
              <div className="lg:max-w-xl">
                <h1 className="text-center text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-left">
                  Welcome to the World of{" "}
                  <span className="block text-yellow-500 lg:inline">
                    Happy Jolly
                  </span>
                </h1>
                <p className="mt-6 text-center text-lg leading-8 text-gray-300 lg:text-left">
                  <span className="inline font-semibold text-white">
                    Happy Jolly
                  </span>{" "}
                  are 100 unique collectible Yorkies with proof of ownership
                  stored on the Ethereum Blockchain.
                </p>
                <div className="mt-6 flex gap-6">
                  <Link
                    to="products"
                    className="px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-2.5 text-sm sm:text-base rounded-md flex items-center gap-2 duration-300 bg-yellow-500 text-black hover:shadow-lg"
                  >
                    <FaBagShopping /> Shop Now
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <motion.div
                className="relative overflow-hidden rounded-xl shadow-lg"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <img
                  src={header1}
                  alt="header1"
                  className="col-span-2 w-full object-cover rounded-lg"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-yellow-600 to-transparent flex flex-col justify-end p-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    y: isHovered ? 0 : 20,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold mb-2">Discover Jollies</h2>
                  <p className="text-sm">
                    Explore breathtaking landscapes and create unforgettable
                    memories.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;

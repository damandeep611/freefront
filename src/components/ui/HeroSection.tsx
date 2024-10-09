"use client";

import React from "react";
import { motion } from "framer-motion";
import heroImg from "../../public/images/working.jpeg";
import Image from "next/image";

const AnimatedGrid = () => {
  const lineVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: 1,
      opacity: 0.2,
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <div className="absolute -right-1/4 -bottom-1/4 w-150 h-150 z-0">
      <svg className="w-full h-full" viewBox="0 0 400 400">
        <motion.path
          d="M 50 50 L 350 50 L 350 350 L 50 350 L 50 50"
          stroke="#4F46E5"
          strokeWidth="0.5"
          fill="none"
          variants={lineVariants}
          initial="initial"
          animate="animate"
        />
        <motion.path
          d="M 100 100 L 300 100 L 300 300 L 100 300 L 100 100"
          stroke="#4F46E5"
          strokeWidth="0.5"
          fill="none"
          variants={lineVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
        />
        <motion.path
          d="M 150 150 L 250 150 L 250 250 L 150 250 L 150 150"
          stroke="#4F46E5"
          strokeWidth="0.5"
          fill="none"
          variants={lineVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4 }}
        />
        {/* Diagonal lines */}
        {[0, 1, 2, 3].map((i) => (
          <motion.line
            key={i}
            x1={50 + i * 100}
            y1="50"
            x2={50 + i * 100}
            y2="350"
            stroke="#4F46E5"
            strokeWidth="0.5"
            variants={lineVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.1 * i }}
          />
        ))}
        {[0, 1, 2, 3].map((i) => (
          <motion.line
            key={i}
            x1="50"
            y1={50 + i * 100}
            x2="350"
            y2={50 + i * 100}
            stroke="#4F46E5"
            strokeWidth="0.5"
            variants={lineVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.1 * i }}
          />
        ))}
      </svg>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Column - Text Content */}
          <div className="flex-1 z-10">
            <motion.span
              className="inline-block text-blue-400 text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              free ui components
            </motion.span>
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Ship fast, build better.
            </motion.h1>
            <motion.p
              className="text-gray-300 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Our library streamlines your workflow, so you can focus on
              creating exceptional user experiences.
            </motion.p>
          </div>

          {/* Right Column - Image with Animated Grid */}
          <div className="flex-1 relative aspect-square max-w-lg">
            <AnimatedGrid />
            <motion.div
              className="relative z-10 rounded-lg overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                stiffness: 100,
              }}
            >
              <Image
                src={heroImg}
                alt="Hero image"
                layout="responsive"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-500/10 rounded-full filter blur-3xl" />
      </div>
    </section>
  );
};

export default HeroSection;

"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Portfolio", path: "/" },
    { name: "Components", path: "/openComponents" },
    { name: "Templates", path: "/templates" },
    { name: "Contact", path: "/contact" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      className="sticky top-0 z-50 bg-white"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="flex items-center justify-between px-4 md:px-8 h-16 border-b border-black">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <span className="font-extrabold text-lg text-blue-900">FT</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-lg">
          {menuItems.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.path}
                className="hover:text-blue-900 transition-colors"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="hidden md:block">
          <motion.button
            className="bg-blue-900 text-white h-12 px-8 font-semibold hover:bg-blue-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Resources
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="fixed inset-0 top-16 bg-blue-800 text-white z-40 md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <motion.div className="flex flex-col items-center py-8 gap-6 bg-blue-800 text-white">
              {menuItems.map((item) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.path}
                    className="text-xl hover:text-blue-900 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                className="bg-blue-900 text-white h-12 px-8 font-semibold mt-4 hover:bg-blue-800 transition-colors"
                variants={itemVariants}
                whileTap={{ scale: 0.95 }}
              >
                Resources
              </motion.button>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;

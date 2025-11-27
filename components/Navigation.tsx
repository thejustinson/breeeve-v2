"use client"

import { RiCloseLine, RiMenu3Line } from "@remixicon/react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="flex justify-between px-5 md:px-10 py-5 font-sans relative">
      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={'/logo-no-bg.png'}
            alt="Logo"
            width={100}
            height={100}
            className="w-10"
          />
          <div className="flex flex-col text-lg leading-none font-bold">
            <span className="text-primary">Breeeve</span>
            <span className="text-gray-500 text-xs">dotcom</span>
          </div>
        </Link>
      </motion.div>

      <motion.div
        className="hidden md:flex gap-2 text-sm grow justify-start pl-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link href="/pricing" className="px-4 py-2 rounded hover:bg-gray-100 transition-colors">Pricing</Link>
        <Link href="/features" className="px-4 py-2 rounded hover:bg-gray-100 transition-colors">Features</Link>
        <Link href="/contact" className="px-4 py-2 rounded hover:bg-gray-100 transition-colors">Contact</Link>
      </motion.div>

      <motion.div
        className="hidden md:flex gap-2 text-sm"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <button className="px-4 py-2 rounded hover:bg-gray-50 transition-colors">Demo</button>
        <button className="px-4 py-2 bg-primary text-white rounded-full hover:opacity-90 transition-opacity">Get Started</button>
      </motion.div>

      <motion.div
        className="md:hidden cursor-pointer"
        onClick={() => setIsMenuOpen(true)}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <RiMenu3Line className="w-6 h-6" />
      </motion.div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </nav>
  )
}

const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30
      }
    }
  }

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.2
      }
    }
  }

  const containerVariants = {
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    closed: {
      opacity: 0,
      x: 20
    },
    open: {
      opacity: 1,
      x: 0
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            className="bg-background h-screen w-[80vw] max-w-sm fixed top-0 right-0 pt-24 p-10 flex flex-col gap-2 z-50 md:hidden shadow-2xl"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.div
              className="bg-gray-100 p-2 rounded w-10 h-10 flex items-center justify-center absolute right-5 top-5 cursor-pointer hover:bg-gray-200 transition-colors"
              onClick={onClose}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.3 }}
            >
              <RiCloseLine className="w-6 h-6" />
            </motion.div>

            <motion.div
              className="flex flex-col text-lg"
              variants={containerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.div variants={itemVariants}>
                <Link href="/pricing" className="px-4 py-2 rounded hover:bg-gray-100 transition-colors block" onClick={onClose}>
                  Pricing
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="/features" className="px-4 py-2 rounded hover:bg-gray-100 transition-colors block" onClick={onClose}>
                  Features
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="/contact" className="px-4 py-2 rounded hover:bg-gray-100 transition-colors block" onClick={onClose}>
                  Contact
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex flex-col gap-2 text-lg mt-10"
              variants={containerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.button
                className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-50 transition-colors"
                variants={itemVariants}
                whileTap={{ scale: 0.95 }}
              >
                Demo
              </motion.button>
              <motion.button
                className="px-4 py-2 bg-primary text-white rounded hover:opacity-90 transition-opacity"
                variants={itemVariants}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

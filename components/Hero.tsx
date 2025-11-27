"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const Hero = () => {
    const words = ["business", "clients", "orders", "expenses", "payments", "reports"]
    const [currentWordIndex, setCurrentWordIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }, 2500)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="px-5 md:px-10 py-20 relative overflow-hidden h-[calc(100vh-64px)] flex items-center">
            {/* Pattern Background */}
            <div className="absolute inset-0 -z-10 opacity-30">
                <svg width="100%" height="100%">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="20" cy="20" r="1.5" fill="#473DA6" opacity="0.3" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="w-full text-center flex flex-col items-center relative z-10">
                {/* Animated Heading */}
                <motion.h1
                    className="font-sans text-4xl md:text-7xl max-w-[650px] mx-auto font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Manage your{" "}
                    <span className="font-serif italic text-primary font-normal inline-block relative">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentWordIndex}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="inline-block"
                            >
                                {words[currentWordIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </span>{" "}
                    easily
                </motion.h1>

                {/* Animated Description */}
                <motion.p
                    className="text-lg max-w-xl mx-auto mt-5 text-gray-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Designed to help modern small businesses work faster, stay organized, and get paid with confidence.
                </motion.p>

                {/* Animated Buttons */}
                <motion.div
                    className="flex flex-col items-center gap-2 mt-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <motion.button
                        className="px-5 py-3 bg-primary text-white rounded-full hover:bg-secondary hover:text-primary transition-colors text-lg w-64"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get Started
                    </motion.button>
                    <motion.button
                        className="text-gray-800 hover:text-primary transition-colors"
                        whileHover={{ scale: 1.05 }}
                    >
                        Or request demo
                    </motion.button>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero
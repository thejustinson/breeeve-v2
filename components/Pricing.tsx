"use client"

import { motion } from "framer-motion"
import { RiCheckLine, RiArrowRightLine } from "@remixicon/react"

const Pricing = () => {
    const allFeatures = [
        "Unlimited clients",
        "Unlimited invoices",
        "Unlimited receipts",
        "Full expense tracking",
        "Automated calculations",
        "Export to PDF & CSV",
        "Breeeve checkout (Fiat & Cryptocurrency)",
        "Business wallet included",
        "Low processing fees",
        "Clean, minimalist templates"
    ]

    return (
        <div className="bg-white py-20 px-5 md:px-20" id="pricing">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-semibold font-serif italic text-gray-800">
                    Free while we're in early access
                </h1>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
                    Get every tool we've built, at no cost,until we launch our full plans.
                </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-5xl mx-auto mb-12"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {allFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
                            className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                            <div className="shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                                <RiCheckLine className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-sm text-gray-700 leading-relaxed">
                                {feature}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Fee Note */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="max-w-2xl mx-auto mb-10 p-6 bg-gray-50 rounded-2xl border border-gray-200"
            >
                <p className="text-sm text-gray-700 text-center">
                    <span className="font-semibold text-gray-900">No monthly fees.</span><br />
                    Only pay standard payment processing when your customers pay.
                </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-center"
            >
                <motion.button
                    className="py-4 px-8 rounded-full font-semibold transition-all duration-300 bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl text-lg inline-flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Get Early Access
                    <RiArrowRightLine className="w-5 h-5" />
                </motion.button>
            </motion.div>

            {/* Trust badge */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="text-center mt-8"
            >
                <p className="text-gray-500 text-sm">
                    Secure payment processing • Data encryption • No credit card required
                </p>
            </motion.div>
        </div>
    )
}

export default Pricing
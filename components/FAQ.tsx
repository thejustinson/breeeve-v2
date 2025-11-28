"use client"

import { motion, AnimatePresence } from "framer-motion"
import { RiArrowDownSLine } from "@remixicon/react"
import { useState } from "react"

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)
    const [activeTab, setActiveTab] = useState("General")

    const tabs = ["General", "Features", "Pricing"]

    const faqs = [
        {
            question: "What is Breeeve?",
            answer: "Breeeve is a simple tool for business owners to manage clients, invoices, receipts, and expenses, all in one place.",
            category: "General"
        },
        {
            question: "Who is Breeeve for?",
            answer: "Small businesses, freelancers, and solo founders who want to organize their business without complex software.",
            category: "General"
        },
        {
            question: "Do I need any technical knowledge to use it?",
            answer: "No. Breeeve is designed to be extremely simple, if you can use WhatsApp and email, you can use Breeeve.",
            category: "General"
        },
        {
            question: "How do I save my data?",
            answer: "Your data is stored securely in your Breeeve account. You can export everything anytime.",
            category: "General"
        },
        {
            question: "Can I use Breeeve on my phone?",
            answer: "Yes. Breeeve works on all devices and can be installed as a PWA (like an app).",
            category: "General"
        },
        {
            question: "What can I do with Breeeve right now?",
            answer: "You can manage clients, create invoices/receipts, track expenses, calculate profit, and export your records as PDF or CSV.",
            category: "Features"
        },
        {
            question: "Does Breeeve replace spreadsheets?",
            answer: "Yes. Everything you normally track in Excel or Google Sheets can be organized cleanly inside Breeeve.",
            category: "Features"
        },
        {
            question: "Can I add multiple businesses?",
            answer: "Not yet. Early access supports one business per account. Multi-business support is coming later.",
            category: "Features"
        },
        {
            question: "What features are coming next?",
            answer: "Custom branding, analytics, team members, storefront builder, and scheduled payouts.",
            category: "Features"
        },
        {
            question: "Is Breeeve free?",
            answer: "Yes. All core tools are free during early access. Later, premium features will be optional.",
            category: "Pricing"
        },
        {
            question: "Does Breeeve support payments?",
            answer: "Yes, but it's optional. You can choose to receive Naira or USDC payments through Breeeve checkout when you're ready.",
            category: "Pricing"
        }
    ]

    const filteredFaqs = faqs.filter(faq => faq.category === activeTab)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="bg-gray-50 py-20 px-5 md:px-20" id="faq">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h1 className="font-serif italic text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Frequently asked questions
                </h1>
                <p className="text-gray-600 text-lg">
                    These are the most commonly asked questions about Breeeve.
                </p>
            </motion.div>

            {/* Category Tabs */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center gap-2 mb-12"
            >
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => {
                            setActiveTab(tab)
                            setOpenIndex(null)
                        }}
                        className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeTab === tab
                                ? "bg-gray-900 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </motion.div>

            {/* FAQ Accordion */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="max-w-3xl mx-auto"
            >
                <div className="space-y-3">
                    {filteredFaqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            className="border-b border-gray-200"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors px-2"
                            >
                                <span className="text-base font-semibold text-gray-900 pr-4">
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="shrink-0"
                                >
                                    <RiArrowDownSLine className="w-6 h-6 text-gray-400" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-2 pb-5 pt-2">
                                            <p className="text-gray-600 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default FAQ
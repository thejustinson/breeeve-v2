"use client"

import {
    RiGroupLine,
    RiShoppingBag3Line,
    RiMoneyDollarCircleLine,
    RiBankCardLine,
    RiFileTextLine,
    RiDashboardLine
} from "@remixicon/react"
import { motion } from "framer-motion"

const Features = () => {
    const features = [
        {
            icon: RiGroupLine,
            title: "Client Management",
            description: "Keep all your clients' details in one organized place. Track interactions and stay on top of every relationship.",
            gradient: "from-purple-500/10 to-pink-500/10",
            iconBg: "bg-purple-500/20",
            iconColor: "text-purple-600",
            borderColor: "border-purple-600"
        },
        {
            icon: RiShoppingBag3Line,
            title: "Order Tracking",
            description: "Create, manage, and monitor orders effortlessly. Know what's pending, completed, or overdue at a glance.",
            gradient: "from-blue-500/10 to-cyan-500/10",
            iconBg: "bg-blue-500/20",
            iconColor: "text-blue-600",
            borderColor: "border-blue-600"
        },
        {
            icon: RiMoneyDollarCircleLine,
            title: "Expenses Monitoring",
            description: "Record expenses in seconds and understand where your money goes. Stay financially aware without spreadsheets.",
            gradient: "from-orange-500/10 to-red-500/10",
            iconBg: "bg-orange-500/20",
            iconColor: "text-orange-600",
            borderColor: "border-orange-600"
        },
        {
            icon: RiBankCardLine,
            title: "Payment Processing",
            description: "Collect payments in Fiat or Cryptocurrency with ease. Fast confirmation, zero confusion, and fully automated tracking.",
            gradient: "from-green-500/10 to-emerald-500/10",
            iconBg: "bg-green-500/20",
            iconColor: "text-green-600",
            borderColor: "border-green-600"
        },
        {
            icon: RiFileTextLine,
            title: "Invoices & Receipts",
            description: "Generate clean, professional invoices and receipts instantly. Share them with clients in one click.",
            gradient: "from-indigo-500/10 to-purple-500/10",
            iconBg: "bg-indigo-500/20",
            iconColor: "text-indigo-600",
            borderColor: "border-indigo-600"
        },
        {
            icon: RiDashboardLine,
            title: "Business Dashboard",
            description: "See everything that matters, revenue, clients, orders, and spending, in a single, calm, easy-to-read dashboard.",
            gradient: "from-primary/10 to-secondary/10",
            iconBg: "bg-primary/20",
            iconColor: "text-primary",
            borderColor: "border-primary"
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        <div className="py-20 px-5 md:px-20 bg-gray-50" id="features">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl md:text-5xl font-semibold font-serif italic text-gray-800 text-center">
                    Built for Businesses
                </h1>
                <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
                    From client management to payment processing, our tools are built to help your business thrive.
                </p>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {features.map((feature, index) => {
                    const Icon = feature.icon
                    return (
                        <motion.div
                            key={index}
                            className={`bg-linear-to-br ${feature.gradient} backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 flex flex-col gap-4 hover:bg-foreground hover:scale-105 transition-all duration-300 relative group overflow-hidden`}
                            variants={itemVariants}
                        >
                            <div className={`${feature.iconBg} w-16 h-16 rounded-xl flex items-center justify-center relative z-10`}>
                                <Icon className={`w-8 h-8 ${feature.iconColor}`} />
                            </div>
                            <div className="flex flex-col gap-2 relative z-10">
                                <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-gray-300">{feature.title}</h2>
                                <p className="text-gray-700 leading-relaxed group-hover:text-gray-400">{feature.description}</p>
                            </div>
                            <Icon className={`w-96 h-96 ${feature.iconColor} absolute -bottom-16 -right-32 opacity-5 -rotate-45`} />
                        </motion.div>
                    )
                })}
            </motion.div>
        </div>
    )
}

export default Features
import Link from "next/link"
import { RiTwitterXLine } from "@remixicon/react"

const Footer = () => {
    return (
        <footer className="bg-black text-white py-16 px-5 md:px-20">
            <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="md:col-span-1">
                        <h3 className="text-2xl font-bold mb-4">Breeeve</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Simple tools for managing clients, invoices, receipts, and business finances.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4 text-gray-300">Product</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="#pricing" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="#faq" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4 text-gray-300">Company</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4 text-gray-300">Social</h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="https://twitter.com/withbreeeve"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                                >
                                    <RiTwitterXLine className="w-4 h-4" />
                                    @withbreeeve
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800">
                    <p className="text-gray-400 text-sm text-center">
                        © 2025 Breeeve. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

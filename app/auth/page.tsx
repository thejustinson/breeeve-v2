"use client";

import Logo from "@/components/Logo";
import { RiGoogleFill, RiMailLine, RiArrowLeftLine } from "@remixicon/react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useLoginWithEmail } from "@privy-io/react-auth";
import { validateEmail } from "@/utils/input-validator";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);
  const [step, setStep] = useState<"email" | "code">("email");
  const [isLoading, setIsLoading] = useState(false);

  const { sendCode, loginWithCode } = useLoginWithEmail();

  // Validate email in real-time
  useEffect(() => {
    if (email.trim() === "") {
      setEmailError(null);
      return;
    }

    const validation = validateEmail(email);
    if (!validation.isValid) {
      setEmailError(validation.error || "Invalid email");
    } else {
      setEmailError(null);
    }
  }, [email]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!touched) setTouched(true);
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers and limit to 6 digits
    const value = e.target.value.replace(/\D/g, "").slice(0, 6);
    setCode(value);
  };

  const handleSendCode = async () => {
    setTouched(true);

    const validation = validateEmail(email);
    if (!validation.isValid) {
      setEmailError(validation.error || "Invalid email");
      return;
    }

    setIsLoading(true);

    try {
      await sendCode({ email });
      console.log("Code sent successfully");
      setStep("code");
    } catch (error) {
      console.error("Error sending code:", error);
      // TODO: Show error message to user
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyCode = async () => {
    if (code.length !== 6) {
      return;
    }

    setIsLoading(true);

    try {
      await loginWithCode({ code });
      console.log("Login successful");
      // TODO: Redirect to dashboard
    } catch (error) {
      console.error("Error verifying code:", error);
      // TODO: Show error message to user
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoBack = () => {
    setStep("email");
    setCode("");
  };

  const handleGoogleLogin = () => {
    // TODO: Implement Google Login Logic
    console.log("Continue with Google");
  };

  const showError = touched && emailError;

  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-0 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:max-w-md bg-white md:rounded-2xl md:border md:border-gray-200 p-8 md:p-10 min-h-screen md:min-h-0 flex flex-col justify-center"
      >
        {/* Logo */}
        <div className="mb-8 flex">
          <Logo page="auth" />
        </div>

        {/* Header */}
        <div className="mb-4">
          <AnimatePresence mode="wait">
            {step === "email" ? (
              <motion.div
                key="email-header"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 font-serif">
                  Welcome to Breeeve
                </h1>
                <p className="text-gray-500">
                  Simple tools for managing your business.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="code-header"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={handleGoBack}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
                >
                  <RiArrowLeftLine className="w-5 h-5" />
                  <span className="text-sm">Back</span>
                </button>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 font-serif">
                  Check your email
                </h1>
                <p className="text-gray-500">
                  We sent a code to{" "}
                  <span className="font-medium text-gray-700">{email}</span>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Form */}
        <AnimatePresence mode="wait">
          {step === "email" ? (
            <motion.div
              key="email-form"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email address*
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={() => setTouched(true)}
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    showError
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                      : "border-gray-200 focus:border-primary focus:ring-primary/20"
                  } focus:ring-2 outline-none transition-all placeholder:text-gray-400`}
                />
                {showError && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-sm text-red-600"
                  >
                    {emailError}
                  </motion.p>
                )}
              </div>

              <button
                onClick={handleSendCode}
                disabled={!!emailError || email.trim() === "" || isLoading}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
                  emailError || email.trim() === "" || isLoading
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-primary text-white hover:bg-primary/90 cursor-pointer"
                }`}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending code...
                  </>
                ) : (
                  <>
                    <RiMailLine className="w-5 h-5" />
                    Get code
                  </>
                )}
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="code-form"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              <div>
                <label
                  htmlFor="code"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Verification code*
                </label>
                <input
                  type="text"
                  id="code"
                  value={code}
                  onChange={handleCodeChange}
                  placeholder="Enter 6-digit code"
                  maxLength={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400 text-center text-2xl tracking-widest font-mono"
                  autoFocus
                />
              </div>

              <button
                onClick={handleVerifyCode}
                disabled={code.length !== 6 || isLoading}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
                  code.length !== 6 || isLoading
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-primary text-white hover:bg-primary/90 cursor-pointer"
                }`}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Verifying...
                  </>
                ) : (
                  "Continue"
                )}
              </button>

              <button
                onClick={handleSendCode}
                disabled={isLoading}
                className="w-full text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Didn't receive a code? Resend
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Divider - Only show on email step */}
        {step === "email" && (
          <>
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-400">or</span>
              </div>
            </div>

            {/* Google Button */}
            <button
              onClick={handleGoogleLogin}
              className="w-full py-3 px-4 bg-white text-gray-700 border border-gray-200 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            >
              <RiGoogleFill className="w-5 h-5" />
              Continue with Google
            </button>
          </>
        )}

        {/* Footer Note */}
        <p className="mt-8 text-sm text-gray-500 text-center">
          By continuing, you agree to our{" "}
          <Link href="#" className="text-gray-900 hover:text-primary">
            Terms
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-gray-900 hover:text-primary">
            Privacy Policy
          </Link>
          .
        </p>
      </motion.div>
    </div>
  );
};

export default Auth;

"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  phone: string;
  occasion: string;
  budget: string;
  recipient: string;
  preferences: string;
  timeline: string;
  message: string;
}

const occasions = [
  "Birthday",
  "Anniversary",
  "Wedding",
  "Corporate",
  "Festival",
  "Housewarming",
  "Baby Shower",
  "Other",
];

const budgetRanges = [
  "Under ₹2,000",
  "₹2,000 - ₹5,000",
  "₹5,000 - ₹10,000",
  "₹10,000 - ₹25,000",
  "₹25,000+",
];

const timelines = [
  "This week",
  "2 weeks",
  "1 month",
  "2-3 months",
  "Flexible",
];

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    occasion: "",
    budget: "",
    recipient: "",
    preferences: "",
    timeline: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 7;

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: { opacity: 0, y: -20 },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const progressVariants: Variants = {
    initial: { scaleX: 0 },
    animate: {
      scaleX: (currentStep + 1) / totalSteps,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#c141bc] opacity-10 blur-[140px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#c141bc] opacity-10 blur-[160px]"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-32 h-32 border border-[#c141bc] opacity-20 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 right-20 w-24 h-24 border border-[#c141bc] opacity-20 rotate-45"
        />
      </div>

      {/* Header */}
      <header className="relative z-10 py-8 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto flex justify-between items-center"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-[#c141bc] flex items-center justify-center">
              <span className="text-lg font-bold">TCC</span>
            </div>
            <span className="text-sm tracking-[0.2em] uppercase font-medium">
              The Curation Company
            </span>
          </div>
          <motion.a
            href="https://www.thecurationcompany.in/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="text-sm tracking-wider uppercase underline underline-offset-4"
          >
            Visit Main Site
          </motion.a>
        </motion.div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 md:px-12 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <motion.p
              variants={itemVariants}
              className="text-sm tracking-[0.3em] uppercase mb-6 opacity-70"
            >
              Bespoke Gifting Solutions
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6"
            >
              To be loved is
              <br />
              <span className="italic font-light">to be known.</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl max-w-2xl mx-auto opacity-80 leading-relaxed"
            >
              Let us curate a gift that speaks the language of your heart.
              Every gift tells a story — let us help you write yours.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative z-10 px-6 md:px-12 pb-20">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#c141bc]/20 shadow-2xl"
          >
            {/* Progress bar */}
            {!isSubmitted && (
              <div className="mb-10">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs tracking-widest uppercase opacity-60">
                    Step {currentStep + 1} of {totalSteps}
                  </span>
                  <span className="text-xs tracking-widest uppercase opacity-60">
                    {Math.round(((currentStep + 1) / totalSteps) * 100)}%
                  </span>
                </div>
                <div className="h-1 bg-[#c141bc]/20 rounded-full overflow-hidden">
                  <motion.div
                    variants={progressVariants}
                    initial="initial"
                    animate="animate"
                    className="h-full bg-[#c141bc] rounded-full"
                  />
                </div>
              </div>
            )}

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-20 h-20 mx-auto mb-8 rounded-full bg-[#c141bc] flex items-center justify-center"
                  >
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-2xl md:text-3xl font-bold mb-4"
                  >
                    Thank You
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-lg opacity-80 leading-relaxed"
                  >
                    Your gifting inquiry has been received.
                    <br />
                    We will curate something special for you and get back within 24 hours.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-sm mt-8 opacity-60 italic"
                  >
                    — With love, The Curation Company
                  </motion.p>
                </motion.div>
              ) : (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Step 0: Name & Email */}
                  {currentStep === 0 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        Tell us about yourself
                      </h2>
                      <p className="opacity-70 mb-8">
                        We would love to know who we are creating for.
                      </p>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm tracking-wider uppercase mb-2 opacity-60">
                            Your Name
                          </label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => updateFormData("name", e.target.value)}
                            placeholder="What should we call you?"
                            className="w-full px-6 py-4 rounded-xl bg-white/5 border border-[#c141bc]/30 focus:border-[#c141bc] transition-colors text-lg"
                          />
                        </div>
                        <div>
                          <label className="block text-sm tracking-wider uppercase mb-2 opacity-60">
                            Email Address
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => updateFormData("email", e.target.value)}
                            placeholder="Where can we reach you?"
                            className="w-full px-6 py-4 rounded-xl bg-white/5 border border-[#c141bc]/30 focus:border-[#c141bc] transition-colors text-lg"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 1: Phone */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        How can we reach you?
                      </h2>
                      <p className="opacity-70 mb-8">
                        Share your phone number so we can discuss your gifting needs.
                      </p>
                      <div>
                        <label className="block text-sm tracking-wider uppercase mb-2 opacity-60">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => updateFormData("phone", e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full px-6 py-4 rounded-xl bg-white/5 border border-[#c141bc]/30 focus:border-[#c141bc] transition-colors text-lg"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 2: Occasion */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        What is the occasion?
                      </h2>
                      <p className="opacity-70 mb-8">
                        Every gift deserves a meaningful context.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        {occasions.map((occasion, index) => (
                          <motion.button
                            key={occasion}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => {
                              updateFormData("occasion", occasion);
                              nextStep();
                            }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`px-6 py-4 rounded-xl border transition-all text-left ${
                              formData.occasion === occasion
                                ? "bg-[#c141bc] text-white border-[#c141bc]"
                                : "bg-white/5 border-[#c141bc]/30 hover:border-[#c141bc]"
                            }`}
                          >
                            {occasion}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 3: Budget */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        What is your budget?
                      </h2>
                      <p className="opacity-70 mb-8">
                        Help us curate within your comfort zone.
                      </p>
                      <div className="space-y-3">
                        {budgetRanges.map((range, index) => (
                          <motion.button
                            key={range}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => {
                              updateFormData("budget", range);
                              nextStep();
                            }}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            className={`w-full px-6 py-5 rounded-xl border transition-all text-left flex justify-between items-center ${
                              formData.budget === range
                                ? "bg-[#c141bc] text-white border-[#c141bc]"
                                : "bg-white/5 border-[#c141bc]/30 hover:border-[#c141bc]"
                            }`}
                          >
                            <span>{range}</span>
                            {formData.budget === range && (
                              <motion.svg
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </motion.svg>
                            )}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 4: Recipient */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        Tell us about the recipient
                      </h2>
                      <p className="opacity-70 mb-8">
                        Who is this gift for? Help us understand them better.
                      </p>
                      <div>
                        <label className="block text-sm tracking-wider uppercase mb-2 opacity-60">
                          Recipient Description
                        </label>
                        <textarea
                          value={formData.recipient}
                          onChange={(e) => updateFormData("recipient", e.target.value)}
                          placeholder="Age, interests, personality... anything that helps us understand who we are gifting for."
                          rows={4}
                          className="w-full px-6 py-4 rounded-xl bg-white/5 border border-[#c141bc]/30 focus:border-[#c141bc] transition-colors text-lg resize-none"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 5: Preferences & Timeline */}
                  {currentStep === 5 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        Any special preferences?
                      </h2>
                      <p className="opacity-70 mb-8">
                        Colors, themes, or anything specific you have in mind.
                      </p>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm tracking-wider uppercase mb-2 opacity-60">
                            Preferences
                          </label>
                          <textarea
                            value={formData.preferences}
                            onChange={(e) =>
                              updateFormData("preferences", e.target.value)
                            }
                            placeholder="Colors, themes, style, or anything specific..."
                            rows={3}
                            className="w-full px-6 py-4 rounded-xl bg-white/5 border border-[#c141bc]/30 focus:border-[#c141bc] transition-colors text-lg resize-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm tracking-wider uppercase mb-2 opacity-60">
                            Timeline
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            {timelines.map((timeline, index) => (
                              <motion.button
                                key={timeline}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                onClick={() => {
                                  updateFormData("timeline", timeline);
                                }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`px-4 py-3 rounded-xl border transition-all text-sm ${
                                  formData.timeline === timeline
                                    ? "bg-[#c141bc] text-white border-[#c141bc]"
                                    : "bg-white/5 border-[#c141bc]/30 hover:border-[#c141bc]"
                                }`}
                              >
                                {timeline}
                              </motion.button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 6: Final Message */}
                  {currentStep === 6 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        Anything else you would like to share?
                      </h2>
                      <p className="opacity-70 mb-8">
                        Final thoughts before we begin our curation.
                      </p>
                      <div>
                        <label className="block text-sm tracking-wider uppercase mb-2 opacity-60">
                          Additional Notes
                        </label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => updateFormData("message", e.target.value)}
                          placeholder="Any other details, special requirements, or messages..."
                          rows={5}
                          className="w-full px-6 py-4 rounded-xl bg-white/5 border border-[#c141bc]/30 focus:border-[#c141bc] transition-colors text-lg resize-none"
                        />
                      </div>
                      <motion.button
                        onClick={handleSubmit}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-5 bg-[#c141bc] text-white rounded-xl font-medium tracking-wider uppercase mt-4 hover:bg-[#a035a0] transition-colors"
                      >
                        Submit Inquiry
                      </motion.button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation buttons */}
            {!isSubmitted && currentStep < totalSteps - 1 && (
              <div className="flex justify-between items-center mt-10">
                <motion.button
                  onClick={prevStep}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={currentStep === 0}
                  className={`px-6 py-3 rounded-xl border border-[#c141bc]/30 transition-all ${
                    currentStep === 0
                      ? "opacity-30 cursor-not-allowed"
                      : "hover:bg-white/10"
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </motion.button>
                <span className="text-sm opacity-50">
                  Press Enter to continue
                </span>
                <motion.button
                  onClick={nextStep}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-[#c141bc] text-white rounded-xl font-medium tracking-wider uppercase hover:bg-[#a035a0] transition-colors flex items-center gap-2"
                >
                  <span>Continue</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 md:px-12 border-t border-[#c141bc]/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            className="text-sm tracking-wider"
          >
            © 2026 The Curation Company. All rights reserved.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            className="flex items-center gap-4"
          >
            <span className="text-sm tracking-wider">Crafted with</span>
            <svg
              className="w-5 h-5 text-[#c141bc]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="text-sm tracking-wider">in India</span>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}
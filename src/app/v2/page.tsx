"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// Magenta/Pink Blob Background
function BlobBackground() {
  return (
    <>
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
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }} />
    </>
  );
}

// Gift Icon SVG
function GiftIcon({ className = "", size = 24 }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="8" y="24" width="48" height="36" rx="4" fill="currentColor" />
      <rect x="8" y="24" width="48" height="8" fill="#a035a0" />
      <rect x="28" y="24" width="8" height="36" fill="#d463c7" />
      <path
        d="M32 24C32 24 24 16 24 12C24 8 28 4 32 8C36 4 40 8 40 12C40 16 32 24 32 24Z"
        fill="#c141bc"
      />
      <path
        d="M32 24C32 24 28 20 28 16C28 12 30 10 32 12C34 10 36 12 36 16C36 20 32 24 32 24Z"
        fill="#a035a0"
      />
    </svg>
  );
}

// Premium Input Component
function PremiumInput({
  label,
  value,
  onChange,
  type = "text",
  required = true,
  placeholder = "",
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-[#c141bc] tracking-wide opacity-80">
        {label}
        {required && <span className="text-[#c141bc] ml-1">*</span>}
      </label>
      <div className="relative rounded-xl transition-all duration-300 group">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-white/10 backdrop-blur-sm border border-[#c141bc]/30 rounded-xl px-5 py-4 text-[#c141bc] placeholder-[#c141bc]/50 transition-all duration-300 focus:outline-none focus:border-[#c141bc] focus:bg-white/20 group-hover:border-[#c141bc]/50"
          required={required}
        />
      </div>
    </div>
  );
}

// Premium Select Component
function PremiumSelect({
  label,
  value,
  onChange,
  options,
  required = true,
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
  options: string[];
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-[#c141bc] tracking-wide opacity-80">
        {label}
        {required && <span className="text-[#c141bc] ml-1">*</span>}
      </label>
      <div className="relative rounded-xl transition-all duration-300 group">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-white/10 backdrop-blur-sm border border-[#c141bc]/30 rounded-xl px-5 py-4 text-[#c141bc] appearance-none cursor-pointer transition-all duration-300 focus:outline-none focus:border-[#c141bc] focus:bg-white/20 group-hover:border-[#c141bc]/50"
          required={required}
        >
          <option value="" className="text-[#c141bc]/50">Select an option...</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg className="w-5 h-5 text-[#c141bc]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// Premium Textarea Component
function PremiumTextarea({
  label,
  value,
  onChange,
  required = true,
  rows = 4,
  hint = "",
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
  required?: boolean;
  rows?: number;
  hint?: string;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-[#c141bc] tracking-wide opacity-80">
        {label}
        {required && <span className="text-[#c141bc] ml-1">*</span>}
      </label>
      <div className="relative rounded-xl transition-all duration-300 group">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={rows}
          className="w-full bg-white/10 backdrop-blur-sm border border-[#c141bc]/30 rounded-xl px-5 py-4 text-[#c141bc] placeholder-[#c141bc]/50 transition-all duration-300 focus:outline-none focus:border-[#c141bc] focus:bg-white/20 group-hover:border-[#c141bc]/50 resize-none"
          required={required}
        />
      </div>
      {hint && <p className="text-xs text-[#c141bc]/60 italic">{hint}</p>}
    </div>
  );
}

// Option Card (radio style)
function OptionCard({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full p-4 rounded-xl border text-left transition-all duration-500 cursor-pointer ${
        selected
          ? "border-[#c141bc] bg-[#c141bc]/10 shadow-lg shadow-[#c141bc]/20"
          : "border-[#c141bc]/30 bg-white/10 hover:border-[#c141bc]/50"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
            selected ? "border-[#c141bc] bg-[#c141bc]" : "border-[#c141bc]/50 bg-transparent"
          }`}
        >
          {selected && (
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
        <span className={`text-sm ${selected ? "text-[#c141bc] font-medium" : "text-[#c141bc]/70"}`}>
          {children}
        </span>
      </div>
    </button>
  );
}

// Value Card (hamper budget selection)
function ValueCard({
  value,
  fee,
  selected,
  onClick,
}: {
  value: string;
  fee: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative p-4 rounded-xl border text-center transition-all duration-500 cursor-pointer overflow-hidden ${
        selected
          ? "border-[#c141bc] bg-[#c141bc] text-white shadow-lg shadow-[#c141bc]/30"
          : "border-[#c141bc]/30 bg-white/10 hover:border-[#c141bc]/50"
      }`}
    >
      <div className="relative z-10">
        <div className={`text-lg font-bold mb-0.5 ${selected ? "text-white" : "text-[#c141bc]"}`}>
          INR {value}
        </div>
        <div className={`text-xs ${selected ? "text-white/80" : "text-[#c141bc]/60"}`}>
          + {fee} fee
        </div>
      </div>
      {selected && (
        <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-white/30 flex items-center justify-center">
          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
    </button>
  );
}

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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
    scaleX: (currentStep: number, total: number) => (currentStep + 1) / total,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

// Hamper values
const hamperValues = [
  { value: "2,000", fee: "300" },
  { value: "3,000", fee: "450" },
  { value: "4,000", fee: "600" },
  { value: "5,000", fee: "750" },
  { value: "6,000", fee: "900" },
  { value: "7,000", fee: "1,050" },
  { value: "8,000", fee: "1,200" },
  { value: "9,000", fee: "1,350" },
  { value: "10,000+", fee: "1,500" },
];

// Occasions
const occasions = [
  "Birthday",
  "Anniversary",
  "Appreciation",
  "Farewell",
  "Festival",
  "Valentine's",
  "Baby Shower",
  "Bridal Shower",
  "Christmas",
  "Halloween",
  "Diwali",
  "Other",
];

// Color options
const colorOptions = [
  "Pastel shades",
  "Earthy tones",
  "Bright colours",
  "Dark colours",
  "Black / White",
  "Gold",
  "Silver",
  "Rose gold",
];

interface FormData {
  email: string;
  hamperValue: string;
  date: string;
  delivery: string;
  address: string;
  recipientName: string;
  recipientDescription: string;
  occasion: string;
  quirks: string;
  favoriteColor: string;
  addOns: string;
  hobbies: string;
  likesDislikes: string;
  accessories: string;
  savorySweet: string;
  allergies: string;
  consent: boolean;
  additionalInfo: string;
}

export default function V2Page() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    hamperValue: "",
    date: "",
    delivery: "",
    address: "",
    recipientName: "",
    recipientDescription: "",
    occasion: "",
    quirks: "",
    favoriteColor: "",
    addOns: "",
    hobbies: "",
    likesDislikes: "",
    accessories: "",
    savorySweet: "",
    allergies: "",
    consent: false,
    additionalInfo: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 6;

  const updateFormData = <K extends keyof FormData>(field: K, value: FormData[K]) => {
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
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  // Step 0: Landing Page
  if (currentStep === 0) {
    return (
      <main className="min-h-screen relative overflow-hidden">
        <BlobBackground />

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
                <span className="text-lg font-bold text-[#c141bc]">TCC</span>
              </div>
              <span className="text-sm tracking-[0.2em] uppercase font-medium text-[#c141bc]">
                The Curation Company
              </span>
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
                className="text-sm tracking-[0.3em] uppercase mb-6 text-[#c141bc]/70"
              >
                Bespoke Gifting Solutions
              </motion.p>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6 text-[#c141bc]"
              >
                To be loved is
                <br />
                <span className="italic font-light">to be known.</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-[#c141bc]/80 mb-8"
              >
                Let us curate a gift that speaks the language of your heart. Every gift tells a story — let us help you write yours.
              </motion.p>

              <motion.button
                variants={itemVariants}
                onClick={nextStep}
                className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#c141bc] text-white font-semibold text-lg shadow-xl shadow-[#c141bc]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#c141bc]/40 hover:scale-105 cursor-pointer"
              >
                <span className="flex items-center gap-3">
                  <GiftIcon size={24} className="text-white" />
                  Start Curation
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 py-12 px-6 md:px-12 border-t border-[#c141bc]/10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              className="text-sm tracking-wider text-[#c141bc]/70"
            >
              © 2026 The Curation Company. All rights reserved.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              className="flex items-center gap-4 text-[#c141bc]/70"
            >
              <span className="text-sm tracking-wider">Crafted with</span>
              <svg className="w-5 h-5 text-[#c141bc]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span className="text-sm tracking-wider">in India</span>
            </motion.div>
          </div>
        </footer>
      </main>
    );
  }

  // Success Screen
  if (isSubmitted) {
    return (
      <main className="min-h-screen relative overflow-hidden">
        <BlobBackground />
        <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="text-center max-w-md"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
              className="w-32 h-32 mx-auto mb-8 rounded-full bg-[#c141bc] flex items-center justify-center shadow-2xl shadow-[#c141bc]/30"
            >
              <GiftIcon size={64} className="text-white" />
            </motion.div>

            <h2 className="text-5xl font-bold text-[#c141bc] mb-4">Thank You!</h2>
            <p className="text-xl text-[#c141bc]/70 mb-6">
              We&apos;ve received your curation request
            </p>
            <p className="text-[#c141bc]/60 leading-relaxed">
              We&apos;ll start working our magic. You&apos;ll hear from us within 15 days.
            </p>
            <p className="text-2xl italic text-[#c141bc] mt-10">
              &ldquo;To be loved is to be known.&rdquo;
            </p>
          </motion.div>
        </div>
      </main>
    );
  }

  // Form Steps
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            key="step1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#c141bc] mb-2">Select your hamper</h2>
              <p className="text-[#c141bc]/70">Choose the perfect value for your gift</p>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-semibold text-[#c141bc] tracking-wide opacity-80">
                What is the value of the hamper you&apos;d like to gift? <span className="text-[#c141bc]">*</span>
              </label>
              <p className="text-xs text-[#c141bc]/60 mb-4">
                Hamper value starts at INR 2,000. Additional 15% curator&apos;s fee applies.
              </p>
              <div className="grid grid-cols-3 gap-3">
                {hamperValues.map((item) => (
                  <ValueCard
                    key={item.value}
                    value={item.value}
                    fee={item.fee}
                    selected={formData.hamperValue === item.value}
                    onClick={() => updateFormData("hamperValue", item.value)}
                  />
                ))}
              </div>
            </div>

            <PremiumInput
              label="When do you need the hamper?"
              value={formData.date}
              onChange={(val) => updateFormData("date", val)}
              type="date"
            />

            <div className="space-y-4">
              <label className="block text-sm font-semibold text-[#c141bc] tracking-wide opacity-80">
                Do you need us to deliver? <span className="text-[#c141bc]">*</span>
              </label>
              <div className="grid grid-cols-2 gap-4">
                <OptionCard
                  selected={formData.delivery === "yes"}
                  onClick={() => updateFormData("delivery", "yes")}
                >
                  Yes, deliver to recipient
                </OptionCard>
                <OptionCard
                  selected={formData.delivery === "pickup"}
                  onClick={() => updateFormData("delivery", "pickup")}
                >
                  Self pickup
                </OptionCard>
              </div>
            </div>

            {formData.delivery === "yes" && (
              <PremiumTextarea
                label="Complete postal address for delivery"
                value={formData.address}
                onChange={(val) => updateFormData("address", val)}
                required={false}
                rows={3}
              />
            )}
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            key="step2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#c141bc] mb-2">Meet your recipient</h2>
              <p className="text-[#c141bc]/70">Tell us about the person we&apos;re curating for</p>
            </div>

            <PremiumInput
              label="What&apos;s their name?"
              value={formData.recipientName}
              onChange={(val) => updateFormData("recipientName", val)}
              placeholder="The lucky recipient..."
            />

            <PremiumTextarea
              label="Give us a brief description about them"
              value={formData.recipientDescription}
              onChange={(val) => updateFormData("recipientDescription", val)}
              rows={4}
              placeholder="What are they like? What makes them unique?"
            />

            <PremiumSelect
              label="What is the occasion?"
              value={formData.occasion}
              onChange={(val) => updateFormData("occasion", val)}
              options={occasions}
            />
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            key="step3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#c141bc] mb-2">Their personality</h2>
              <p className="text-[#c141bc]/70">Quirks, preferences & what makes them tick</p>
            </div>

            <PremiumTextarea
              label="Tell us any particular quirks they have"
              value={formData.quirks}
              onChange={(val) => updateFormData("quirks", val)}
              rows={4}
              hint="e.g. sustainability lover, journaler, voracious reader, coffee person..."
            />

            <div className="space-y-4">
              <label className="block text-sm font-semibold text-[#c141bc] tracking-wide opacity-80">
                What is their favorite colour? <span className="text-[#c141bc]">*</span>
              </label>
              <p className="text-xs text-[#c141bc]/60">Hampers are usually colour schemed based on this</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {colorOptions.map((color) => (
                  <OptionCard
                    key={color}
                    selected={formData.favoriteColor === color}
                    onClick={() => updateFormData("favoriteColor", color)}
                  >
                    {color}
                  </OptionCard>
                ))}
              </div>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            key="step4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#c141bc] mb-2">Interests & lifestyle</h2>
              <p className="text-[#c141bc]/70">What they love, what they need</p>
            </div>

            <PremiumTextarea
              label="Anything you definitely want us to add to the hamper?"
              value={formData.addOns}
              onChange={(val) => updateFormData("addOns", val)}
              rows={3}
              required={false}
            />

            <PremiumTextarea
              label="Tell us about their hobbies and occupation"
              value={formData.hobbies}
              onChange={(val) => updateFormData("hobbies", val)}
              rows={3}
            />

            <PremiumTextarea
              label="Any likes or dislikes we should know about?"
              value={formData.likesDislikes}
              onChange={(val) => updateFormData("likesDislikes", val)}
              rows={3}
              required={false}
            />

            <PremiumTextarea
              label="Do they use accessories or jewelry?"
              value={formData.accessories}
              onChange={(val) => updateFormData("accessories", val)}
              rows={3}
              required={false}
              hint="Style: Minimal / Dainty / Bold / Boho / Traditional"
            />

            <PremiumTextarea
              label="Do they like savory or sweet?"
              value={formData.savorySweet}
              onChange={(val) => updateFormData("savorySweet", val)}
              rows={3}
              required={false}
              hint="Cookies, chocolates, traditional snacks, healthy choices..."
            />
          </motion.div>
        );

      case 5:
        return (
          <motion.div
            key="step5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#c141bc] mb-2">Final details</h2>
              <p className="text-[#c141bc]/70">Health considerations & any other info</p>
            </div>

            <PremiumTextarea
              label="Any allergies or dietary preferences?"
              value={formData.allergies}
              onChange={(val) => updateFormData("allergies", val)}
              rows={3}
              required={false}
              hint="Gluten free, nuts, lactose intolerant, vegan..."
            />

            <PremiumTextarea
              label="Any other information you&apos;d like to share?"
              value={formData.additionalInfo}
              onChange={(val) => updateFormData("additionalInfo", val)}
              rows={4}
              required={false}
            />

            <div className="p-6 rounded-2xl bg-white/10 border border-[#c141bc]/20">
              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => updateFormData("consent", e.target.checked)}
                  className="mt-1 w-5 h-5 rounded border-2 border-[#c141bc] text-[#c141bc] focus:ring-[#c141bc] cursor-pointer accent-[#c141bc]"
                />
                <p className="text-sm text-[#c141bc]/70 leading-relaxed">
                  By submitting this form, you consent to the collection and use of your information for curating a gift hamper.
                </p>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      <BlobBackground />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f3d3f4]/90 backdrop-blur-xl border-b border-[#c141bc]/10">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={prevStep}
              className="flex items-center gap-2 text-[#c141bc]/70 hover:text-[#c141bc] transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm">Back</span>
            </button>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border-2 border-[#c141bc] flex items-center justify-center">
                <span className="text-sm font-bold text-[#c141bc]">TCC</span>
              </div>
              <span className="text-sm tracking-[0.2em] uppercase font-medium text-[#c141bc]">Curation.Co</span>
            </div>

            <div className="text-sm text-[#c141bc]/50">
              {currentStep + 1} / {totalSteps}
            </div>
          </div>

          <div className="h-1 bg-[#c141bc]/20 rounded-full overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: (currentStep + 1) / totalSteps }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="h-full bg-[#c141bc] rounded-full origin-left"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-36 pb-32 px-6">
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="fixed bottom-0 left-0 right-0 bg-[#f3d3f4]/90 backdrop-blur-xl border-t border-[#c141bc]/10 py-5">
        <div className="max-w-3xl mx-auto px-6">
          <button
            onClick={currentStep === totalSteps - 1 ? handleSubmit : nextStep}
            disabled={isSubmitting || (currentStep === totalSteps - 1 && !formData.consent)}
            className="w-full py-4 rounded-full bg-[#c141bc] text-white font-semibold text-lg shadow-lg shadow-[#c141bc]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#c141bc]/30 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Submitting...
              </span>
            ) : currentStep === totalSteps - 1 ? (
              "Submit Curation Request"
            ) : (
              "Continue"
            )}
          </button>
        </div>
      </footer>
    </main>
  );
}
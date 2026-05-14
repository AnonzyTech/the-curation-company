"use client";

import { useState, useEffect, useRef } from "react";

// Morphing Blob Background
function MorphingBlob({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute blur-3xl opacity-40 animate-blob ${className}`}
      style={{
        background: "linear-gradient(135deg, #9333EA 0%, #C084FC 50%, #F0ABFC 100%)",
      }}
    />
  );
}

// Floating Gift Icon
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
      <rect x="8" y="24" width="48" height="8" fill="#7C3AED" />
      <rect x="28" y="24" width="8" height="36" fill="#A855F7" />
      <path
        d="M32 24C32 24 24 16 24 12C24 8 28 4 32 8C36 4 40 8 40 12C40 16 32 24 32 24Z"
        fill="#9333EA"
      />
      <path
        d="M32 24C32 24 28 20 28 16C28 12 30 10 32 12C34 10 36 12 36 16C36 20 32 24 32 24Z"
        fill="#7C3AED"
      />
    </svg>
  );
}

// Premium Input Field
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
  const [focused, setFocused] = useState(false);

  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-[#581C87] tracking-wide">
        {label}
        {required && <span className="text-[#9333EA] ml-1">*</span>}
      </label>
      <div className={`relative rounded-xl transition-all duration-300 ${
        focused
          ? "shadow-lg shadow-[#9333EA]/20"
          : "shadow-sm"
      }`}>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className={`w-full bg-white/95 backdrop-blur-sm border-2 rounded-xl px-5 py-4 text-[#581C87] placeholder-purple-200/50 transition-all duration-300 focus:outline-none ${
            focused
              ? "border-[#9333EA] bg-white"
              : "border-[#E9D5FF] hover:border-[#C084FC]"
          }`}
          required={required}
        />
        {focused && (
          <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#9333EA] to-[#C084FC] opacity-20 -z-10 blur-sm" />
        )}
      </div>
    </div>
  );
}

// Premium Select Field
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
  const [focused, setFocused] = useState(false);

  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-[#581C87] tracking-wide">
        {label}
        {required && <span className="text-[#9333EA] ml-1">*</span>}
      </label>
      <div className={`relative rounded-xl transition-all duration-300 ${
        focused
          ? "shadow-lg shadow-[#9333EA]/20"
          : "shadow-sm"
      }`}>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`w-full bg-white/95 backdrop-blur-sm border-2 rounded-xl px-5 py-4 text-[#581C87] appearance-none cursor-pointer transition-all duration-300 focus:outline-none ${
            focused
              ? "border-[#9333EA] bg-white"
              : "border-[#E9D5FF] hover:border-[#C084FC]"
          } ${!value ? "text-purple-300" : ""}`}
          required={required}
        >
          <option value="">Select an option...</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${focused ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        {focused && (
          <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#9333EA] to-[#C084FC] opacity-20 -z-10 blur-sm" />
        )}
      </div>
    </div>
  );
}

// Premium Textarea
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
  const [focused, setFocused] = useState(false);

  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-[#581C87] tracking-wide">
        {label}
        {required && <span className="text-[#9333EA] ml-1">*</span>}
      </label>
      <div className={`relative rounded-xl transition-all duration-300 ${
        focused
          ? "shadow-lg shadow-[#9333EA]/20"
          : "shadow-sm"
      }`}>
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          rows={rows}
          className={`w-full bg-white/95 backdrop-blur-sm border-2 rounded-xl px-5 py-4 text-[#581C87] placeholder-purple-200/50 transition-all duration-300 focus:outline-none resize-none ${
            focused
              ? "border-[#9333EA] bg-white"
              : "border-[#E9D5FF] hover:border-[#C084FC]"
          }`}
          required={required}
        />
        {focused && (
          <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#9333EA] to-[#C084FC] opacity-20 -z-10 blur-sm" />
        )}
      </div>
      {hint && <p className="text-xs text-purple-400 italic">{hint}</p>}
    </div>
  );
}

// Radio Option Card
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
      className={`w-full p-5 rounded-xl border-2 text-left transition-all duration-500 cursor-pointer ${
        selected
          ? "border-[#9333EA] bg-gradient-to-br from-[#9333EA]/10 to-[#C084FC]/5 shadow-lg shadow-[#9333EA]/20"
          : "border-[#E9D5FF] bg-white/80 hover:border-[#C084FC] hover:shadow-md"
      }`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
            selected ? "border-[#9333EA] bg-[#9333EA]" : "border-[#C084FC] bg-white"
          }`}
        >
          {selected && (
            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
        <span className={`text-sm ${selected ? "text-[#581C87] font-medium" : "text-purple-400"}`}>
          {children}
        </span>
      </div>
    </button>
  );
}

// Value Card
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
      className={`relative p-5 rounded-2xl border-2 text-center transition-all duration-500 cursor-pointer overflow-hidden ${
        selected
          ? "border-[#9333EA] bg-[#9333EA] text-white shadow-xl shadow-[#9333EA]/30"
          : "border-[#E9D5FF] bg-white/90 hover:border-[#C084FC] hover:shadow-lg"
      }`}
    >
      {selected && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#9333EA] to-[#C084FC]" />
      )}
      <div className="relative z-10">
        <div className={`text-xl font-bold mb-0.5 ${selected ? "text-white" : "text-[#581C87]"}`}>
          INR {value}
        </div>
        <div className={`text-xs ${selected ? "text-white/80" : "text-purple-400"}`}>
          + {fee} fee
        </div>
      </div>
      {selected && (
        <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-white/30 flex items-center justify-center">
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
    </button>
  );
}

// Progress Bar
function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div className="w-full h-1.5 bg-[#E9D5FF] rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-[#9333EA] to-[#C084FC] rounded-full transition-all duration-700 ease-out"
        style={{ width: `${((current + 1) / total) * 100}%` }}
      />
    </div>
  );
}

// Animated Section
function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

// Main Multi-Step Form Component
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

export default function CurationForm() {
  const [step, setStep] = useState(0);
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 6;

  const updateField = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

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

  // Step 0: Elegant Landing
  if (step === 0) {
    return (
      <div className="min-h-screen bg-[#FAF5FF] relative overflow-hidden">
        {/* Background Blobs */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <MorphingBlob className="top-0 -left-20 w-[600px] h-[600px]" />
          <MorphingBlob className="top-1/4 right-0 w-[500px] h-[500px]" style={{ animationDelay: "2s" }} />
          <MorphingBlob className="bottom-0 left-1/3 w-[700px] h-[700px]" style={{ animationDelay: "4s" }} />
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(#9333EA 1px, transparent 1px), linear-gradient(90deg, #9333EA 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Navigation Bar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF5FF]/80 backdrop-blur-xl border-b border-[#E9D5FF]">
          <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#9333EA] to-[#C084FC] flex items-center justify-center shadow-lg shadow-[#9333EA]/20">
                <GiftIcon size={22} className="text-white" />
              </div>
              <span className="font-serif text-lg font-semibold text-[#581C87]">Curation.Co</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-purple-400">Currently accepting orders</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <AnimatedSection delay={0}>
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-[#E9D5FF] mb-10 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#9333EA] to-[#C084FC] animate-pulse" />
                <span className="text-sm font-medium text-[#581C87]">Bespoke Gift Curation</span>
              </div>
            </AnimatedSection>

            {/* Main Headline */}
            <AnimatedSection delay={100}>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-[#581C87] leading-[1.1] mb-8 tracking-tight">
                The Art of
                <br />
                <span className="bg-gradient-to-r from-[#9333EA] via-[#A855F7] to-[#C084FC] bg-clip-text text-transparent">
                  Thoughtful Gifting
                </span>
              </h1>
            </AnimatedSection>

            {/* Subheadline */}
            <AnimatedSection delay={200}>
              <p className="text-xl md:text-2xl text-purple-400 mb-8 max-w-2xl leading-relaxed font-light">
                Do you find picking the right gift a challenge? Don&apos;t have enough time to go shopping? We feel you and we are here to help.
              </p>
            </AnimatedSection>

            {/* Description */}
            <AnimatedSection delay={300}>
              <p className="text-lg text-purple-300 mb-12 max-w-xl leading-relaxed">
                Tell us about the person you&apos;re gifting for and we will curate a hamper that is personalized and thoughtful. You get to make a loved one happy and we get to spread joy through our hampers.
              </p>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection delay={400}>
              <button
                onClick={nextStep}
                className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#9333EA] via-[#A855F7] to-[#9333EA] bg-[length:200%_100%] text-white font-semibold text-lg shadow-xl shadow-[#9333EA]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#9333EA]/40 hover:scale-105 cursor-pointer overflow-hidden animate-gradientShift"
                style={{ backgroundPosition: '0% 50%', animation: 'gradientShift 3s ease infinite' }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <GiftIcon size={24} className="text-white" />
                  Curate a Gift Hamper
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </button>
            </AnimatedSection>

            {/* Trust Indicators */}
            <AnimatedSection delay={500}>
              <div className="flex flex-wrap items-center gap-8 mt-16 pt-8 border-t border-[#E9D5FF]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#9333EA]/10 to-[#C084FC]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#9333EA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#581C87]">15 Days</p>
                    <p className="text-xs text-purple-400">Curating Time</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#9333EA]/10 to-[#C084FC]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#9333EA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#581C87]">Personalized</p>
                    <p className="text-xs text-purple-400">Every Hamper</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#9333EA]/10 to-[#C084FC]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#9333EA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#581C87]">Made with Love</p>
                    <p className="text-xs text-purple-400">Every Detail</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Tagline */}
            <AnimatedSection delay={600}>
              <div className="mt-20 text-center">
                <p className="font-serif text-2xl md:text-3xl text-[#581C87] italic">
                  &ldquo;To be loved is to be known, share the love!&rdquo;
                </p>
              </div>
            </AnimatedSection>
          </div>
        </main>

        {/* Floating decorative elements */}
        <div className="fixed bottom-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#9333EA]/10 to-[#C084FC]/10 animate-float blur-2xl" style={{ animationDuration: '8s' }} />
        <div className="fixed top-40 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-[#C084FC]/10 to-[#F0ABFC]/10 animate-float blur-2xl" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>
    );
  }

  // Form Steps
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-10">
            {/* Step Header */}
            <div className="text-center space-y-3">
              <AnimatedSection>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#581C87]">
                  Tell us the basics
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <p className="text-lg text-purple-400">
                  Email, budget, timeline & delivery preferences
                </p>
              </AnimatedSection>
            </div>

            {/* Form Fields */}
            <div className="space-y-8">
              <AnimatedSection delay={150}>
                <PremiumInput
                  label="Email Address"
                  value={formData.email}
                  onChange={(val) => updateField("email", val)}
                  type="email"
                />
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#581C87] tracking-wide mb-3">
                      What is the value of the hamper you'd like to gift? <span className="text-[#9333EA]">*</span>
                    </label>
                    <p className="text-xs text-purple-400 mb-4">
                      Hamper value starts at INR 2,000. Additional 15% curator&apos;s fee applies.
                    </p>
                  </div>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                    {hamperValues.map((item) => (
                      <ValueCard
                        key={item.value}
                        value={item.value}
                        fee={item.fee}
                        selected={formData.hamperValue === item.value}
                        onClick={() => updateField("hamperValue", item.value)}
                      />
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={250}>
                <PremiumInput
                  label="When do you need the hamper?"
                  value={formData.date}
                  onChange={(val) => updateField("date", val)}
                  type="date"
                />
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="space-y-4">
                  <label className="block text-sm font-semibold text-[#581C87] tracking-wide">
                    Do you need us to deliver? <span className="text-[#9333EA]">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <OptionCard
                      selected={formData.delivery === "yes"}
                      onClick={() => updateField("delivery", "yes")}
                    >
                      Yes, deliver to recipient
                    </OptionCard>
                    <OptionCard
                      selected={formData.delivery === "pickup"}
                      onClick={() => updateField("delivery", "pickup")}
                    >
                      Self pickup
                    </OptionCard>
                  </div>
                </div>
              </AnimatedSection>

              {formData.delivery === "yes" && (
                <AnimatedSection delay={350}>
                  <PremiumTextarea
                    label="Complete postal address for delivery"
                    value={formData.address}
                    onChange={(val) => updateField("address", val)}
                    required={false}
                    rows={3}
                  />
                </AnimatedSection>
              )}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-10">
            <div className="text-center space-y-3">
              <AnimatedSection>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#581C87]">
                  Meet your recipient
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <p className="text-lg text-purple-400">
                  Tell us about the person we&apos;re curating for
                </p>
              </AnimatedSection>
            </div>

            <div className="space-y-8">
              <AnimatedSection delay={150}>
                <PremiumInput
                  label="What&apos;s their name?"
                  value={formData.recipientName}
                  onChange={(val) => updateField("recipientName", val)}
                  placeholder="The lucky recipient..."
                />
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <PremiumTextarea
                  label="Give us a brief description about them"
                  value={formData.recipientDescription}
                  onChange={(val) => updateField("recipientDescription", val)}
                  rows={4}
                  placeholder="What are they like? What makes them unique?"
                />
              </AnimatedSection>

              <AnimatedSection delay={250}>
                <PremiumSelect
                  label="What is the occasion?"
                  value={formData.occasion}
                  onChange={(val) => updateField("occasion", val)}
                  options={occasions}
                />
              </AnimatedSection>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-10">
            <div className="text-center space-y-3">
              <AnimatedSection>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#581C87]">
                  Their personality
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <p className="text-lg text-purple-400">
                  Quirk, preferences & what makes them tick
                </p>
              </AnimatedSection>
            </div>

            <div className="space-y-8">
              <AnimatedSection delay={150}>
                <PremiumTextarea
                  label="Tell us any particular quirks they have"
                  value={formData.quirks}
                  onChange={(val) => updateField("quirks", val)}
                  rows={4}
                  hint="e.g. sustainability lover, journaler, voracious reader, coffee person, cat person, plant parent, gen Z, vintage lover, foodie, crafter..."
                />
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="space-y-4">
                  <label className="block text-sm font-semibold text-[#581C87] tracking-wide">
                    What is their favorite colour? <span className="text-[#9333EA]">*</span>
                  </label>
                  <p className="text-xs text-purple-400">
                    Hampers are usually colour schemed based on this
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {colorOptions.map((color) => (
                      <OptionCard
                        key={color}
                        selected={formData.favoriteColor === color}
                        onClick={() => updateField("favoriteColor", color)}
                      >
                        {color}
                      </OptionCard>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-10">
            <div className="text-center space-y-3">
              <AnimatedSection>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#581C87]">
                  Interests & lifestyle
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <p className="text-lg text-purple-400">
                  What they love, what they need
                </p>
              </AnimatedSection>
            </div>

            <div className="space-y-8">
              <AnimatedSection delay={150}>
                <PremiumTextarea
                  label="Anything you definitely want us to add to the hamper?"
                  value={formData.addOns}
                  onChange={(val) => updateField("addOns", val)}
                  rows={3}
                  required={false}
                />
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <PremiumTextarea
                  label="Tell us about their hobbies and occupation"
                  value={formData.hobbies}
                  onChange={(val) => updateField("hobbies", val)}
                  rows={3}
                />
              </AnimatedSection>

              <AnimatedSection delay={250}>
                <PremiumTextarea
                  label="Any likes or dislikes we should know about?"
                  value={formData.likesDislikes}
                  onChange={(val) => updateField("likesDislikes", val)}
                  rows={3}
                  required={false}
                />
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <PremiumTextarea
                  label="Do they use accessories or jewelry?"
                  value={formData.accessories}
                  onChange={(val) => updateField("accessories", val)}
                  rows={3}
                  required={false}
                  hint="Style: Minimal / Dainty / Bold / Boho / Traditional | Colour: Gold / Silver / Rose gold / Oxidised / Beaded"
                />
              </AnimatedSection>

              <AnimatedSection delay={350}>
                <PremiumTextarea
                  label="Do they like savory or sweet?"
                  value={formData.savorySweet}
                  onChange={(val) => updateField("savorySweet", val)}
                  rows={3}
                  required={false}
                  hint="Cookies, chocolates, traditional snacks, healthy choices..."
                />
              </AnimatedSection>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-10">
            <div className="text-center space-y-3">
              <AnimatedSection>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#581C87]">
                  Final details
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <p className="text-lg text-purple-400">
                  Health considerations & any other info
                </p>
              </AnimatedSection>
            </div>

            <div className="space-y-8">
              <AnimatedSection delay={150}>
                <PremiumTextarea
                  label="Any allergies or dietary preferences?"
                  value={formData.allergies}
                  onChange={(val) => updateField("allergies", val)}
                  rows={3}
                  required={false}
                  hint="Gluten free, nuts, lactose intolerant, vegan..."
                />
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <PremiumTextarea
                  label="Any other information you&apos;d like to share?"
                  value={formData.additionalInfo}
                  onChange={(val) => updateField("additionalInfo", val)}
                  rows={4}
                  required={false}
                />
              </AnimatedSection>

              <AnimatedSection delay={250}>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#F3E8FF] to-[#FAF5FF] border-2 border-[#E9D5FF]">
                  <div className="flex items-start gap-4">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => updateField("consent", e.target.checked)}
                      className="mt-1 w-6 h-6 rounded border-2 border-[#9333EA] text-[#9333EA] focus:ring-[#9333EA] cursor-pointer accent-[#9333EA]"
                    />
                    <p className="text-sm text-purple-400 leading-relaxed">
                      By submitting this form, you consent to the collection and use of your information for curating a gift hamper. Your data will be kept confidential and will not be shared with third parties without your explicit consent.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Success Screen
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#FAF5FF] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <AnimatedSection animation="scaleIn">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#9333EA] to-[#C084FC] flex items-center justify-center shadow-2xl shadow-[#9333EA]/30">
              <GiftIcon size={64} className="text-white" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <h2 className="font-serif text-5xl font-bold text-[#581C87] mb-4">
              Thank You!
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <p className="text-xl text-purple-400 mb-6">
              We&apos;ve received your curation request
            </p>
          </AnimatedSection>

          <AnimatedSection delay={600}>
            <p className="text-purple-300 leading-relaxed">
              We&apos;ll start working our magic. You&apos;ll hear from us within 15 days at {formData.email || "your email"}.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={800}>
            <p className="font-serif text-2xl text-[#581C87] italic mt-10">
              &ldquo;To be loved is to be known.&rdquo;
            </p>
          </AnimatedSection>
        </div>
      </div>
    );
  }

  // Form Layout with Header
  return (
    <div className="min-h-screen bg-[#FAF5FF] relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <MorphingBlob className="top-0 -left-10 w-[500px] h-[500px]" />
        <MorphingBlob className="top-1/3 right-0 w-[400px] h-[400px]" style={{ animationDelay: "2s" }} />
        <MorphingBlob className="bottom-0 left-1/4 w-[600px] h-[600px]" style={{ animationDelay: "4s" }} />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF5FF]/90 backdrop-blur-xl border-b border-[#E9D5FF]">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={prevStep}
              className="flex items-center gap-2 text-purple-400 hover:text-[#9333EA] transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm">Back</span>
            </button>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#9333EA] to-[#C084FC] flex items-center justify-center">
                <GiftIcon size={18} className="text-white" />
              </div>
              <span className="font-serif text-sm font-semibold text-[#581C87]">Curation.Co</span>
            </div>

            <div className="text-sm text-purple-400">
              {step + 1} / {totalSteps}
            </div>
          </div>

          <ProgressBar current={step} total={totalSteps} />
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-36 pb-32 px-6">
        <div className="max-w-3xl mx-auto">{renderStep()}</div>
      </main>

      {/* Footer Navigation */}
      <footer className="fixed bottom-0 left-0 right-0 bg-[#FAF5FF]/90 backdrop-blur-xl border-t border-[#E9D5FF] py-5">
        <div className="max-w-3xl mx-auto px-6">
          <button
            onClick={step === totalSteps - 1 ? handleSubmit : nextStep}
            disabled={isSubmitting || (step === totalSteps - 1 && !formData.consent)}
            className="w-full py-4 rounded-full bg-gradient-to-r from-[#9333EA] to-[#A855F7] text-white font-semibold text-lg shadow-lg shadow-[#9333EA]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#9333EA]/30 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Submitting...
              </span>
            ) : step === totalSteps - 1 ? (
              "Submit Curation Request"
            ) : (
              "Continue"
            )}
          </button>
        </div>
      </footer>
    </div>
  );
}
"use client"

import { AuroraBackground } from "./components/ui/aurora-background";
import { useState } from "react";
import { Copy, Check, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Marquee from "react-fast-marquee";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [imageErrors, setImageErrors] = useState({});
  const fullContractAddress = "XXXpump"; // Replace with full address
  
  // Truncate contract address for display
  const truncateAddress = (address) => {
    return `${address.slice(0, 3)}...${address.slice(-4)}`;
  };
  
  const contractAddress = truncateAddress(fullContractAddress);

  const handleCopy = () => {
    navigator.clipboard.writeText(fullContractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const faqData = [
    {
      question: "What is Whiter?",
      answer: "Whiter is a next-generation perpetual trading platform that prioritizes fairness, security, and scalability. We provide a trading environment where every trade is treated with equal importance and transparency."
    },
    {
      question: "How does Whiter ensure fair trading?",
      answer: "Whiter uses provably fair infrastructure and transparent mechanisms to ensure all traders have equal access and opportunity. Our smart contracts are audited and our order matching is designed to prevent manipulation."
    },
    {
      question: "What are perpetuals?",
      answer: "Perpetual futures are derivative contracts that allow you to trade the price of an asset without an expiration date. Unlike traditional futures, perpetuals can be held indefinitely, making them ideal for both short-term and long-term trading strategies."
    },
    {
      question: "Is Whiter safe to use?",
      answer: "Security is our top priority. Whiter employs industry-leading security practices including smart contract audits, secure key management, and robust infrastructure to protect user funds and data."
    },
    {
      question: "How do I get started?",
      answer: "Simply click 'Launch App', connect your wallet, and you can start trading immediately. We support major wallets and provide comprehensive documentation to help you get started with perpetual trading."
    }
  ];

  const reviewCards = [
    {
      name: "Changpang Zhao",
      role: "Shadow Founder",
      initials: "CZ",
      pfp: "cz.webp",
      text: "Legally I have no part in this, but we need a white first perps platform. I use Whiter. If you are Chinese or American this is something we can unite with"
    },
    {
      name: "Eric Trump",
      role: "Strategic Advisor",
      initials: "ET",
      pfp: "eric.jpg",
      text: "A white first platform will benefit the entire space. that's why I joined Whiter as the next-gen perp platform. DJT approves"
    },
    {
      name: "Kyle Davies",
      role: "Professional Trader",
      initials: "KD",
      pfp: "kyle.jpg",
      text: "Fills so good you have to try to blow yourself up. Me and my team are solely trading on Whiter"
    },
    {
      name: "Marc Andreessen",
      role: "Top VC",
      initials: "MA",
      pfp: "marc.webp",
      text: "The security and transparency on Whiter give me peace of mind. I can focus on my strategies without worrying about platform risks."
    },
    {
      name: "Matt Huang",
      role: "Legendary VC",
      initials: "MH",
      pfp: "matt.jpeg",
      text: "Whiter's execution speed is unmatched. Every millisecond counts in trading, and this platform delivers consistently."
    },
    {
      name: "Sam Bankman-Fried",
      role: "Investment Icon",
      initials: "SBF",
      pfp: "sam.jpg",
      text: "As someone managing substantial positions, I appreciate Whiter's commitment to fair trading. I plan to attend the Whiter event in 2050 to show support"
    },
    {
      name: "Tom Brady",
      role: "Crypto Enthusiast",
      initials: "TB",
      pfp: "tom.jpg",
      text: "I have a lot of rings and am a famous white person. Buy crypto with Whiter today! Even my ex uses Whiter"
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  return (
    <AuroraBackground>
      <div className="h-full w-full relative">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-8 py-4 absolute top-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[85%]">
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <img src="Witer.png" alt="Whiter" className="h-10" />
          </div>

          {/* Middle Navigation - Fully Rounded */}
          <div className="hidden md:flex items-center gap-8 px-8 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-gray-700">
            <button 
              onClick={handleCopy}
              className="flex items-center gap-2 text-white font-medium group cursor-pointer"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4 group-hover:scale-110 transition-transform" />
              )}
              <span className="text-sm">{contractAddress}</span>
            </button>
            <button 
              onClick={() => document.getElementById('faq-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white hover:text-gray-300 transition-colors font-medium cursor-pointer"
            >
              FAQ
            </button>
            <a href="https://x.com/Whiter_exc" className="text-white hover:text-gray-300 transition-colors font-medium">
              X/Twitter
            </a>
          </div>

          {/* Launch App Button - Right */}
          <a href="https://whiter.app" className="flex-shrink-0 px-6 py-2.5 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-colors">
            Launch App
          </a>
        </nav>

        {/* Rest of your content */}
        <div className="grid justify-center mt-[30%] md:mt-[14%] xl:mt-[10%]">
          <div className="text-white text-3xl md:text-5xl mx-[15%] xl:mx-[25%] text-balance text-center">
            Trade perpetuals with unmatched fairness and safety.
          </div>
          <div className="text-gray-100 mx-[22%] xl:mx-[30%] text-balance text-center mt-4">
            Experience the next generation of trading with Whiter, where every trade is treated as first class. Be right, trade white.
          </div>
          <div className="flex justify-center">
            <a href="https://whiter.app" className="whitespace-nowrap w-min h-min mt-4 px-7 py-3 rounded-full bg-white font-bold">
              Launch App
            </a>
          </div>
          <div className="flex justify-center my-8">
            <img src="hero.png" className="w-[85%] md:w-[65%] border-2 border-gray-700 p-1 rounded-xl" alt="Hero" />
          </div>
          <div className="text-gray-100 mx-[5%] md:mx-[30%] text-balance text-center my-4 font-bold text-xl">
            Our mission is to revolutionize trading by building provably fair, secure, and scalable infrastructure for finance.
          </div>
          
          {/* FAQ Section */}
          <div id="faq-section" className="max-w-3xl mx-auto w-full px-8 my-8">
            <h2 className="text-white text-4xl font-bold text-center mb-8">
              FAQs
            </h2>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-lg border border-gray-700 overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <span className="text-white font-semibold text-lg">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-400 cursor-pointer" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-4 text-gray-300">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Trusted By Section */}
          <div className="w-full my-12 overflow-hidden">
            <h2 className="text-white text-4xl font-bold text-center mb-8">
              Trusted By
            </h2>
            <div className="w-full overflow-hidden">
              <Marquee gradient={false} speed={40}>
                {reviewCards.map((review, index) => (
                  <div 
                    key={index}
                    className="mx-4 w-80 h-52 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-700 p-6 flex-shrink-0 flex flex-col"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                          <img 
                            src={review.pfp} 
                            alt={review.name}
                            className="w-full h-full object-cover"
                            onError={() => handleImageError(index)}
                          />
                      </div>
                      <div>
                        <div className="text-white font-semibold">{review.name}</div>
                        <div className="text-gray-400 text-sm">{review.role}</div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed flex-1 overflow-hidden">
                      {review.text}
                    </p>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img src="W0.png" className="w-[20%]" alt="W Logo" />
          </div>
          <div className="text-gray-400 text-balance text-center mt-4 mb-2 font-bold text-[10px]">
            Copyright © Whiter 2025
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}
import FAQItem from "../Components/FAQItem.jsx";

import ServiceCard from "../Components/ServiceCard.jsx";

// import { image132, image133, image135} from "../assets/images";

import image131 from "../assets/images/image131.svg";

import image132 from "../assets/images/image132.svg";
import image133 from "../assets/images/image133.svg";
import image135 from "../assets/images/image135.svg";
import OIP1 from "../assets/images/OIP1.svg";

import {
  Home,
  User,
  Briefcase,
  Car,
  Building2,
  LayoutDashboard,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Services() {
  const services = [
    {
      title: "Home Loan",
      description:
        "Get quick approval and flexible home loan options for your dream house",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
      icon: Home,
    },
    {
      title: "Personal Loan",
      description:
        "Quick personal loans for your needs with simple process and fast approval",
      image: image131,
      icon: User,
    },
    {
      title: "Business Loan",
      description:
        "Flexible business loans to help you grow, expand, and manage operations smoothly",
      image: image132,
      icon: Briefcase,
    },
    {
      title: "Vehicle Loan",
      description:
        "Drive your dream vehicle with easy loans and flexible repayment options",
      image: image133,
      icon: Car,
    },
    {
      title: "Govt. Scheme Loan",
      description:
        "Access government-backed loan schemes with benefits and lower interest support",
      image: image135,
      icon: Building2,
    },
    {
      title: "MSME Loan",
      description:
        "Empowering small businesses with MSME loans for growth, expansion, and stability",
      image: OIP1,
      icon: LayoutDashboard,
    },
  ];

  const faqs = [
    {
      question: "What does Total Loans do?",
      answer:
        "Total Loans acts as a bridge between borrowers and trusted financial institutions. We help you find, compare, and apply for the best loan products suited to your specific needs, ensuring a transparent and efficient process.",
    },
    {
      question: "Does Total Loans provide loans directly?",
      answer:
        "No, we are a loan aggregation and advisory platform. We partner with leading banks and NBFCs to provide you with a wide range of loan options. We facilitate the application process but the final lending decision rests with the partner institution.",
    },
    {
      question: "What types of loans can I apply for through Total Loans?",
      answer:
        "You can apply for a variety of loans including Home Loans, Personal Loans, Business Loans, Vehicle Loans, MSME Loans, and various Government Scheme Loans.",
    },
    {
      question: "How long does the loan approval process take?",
      answer:
        "The approval time varies depending on the type of loan and the partner bank. Generally, personal loans can be approved within 24-48 hours, while home and business loans may take 5-10 working days after document submission.",
    },
    {
      question: "What documents are required to apply for a loan?",
      answer:
        "Commonly required documents include Identity Proof (Aadhar, PAN), Address Proof, Income Proof (Salary slips, ITR, Bank statements), and specific documents related to the loan type (e.g., property papers for home loans).",
    },
    {
      question: "Does applying through Total Loans affect my credit score?",
      answer:
        "Checking your eligibility on our platform typically involves a 'soft pull' which does not affect your credit score. However, when you formally apply to a bank, they will perform a 'hard pull' which might have a minor, temporary impact.",
    },
    {
      question: "Are there any service charges for using Total Loans?",
      answer:
        "Our basic advisory and comparison services are free for customers. We may receive a referral fee from our partner banks, ensuring you get the best service without additional costs.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero Section */}
      <header className="py-20 px-6 text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-semibold text-slate-900 mb-6 tracking-tight"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl max-w-[content] text-slate-600 leading-relaxed"
        >
          Explore a wide range of loan solutions designed to support your
          personal, business, and financial goals.
        </motion.p>
      </header>

      {/* Services Grid Section */}
      {/* <section className="bg-[#E6031833] py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto pl-10"> */}

      <section className="bg-[#E6031833] py-24 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-16">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-[#FFF5F8]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-6xl font-extrabold text-center text-[#1E293B] mb-20 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col items-center">
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}

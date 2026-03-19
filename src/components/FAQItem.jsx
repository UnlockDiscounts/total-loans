import {useState, useEffect} from "react";
import { 
  ChevronDown
} from 'lucide-react';

import { motion, AnimatePresence } from 'motion/react';



const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 w-full">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-6 bg-white transition-all text-left shadow-sm hover:shadow-md ${isOpen ? 'rounded-t-xl' : 'rounded-xl'}`}
      >
        <span className="text-lg font-semibold text-slate-800">{question}</span>
        <ChevronDown className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-white rounded-b-xl shadow-sm"
          >
            <div className="px-6 pb-6 text-slate-600 leading-relaxed">
              <div className="pt-4 border-t border-gray-50">
                {answer}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

  export default FAQItem;
import { 
  ChevronRight, 
  
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';



const ServiceCard = ({ title, description, image, icon: Icon }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative h-full"
    >
      {/* Red Border Offset Effect */}
      <div className="absolute inset-0 border-2 border-rose-600 rounded-[2.5rem] translate-x-[-8px] translate-y-[8px]" />
      
      {/* Main White Card */}
      <div className="relative bg-white rounded-[2.5rem] p-10 shadow-xl h-full flex flex-col z-10">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
          <p className="text-slate-500 text-sm leading-relaxed max-w-[260px]">
            {description}
          </p>
        </div>
        
        {/* Overlapping Image Container */}
        <div className="relative mt-4 mb-10 -ml-16 mr-4">
          <div className="rounded-2xl overflow-hidden shadow-xl h-40 w-full">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Diamond Icon Badge */}
          <div className="absolute -right-6 top-1/2 -translate-y-1/2">
            <div className="bg-gray-200 p-4 shadow-2xl pl-4 rotate-45 border border-gray-50">
              <div className="-rotate-45 flex items-center justify-center">
                <Icon className="w-7 h-7 text-rose-600" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-auto">
          <button className="flex items-center text-rose-600 font-bold hover:gap-2 transition-all group text-lg">
            Contact Us <ChevronRight className="w-5 h-5 ml-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
export default ServiceCard;
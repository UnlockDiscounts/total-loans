import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';



const ServiceCard = ({ title, description, image, icon: Icon }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full flex justify-center"
    >
      <div className="relative h-full w-full max-w-[380px] px-2 sm:px-0">
        <div className="absolute inset-0 translate-x-[-4px] translate-y-[4px] rounded-[2rem] border-2 border-rose-600 sm:translate-x-[-6px] sm:translate-y-[6px] md:translate-x-[-8px] md:translate-y-[8px] md:rounded-[2.5rem]" />

        <div className="relative z-10 flex h-full flex-col rounded-[2rem] bg-white px-5 py-6 shadow-xl sm:px-6 sm:py-8 md:rounded-[2.5rem] md:p-10">
          <div className="mb-5 md:mb-6">
            <h3 className="mb-2 text-xl font-bold text-slate-900 sm:text-2xl">{title}</h3>
            <p className="max-w-full text-sm leading-relaxed text-slate-500 sm:max-w-[260px]">
              {description}
            </p>
          </div>

          <div className="relative mb-8 mt-2 sm:mt-4 md:mb-10 md:-ml-10 md:mr-2 lg:-ml-16 lg:mr-4">
            <div className="h-44 w-full overflow-hidden rounded-2xl shadow-xl md:h-40">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="absolute -right-2 top-1/2 -translate-y-1/2 sm:-right-4 md:-right-6">
              <div className="rotate-45 border border-gray-50 bg-gray-200 p-3 shadow-2xl sm:p-3.5 md:p-4">
                <div className="-rotate-45 flex items-center justify-flex-end">
                  <Icon className="h-5 w-5 text-rose-600 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto">
            <button className="group flex items-center text-base font-bold text-rose-600 transition-all hover:gap-2 sm:text-lg">
              Contact Us <ChevronRight className="ml-1 h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default ServiceCard;

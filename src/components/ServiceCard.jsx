import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";

const ServiceCard = ({ title, description, image, icon: Icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative h-full w-full"
    >
      {/* Red Border Offset */}
      <div className="absolute inset-0 rounded-[2.5rem] border-2 border-rose-600 translate-x-[-6px] translate-y-[6px]" />

      {/* Card */}
      <div className="relative z-10 flex h-full flex-col rounded-[2.5rem] bg-white p-6 md:p-10 shadow-xl">

        {/* Text */}
        <div className="mb-4 md:mb-6">
          <h3 className="mb-2 text-xl md:text-2xl font-bold text-slate-900">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-slate-500 md:max-w-[260px]">
            {description}
          </p>
        </div>

        {/* Image */}
        <div className="relative mt-3 mb-8" style={{ marginLeft: "-12%" }}>
          <div className="h-36 md:h-40 w-full overflow-hidden rounded-2xl shadow-xl">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Icon */}
          <div className="absolute -right-5 md:-right-6 top-1/2 -translate-y-1/2">
            <div className="rotate-45 border border-gray-50 bg-gray-200 p-3 md:p-4 shadow-2xl">
              <div className="-rotate-45 flex items-center justify-center">
                <Icon className="h-6 w-6 md:h-7 md:w-7 text-rose-600" />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-auto">
          <button className="flex items-center text-base md:text-lg font-bold text-rose-600 transition-all hover:gap-2">
            Contact Us <ChevronRight className="ml-1 w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
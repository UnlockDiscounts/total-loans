function Metrics() {
  return (
    <section className="block lg:hidden px-4 mt-10">
      {/* Title */}
      <h2 className="text-[#263238] text-xl font-bold text-center mb-6 tracking-tight">
        A Record Built on Experience
      </h2>

      {/* Metrics Card */}
      <div
        className="w-full h-20.5 bg-white rounded-lg flex items-center justify-between px-14"
        style={{ boxShadow: "0px 4px 15px 0px rgba(230, 3, 24, 0.1)" }}
      >
        {/* Metric 1 */}
        <div className="flex flex-col items-center text-center">
          <span className="text-[#E60318] text-base font-semibold leading-none mb-1.5">
            500+
          </span>
          <span className="text-[#4C4C4C] text-[10px] font-normal leading-[1.2] max-w-[55px]">
            Happy Customers
          </span>
        </div>

        {/* Metric 2 */}
        <div className="flex flex-col items-center text-center">
          <span className="text-[#E60318] text-base font-semibold leading-none mb-1.5">
            5+
          </span>
          <span className="text-[#4C4C4C] text-[10px] font-normal leading-[1.2] max-w-[65px]">
            Years of Experience
          </span>
        </div>

        {/* Metric 3 */}
        <div className="flex flex-col items-center text-center">
          <span className="text-[#E60318] text-base font-semibold leading-none mb-1.5">
            98%
          </span>
          <span className="text-[#4C4C4C] text-[10px] font-normal leading-[1.2] max-w-[55px]">
            Success Rate
          </span>
        </div>
      </div>
    </section>
  );
}

export default Metrics;

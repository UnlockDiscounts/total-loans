import { useState } from "react";

const EmiCalculator = () => {
  // --- TOGGLE MODE ---
  const isStatic = true; // Set to 'false' to enable live calculations
  // -------------------

  // 1. Dynamic State & Logic
  const [amount, setAmount] = useState(500000);
  const [tenure, setTenure] = useState(5);
  const [rate, setRate] = useState(8.1);

  const calculateEMI = () => {
    const p = amount;
    const r = rate / 12 / 100;
    const n = tenure * 12;
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi) || 0;
  };

  const emiVal = calculateEMI();
  const totalPaymentVal = emiVal * tenure * 12;
  const totalInterestVal = totalPaymentVal - amount;

  // 2. Conditional Values
  const displayAmount = isStatic ? "5,00,000" : amount.toLocaleString("en-IN");
  const displayEMI = isStatic ? "10,281" : emiVal.toLocaleString("en-IN");
  const displayTenure = isStatic ? "5" : tenure;
  const displayRate = isStatic ? "8.1" : rate;
  const displayTotalInterest = isStatic
    ? "1,16,860"
    : totalInterestVal.toLocaleString("en-IN");
  const displayTotalPayment = isStatic
    ? "6,16,860"
    : totalPaymentVal.toLocaleString("en-IN");

  return (
    <section className="w-full bg-white px-4 lg:px-0 lg:mt-[65px]">
      <div className="lg:max-w-[1195px] lg:h-[867px] mx-auto flex flex-col">
        {/* Header */}
        <div className="flex justify-center">
          <h2 className="text-[#1E2A38] text-[50px] font-extrabold leading-none lg:w-[600px] lg:h-[36px] flex items-center justify-center">
            EMI Calculator
          </h2>
        </div>

        {/* Calculator Card */}
        <div className="bg-[#E6031833] rounded-[20px] lg:w-[1203px] lg:h-[749px] lg:mt-[82px] lg:-ml-[4px] relative">
          {/* Vertical Divider */}
          <div className="hidden lg:block lg:absolute lg:top-0 lg:left-0 lg:w-[1px] lg:h-[669px] lg:mt-[40px] lg:ml-[602px] bg-[#263238] z-10"></div>

          {/* Left Side: Inputs */}
          <div className="lg:w-[602px] lg:h-full relative overflow-visible">
            {/* --- LOAN AMOUNT ROW --- */}
            {/* Label */}
            <label className="absolute top-0 left-0 mt-[168px] ml-[80px] w-[152px] h-[30px] flex items-center text-[#1E2A38] font-bold text-[22px] leading-none z-20">
              Loan Amount
            </label>

            {/* Value Box */}
            <div className="lg:absolute lg:top-0 lg:left-0 lg:mt-[162px] lg:ml-[347px] lg:w-[167px] lg:h-[42px] lg:rounded-lg bg-white z-20 overflow-hidden">
              <span className="lg:absolute lg:top-0 lg:left-0 lg:mt-[4px] lg:ml-[19px] lg:w-[103px] lg:h-[33px] flex items-center text-[#686868] font-medium text-[24px] leading-none">
                {displayAmount}
              </span>
            </div>

            {/* Slider Container */}
            <div className="lg:absolute lg:top-0 lg:left-0 lg:mt-[227px] lg:ml-[80px] lg:w-[453px] lg:h-[6px] group">
              <div className="absolute inset-0 bg-[#7A7A7A] rounded-full"></div>
              <div
                className="absolute inset-y-0 left-0 bg-[#C20D1F] rounded-full"
                style={{
                  width: isStatic
                    ? "126px"
                    : `${((amount - 100000) / (5000000 - 100000)) * 100}%`,
                }}
              ></div>
              <div
                className="absolute top-0 -mt-[5px] flex items-center justify-center lg:w-[16px] lg:h-[16px] bg-[#D9D9D9] rounded-full z-30"
                style={{
                  left: isStatic
                    ? "120px"
                    : `calc(${((amount - 100000) / (5000000 - 100000)) * 100}% - 8px)`,
                }}
              >
                <div className="lg:w-[8px] lg:h-[8px] bg-[#C20D1F] rounded-full"></div>
              </div>
              <input
                type="range"
                min="100000"
                max="5000000"
                step="50000"
                value={amount}
                onChange={(e) => !isStatic && setAmount(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-40"
              />
            </div>

            {/* --- TENURE ROW --- */}
            {/* Label */}
            <label className="absolute top-0 left-0 mt-[295px] ml-[80px] w-[162px] h-[30px] flex items-center text-[#1E2A38] font-bold text-[22px] leading-none z-20">
              Tenure (Years)
            </label>

            {/* Value Box */}
            <div className="lg:absolute lg:top-0 lg:left-0 lg:mt-[289px] lg:ml-[347px] lg:w-[167px] lg:h-[42px] lg:rounded-lg bg-white z-20 overflow-hidden">
              <span className="lg:absolute lg:top-0 lg:left-0 lg:mt-[4px] lg:ml-[20px] min-w-[14px] lg:h-[33px] flex items-center text-[#686868] font-medium text-[24px] leading-none">
                {displayTenure}
              </span>
            </div>

            {/* Tenure Slider Container */}
            <div className="lg:absolute lg:top-0 lg:left-0 lg:mt-[354px] lg:ml-[80px] lg:w-[453px] lg:h-[6px] group">
              {/* Background Track */}
              <div className="absolute inset-0 bg-[#7A7A7A] rounded-full"></div>

              {/* Progress Track */}
              <div
                className="absolute inset-y-0 left-0 bg-[#C20D1F] rounded-full"
                style={{
                  width: isStatic
                    ? `${(4 / 29) * 100}%`
                    : `${((tenure - 1) / (30 - 1)) * 100}%`,
                }}
              ></div>

              {/* Precise Marker (Circle-in-Circle) */}
              <div
                className="absolute top-0 -mt-[5px] flex items-center justify-center lg:w-[16px] lg:h-[16px] bg-[#D9D9D9] rounded-full z-30"
                style={{
                  left: isStatic
                    ? `calc(${(4 / 29) * 100}% - 8px)`
                    : `calc(${((tenure - 1) / (30 - 1)) * 100}% - 8px)`,
                }}
              >
                <div className="lg:w-[8px] lg:h-[8px] bg-[#C20D1F] rounded-full"></div>
              </div>

              {/* Hidden Functional Slider */}
              <input
                type="range"
                min="1"
                max="30"
                value={tenure}
                onChange={(e) => !isStatic && setTenure(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-40"
              />
            </div>

            {/* Interest Rate (%) Label */}
            <label className="absolute top-0 left-0 mt-[422px] ml-[80px] w-[192px] h-[30px] flex items-center text-[#1E2A38] font-bold text-[22px] leading-none z-20">
              Interest Rate (%)
            </label>

            {/* Interest Rate Value Box */}
            <div className="lg:absolute lg:top-0 lg:left-0 lg:mt-[416px] lg:ml-[347px] lg:w-[167px] lg:h-[42px] lg:rounded-lg bg-white z-20 overflow-hidden">
              <span className="lg:absolute lg:top-0 lg:left-0 lg:mt-[4px] lg:ml-[18px] min-w-[28px] lg:h-[33px] flex items-center text-[#686868] font-medium text-[24px] leading-none">
                {displayRate}
              </span>
            </div>

            {/* Interest Rate Slider Container */}
            <div className="lg:absolute lg:top-0 lg:left-0 lg:mt-[481px] lg:ml-[80px] lg:w-[453px] lg:h-[6px] group">
              {/* Background Track */}
              <div className="absolute inset-0 bg-[#7A7A7A] rounded-full"></div>

              {/* Progress Track */}
              <div
                className="absolute inset-y-0 left-0 bg-[#C20D1F] rounded-full"
                style={{
                  width: isStatic
                    ? `${(7.1 / 19) * 100}%`
                    : `${((rate - 1) / (20 - 1)) * 100}%`,
                }}
              ></div>

              {/* Precise Marker (Circle-in-Circle) */}
              <div
                className="absolute top-0 -mt-[5px] flex items-center justify-center lg:w-[16px] lg:h-[16px] bg-[#D9D9D9] rounded-full z-30"
                style={{
                  left: isStatic
                    ? `calc(${(7.1 / 19) * 100}% - 8px)`
                    : `calc(${((rate - 1) / (20 - 1)) * 100}% - 8px)`,
                }}
              >
                <div className="lg:w-[8px] lg:h-[8px] bg-[#C20D1F] rounded-full"></div>
              </div>

              {/* Hidden Functional Slider */}
              <input
                type="range"
                min="1"
                max="20"
                step="0.1"
                value={rate}
                onChange={(e) => !isStatic && setRate(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-40"
              />
            </div>

            {/* Calculate EMI Button */}
            <button className="lg:absolute lg:top-0 lg:left-0 lg:mt-[583px] lg:ml-[64px] lg:w-[453px] lg:h-[60px] bg-[#E60318] text-white rounded-lg shadow-[0_4px_20px_0_rgba(0,0,0,0.1)] pt-[16px] pr-[41px] pb-[17px] pl-[43px] flex items-center justify-center gap-[10px] hover:bg-white hover:text-[#E60318] transition-all duration-300 focus:outline-none z-20">
              <span className="lg:w-[200px] lg:h-[27px] flex items-center justify-center font-semibold text-[20px] leading-none text-center">
                Calculate EMI
              </span>
            </button>
          </div>

          {/* Right Side: Results */}
          <div className="lg:w-[601px] lg:h-full lg:absolute lg:top-0 lg:left-[603px]">
            {/* Results Label */}
            <h3 className="lg:absolute lg:top-0 lg:left-0 lg:mt-[75px] lg:ml-[170px] lg:w-[300px] lg:h-[38px] flex items-center justify-center text-[#1E2A38] font-extrabold text-[28px] leading-none text-center z-20">
              Your Monthly EMI is
            </h3>

            {/* EMI Value */}
            <div className="lg:absolute lg:top-0 lg:left-0 lg:mt-[117px] lg:w-full flex justify-center text-[#E60318] font-extrabold text-[42px] leading-none z-20 whitespace-nowrap">
              ₹ {displayEMI}
            </div>

            {/* Results Subtext */}
            <p className="lg:absolute lg:top-0 lg:left-0 lg:mt-[177px] lg:w-full flex justify-center text-[#7A7A7A] font-bold text-[18px] leading-none text-center z-20 whitespace-nowrap">
              {displayRate}% Interest rate per annum
            </p>

            {/* Donut Chart */}
            <div className="lg:absolute lg:top-0 lg:left-0 lg:mt-[222px] lg:ml-[204px] lg:w-[201px] lg:h-[200px] flex items-center justify-center z-10">
              <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
                {/* Principal Segment */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  stroke="#1E2A38"
                  strokeWidth="32"
                  fill="transparent"
                />
                {/* Interest Segment */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  stroke="#E60318"
                  strokeWidth="32"
                  fill="transparent"
                  strokeDasharray="502.6"
                  strokeDashoffset={
                    isStatic
                      ? 502.6 * (1 - 116860 / 616860)
                      : 502.6 * (1 - totalInterestVal / totalPaymentVal)
                  }
                />
              </svg>
            </div>

            {/* Legend: Loan Amount */}
            <div className="lg:absolute lg:top-0 lg:left-0 lg:mt-[456px] lg:ml-[98px] lg:w-[20px] lg:h-[20px] rounded-full bg-[#AF1021] z-20"></div>
            <div className="lg:absolute lg:top-0 lg:left-0 lg:mt-[451px] lg:ml-[129px] flex items-center text-[#C20D1F] font-bold text-[18px] leading-none z-20 whitespace-nowrap">
              Loan Amount
            </div>
            <div className="lg:absolute lg:top-0 lg:left-0 lg:mt-[481px] lg:ml-[129px] flex items-center text-[#1E2A38] font-extrabold text-[18px] leading-none z-20 whitespace-nowrap">
              ₹ {displayAmount}
            </div>

            {/* Legend: Total Interest */}
            <div className="lg:absolute lg:top-0 lg:left-0 lg:mt-[456px] lg:ml-[336px] lg:w-[20px] lg:h-[20px] rounded-full bg-[#7E7E7E] z-20"></div>
            <div className="lg:absolute lg:top-0 lg:left-0 lg:mt-[451px] lg:ml-[360px] flex items-center text-[#7A7A7A] font-bold text-[18px] leading-none z-20 whitespace-nowrap">
              Total Interest
            </div>
            <div className="lg:absolute lg:top-0 lg:left-0 lg:mt-[481px] lg:ml-[360px] flex items-center text-[#1E2A38] font-extrabold text-[18px] leading-none z-20 whitespace-nowrap">
              ₹ {displayTotalInterest}
            </div>

            {/* Summary: Total Interest */}
            <div className="lg:absolute lg:top-0 lg:left-0 lg:mt-[566px] lg:ml-[98px] flex items-center text-[#263238] font-bold text-[24px] leading-none z-20 whitespace-nowrap">
              Total interest
            </div>
            <div className="lg:absolute lg:top-0 lg:left-0 lg:mt-[600px] lg:ml-[98px] flex items-center text-[#E60318] font-extrabold text-[32px] leading-none z-20 whitespace-nowrap">
              ₹ {displayTotalInterest}
            </div>

            {/* Summary: Total Payment */}
            <div className="lg:absolute lg:top-0 lg:left-0 lg:mt-[566px] lg:ml-[336px] flex items-center text-[#263238] font-bold text-[24px] leading-none z-20 whitespace-nowrap">
              Total payment
            </div>
            <div className="lg:absolute lg:top-0 lg:left-0 lg:mt-[600px] lg:ml-[336px] flex items-center text-[#E60318] font-extrabold text-[32px] leading-none z-20 whitespace-nowrap">
              ₹ {displayTotalPayment}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmiCalculator;

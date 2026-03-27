import { useState } from "react";

const EmiCalculator = () => {
  // 1. Dynamic State (Inputs)
  const [amount, setAmount] = useState(500000);
  const [tenure, setTenure] = useState(5);
  const [rate, setRate] = useState(8.1);
  const [focusedField, setFocusedField] = useState(null);
  const [inputValue, setInputValue] = useState("");

  // 2. Calculation-Specific State
  const [resultAmount, setResultAmount] = useState(500000);
  const [resultTenure, setResultTenure] = useState(5);
  const [resultRate, setResultRate] = useState(8.1);

  const calculateEMIValue = (p, r_annual, t) => {
    const r = r_annual / 12 / 100;
    const n = t * 12;
    if (r === 0) return Math.round(p / n);
    const result = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(result) || 0;
  };

  const handleCalculate = () => {
    setResultAmount(amount);
    setResultTenure(tenure);
    setResultRate(rate);
  };

  const emiVal = calculateEMIValue(resultAmount, resultRate, resultTenure);
  const totalPaymentVal = emiVal * resultTenure * 12;
  const totalInterestVal = totalPaymentVal - resultAmount;

  // 3. Display Values
  const displayAmount = amount.toLocaleString("en-IN");
  const displayTenure = tenure;
  const displayRate = rate;

  const displayResultAmount = resultAmount.toLocaleString("en-IN");
  const displayEMI = emiVal.toLocaleString("en-IN");
  const displayResultTotalInterest = totalInterestVal.toLocaleString("en-IN");
  const displayResultTotalPayment = totalPaymentVal.toLocaleString("en-IN");

  return (
    <section className="w-full bg-white px-4 lg:px-12 lg:mt-16">
      <div className="lg:max-w-[1195px] mx-auto flex flex-col">
        {/* DESKTOP EMI CALCULATOR */}
        <div className="hidden lg:block">
          {/* Header */}
          <div className="flex justify-center">
            <h2 className="text-[#1E2A38] text-[50px] font-extrabold leading-none">
              EMI Calculator
            </h2>
          </div>

          {/* Calculator Card */}
          <div className="bg-[#E6031833] rounded-2xl w-full min-h-[749px] mt-20 mx-auto relative grid grid-cols-2 gap-0 overflow-hidden">
            {/* Vertical Divider */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[669px] bg-[#263238] z-10"></div>

            {/* Left Side: Inputs */}
            <div className="flex flex-col pt-40 px-20 gap-16 relative">
              {[
                {
                  label: "Loan Amount",
                  val: displayAmount,
                  state: amount,
                  setter: setAmount,
                  min: 100000,
                  max: 50000000,
                  step: 50000,
                },
                {
                  label: "Tenure (Years)",
                  val: displayTenure,
                  state: tenure,
                  setter: setTenure,
                  min: 1,
                  max: 30,
                  step: 1,
                },
                {
                  label: "Interest Rate (%)",
                  val: displayRate,
                  state: rate,
                  setter: setRate,
                  min: 1,
                  max: 20,
                  step: 0.1,
                },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <label className="text-[#1E2A38] font-bold text-[22px] leading-none">
                      {item.label}
                    </label>
                    <div className="w-[167px] h-[42px] rounded-lg bg-white flex items-center justify-center shadow-sm">
                      <input
                        type="text"
                        value={
                          focusedField === item.label ? inputValue : item.val
                        }
                        onFocus={() => {
                          setFocusedField(item.label);
                          setInputValue(String(item.state));
                        }}
                        onBlur={() => {
                          setFocusedField(null);
                          // Snap to step and clamp to range
                          const num = Number(inputValue);
                          const snapped =
                            Math.round(num / item.step) * item.step;
                          const clamped = Math.max(
                            item.min,
                            Math.min(item.max, snapped),
                          );
                          item.setter(Number(clamped.toFixed(2)));
                        }}
                        onChange={(e) => {
                          const val = e.target.value.replace(/[^0-9.]/g, "");
                          setInputValue(val);
                          if (val !== "" && val !== ".") {
                            item.setter(Number(val));
                          }
                        }}
                        className="w-full bg-transparent text-[#686868] font-medium text-2xl leading-none text-center outline-none"
                      />
                    </div>
                  </div>
                  <div className="relative w-full h-1.5 mt-2">
                    <div className="absolute inset-0 bg-[#7A7A7A] rounded-full"></div>
                    {/* Visual Clamping for Slider UI */}
                    {(() => {
                      const visualVal = Math.max(
                        item.min,
                        Math.min(item.max, item.state),
                      );
                      const percentage =
                        ((visualVal - item.min) / (item.max - item.min)) * 100;
                      return (
                        <>
                          <div
                            className="absolute inset-y-0 left-0 bg-[#C20D1F] rounded-full transition-all duration-150"
                            style={{ width: `${percentage}%` }}
                          ></div>
                          <div
                            className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center w-4 h-4 bg-[#D9D9D9] rounded-full z-30 transition-all duration-150"
                            style={{ left: `calc(${percentage}% - 8px)` }}
                          >
                            <div className="w-2 h-2 bg-[#C20D1F] rounded-full"></div>
                          </div>
                        </>
                      );
                    })()}
                    <input
                      type="range"
                      min={item.min}
                      max={item.max}
                      step={item.step}
                      value={item.state}
                      onChange={(e) => item.setter(Number(e.target.value))}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-40"
                    />
                  </div>
                </div>
              ))}
              <div className="pt-[24px]">
                <button
                  onClick={handleCalculate}
                  className="w-full h-[60px] bg-[#E60318] text-white rounded-lg shadow-lg flex items-center justify-center gap-2.5 hover:bg-white hover:text-[#E60318] transition-all duration-300 active:scale-95"
                >
                  <span className="font-semibold text-xl leading-none">
                    Calculate EMI
                  </span>
                </button>
              </div>
            </div>

            {/* Right Side: Results */}
            <div className="flex flex-col items-center pt-[75px] px-10">
              <h3 className="text-[#1E2A38] font-extrabold text-[28px] leading-none text-center">
                Your Monthly EMI is
              </h3>
              <div className="text-[#E60318] font-extrabold text-[42px] leading-none mt-[42px]">
                ₹ {displayEMI}
              </div>
              <p className="text-[#7A7A7A] font-bold text-lg leading-none mt-[18px] text-center">
                {resultRate}% Interest rate per annum
              </p>
              <div className="relative w-50 h-50 mt-4 flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    stroke="#1E2A38"
                    strokeWidth="32"
                    fill="transparent"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    stroke="#E60318"
                    strokeWidth="32"
                    fill="transparent"
                    strokeDasharray="502.6"
                    strokeDashoffset={
                      502.6 * (1 - totalInterestVal / totalPaymentVal)
                    }
                  />
                </svg>
              </div>
              <div className="grid grid-cols-2 gap-[40px] mt-4 w-full max-w-[400px]">
                {[
                  {
                    label: "Loan Amount",
                    val: displayResultAmount,
                    color: "#AF1021",
                    text: "#C20D1F",
                  },
                  {
                    label: "Total Interest",
                    val: displayResultTotalInterest,
                    color: "#7E7E7E",
                    text: "#7A7A7A",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-start px-2">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-5 h-5 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span
                        className="font-bold text-lg whitespace-nowrap"
                        style={{ color: item.text }}
                      >
                        {item.label}
                      </span>
                    </div>
                    <div className="text-[#1E2A38] font-extrabold text-lg mt-1 ml-8 whitespace-nowrap">
                      ₹ {item.val}
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-0 mt-12 w-full px-4">
                {[
                  { label: "Total interest", val: displayResultTotalInterest },
                  { label: "Total payment", val: displayResultTotalPayment },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-start ${i === 0 ? "pl-10" : "pl-5"}`}
                  >
                    <div className="text-[#263238] font-bold text-2xl leading-none">
                      {item.label}
                    </div>
                    <div className="text-[#E60318] font-extrabold text-[28px] mt-6 whitespace-nowrap">
                      ₹ {item.val}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE EMI CALCULATOR */}
        <div className="block lg:hidden w-full pb-10">
          {/* Mobile Header */}
          <div className="flex justify-center mb-4">
            <h2 className="text-[#1E2A38] text-xl font-[800] leading-none uppercase">
              EMI Calculator
            </h2>
          </div>

          {/* Mobile Calculator Card */}
          <div className="bg-[#E6031866] rounded-2xl border border-[#263238] w-full p-4 flex flex-col gap-8 min-h-[1015px]">
            {/* Input Rows */}
            {[
              {
                label: "Loan Amount",
                val: displayAmount,
                state: amount,
                setter: setAmount,
                min: 100000,
                max: 50000000,
                step: 50000,
              },
              {
                label: "Tenure(Years)",
                val: displayTenure,
                state: tenure,
                setter: setTenure,
                min: 1,
                max: 30,
                step: 1,
              },
              {
                label: "Interest Rate(%)",
                val: displayRate,
                state: rate,
                setter: setRate,
                min: 1,
                max: 20,
                step: 0.1,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col gap-4 ${idx === 0 ? "pt-8" : "mt-4"}`}
              >
                <div className="flex justify-between items-center">
                  <label className="text-white font-bold text-base leading-[1]">
                    {item.label}
                  </label>
                  <div className="w-[111px] h-7.5 rounded-lg bg-white flex items-center justify-start px-2">
                    <input
                      type="text"
                      value={
                        focusedField === `mobile-${item.label}`
                          ? inputValue
                          : item.val
                      }
                      onFocus={() => {
                        setFocusedField(`mobile-${item.label}`);
                        setInputValue(String(item.state));
                      }}
                      onBlur={() => {
                        setFocusedField(null);
                        const num = Number(inputValue);
                        const snapped = Math.round(num / item.step) * item.step;
                        const clamped = Math.max(
                          item.min,
                          Math.min(item.max, snapped),
                        );
                        item.setter(Number(clamped.toFixed(2)));
                      }}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9.]/g, "");
                        setInputValue(val);
                        if (val !== "" && val !== ".") {
                          item.setter(Number(val));
                        }
                      }}
                      className="w-full bg-transparent text-[#686868] font-medium text-sm outline-none text-center"
                    />
                  </div>
                </div>
                {/* Mobile Slider */}
                <div className="relative w-full h-[4px] mt-2">
                  <div className="absolute inset-0 bg-gray-300 rounded-full"></div>
                  {/* Visual Clamping for Mobile UI */}
                  {(() => {
                    const visualVal = Math.max(
                      item.min,
                      Math.min(item.max, item.state),
                    );
                    const percentage =
                      ((visualVal - item.min) / (item.max - item.min)) * 100;
                    return (
                      <>
                        <div
                          className="absolute inset-y-0 left-0 bg-[#C20D1F] rounded-full transition-all duration-150"
                          style={{ width: `${percentage}%` }}
                        ></div>
                        <div
                          className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center w-[12px] h-[12px] bg-white border-2 border-[#C20D1F] rounded-full z-30 transition-all duration-150"
                          style={{ left: `calc(${percentage}% - 6px)` }}
                        >
                          <div className="w-[4px] h-[4px] bg-[#C20D1F] rounded-full"></div>
                        </div>
                      </>
                    );
                  })()}
                  <input
                    type="range"
                    min={item.min}
                    max={item.max}
                    step={item.step}
                    value={item.state}
                    onChange={(e) => item.setter(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-40"
                  />
                </div>
              </div>
            ))}

            {/* Calculate EMI Button */}
            <div className="flex justify-center mt-2">
              <button
                onClick={handleCalculate}
                className="w-[210px] h-[37px] bg-[#E60318] text-white rounded-[4px] shadow-md flex items-center justify-center hover:bg-white hover:text-[#E60318] transition-all active:scale-95"
              >
                <span className="font-semibold text-sm">Calculate EMI</span>
              </button>
            </div>

            {/* Mobile Results Container */}
            <div className="flex flex-col items-center mt-10">
              <h3 className="text-white font-[800] text-lg leading-tight text-center">
                Your Monthly EMI is
              </h3>
              <div className="text-[#B70D1F] font-[800] text-[28px] leading-none mt-[12px]">
                ₹ {displayEMI}
              </div>
              <p className="text-[#263238] font-bold text-[15px] mt-[10px] text-center">
                {resultRate}% interest rate per annum
              </p>

              {/* Mobile Donut Chart */}
              <div className="relative w-55 h-55 mt-[15px] flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    stroke="#263238"
                    strokeWidth="32"
                    fill="transparent"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    stroke="#C20D1F"
                    strokeWidth="32"
                    fill="transparent"
                    strokeDasharray="502.6"
                    strokeDashoffset={
                      502.6 * (1 - totalInterestVal / totalPaymentVal)
                    }
                  />
                </svg>
              </div>

              {/* Mobile Legend */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-[30px] w-full px-4">
                {[
                  {
                    label: "Loan Amount",
                    val: displayResultAmount,
                    dot: "#C20D1F",
                  },
                  {
                    label: "Total Interest",
                    val: displayResultTotalInterest,
                    dot: "#263238",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.dot }}
                      ></div>
                      <span className="text-[#263238] font-bold text-sm whitespace-nowrap">
                        {item.label}
                      </span>
                    </div>
                    <div className="text-white font-[800] text-sm mt-1 ml-4">
                      ₹ {item.val}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Summary */}
              <div className="grid grid-cols-2 gap-y-6 mt-4 w-full px-4 pt-4">
                {[
                  { label: "Total interest", val: displayResultTotalInterest },
                  { label: "Total payment", val: displayResultTotalPayment },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="text-[#263238] font-bold text-base leading-tight text-center">
                      {item.label}
                    </div>
                    <div className="text-white font-[800] text-lg mt-1 whitespace-nowrap">
                      ₹ {item.val}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmiCalculator;

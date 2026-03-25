import { useState } from "react";

const EmiCalculator = () => {
  const [amount, setAmount] = useState(500000);
  const [tenure, setTenure] = useState(5);
  const [rate, setRate] = useState(8.1);
  const [draftAmount, setDraftAmount] = useState(500000);
  const [draftTenure, setDraftTenure] = useState(5);
  const [draftRate, setDraftRate] = useState(8.1);
  const [amountInput, setAmountInput] = useState("500000");
  const [tenureInput, setTenureInput] = useState("5");
  const [rateInput, setRateInput] = useState("8.1");

  const calculateEMI = () => {
    const p = amount;
    const r = rate / 12 / 100;
    const n = tenure * 12;
    if (p <= 0 || n <= 0) return 0;
    if (r === 0) return Math.round(p / n) || 0;
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi) || 0;
  };

  const emiVal = calculateEMI();
  const totalPaymentVal = emiVal * tenure * 12;
  const totalInterestVal = totalPaymentVal - amount;

  const displayAmount = amount.toLocaleString("en-IN");
  const displayEMI = emiVal.toLocaleString("en-IN");
  const displayTenure = tenure;
  const displayRate = rate;
  const displayTotalInterest = totalInterestVal.toLocaleString("en-IN");
  const displayTotalPayment = totalPaymentVal.toLocaleString("en-IN");
  const displayDraftAmount = amountInput === "" ? "" : amountInput;
  const displayDraftTenure = tenureInput === "" ? "" : tenureInput;
  const displayDraftRate = rateInput === "" ? "" : rateInput;
  const rupee = "\u20B9";
  const amountProgress = Math.min(
    100,
    Math.max(0, ((draftAmount - 100000) / (5000000 - 100000)) * 100)
  );
  const tenureProgress = Math.min(
    100,
    Math.max(0, ((draftTenure - 1) / (30 - 1)) * 100)
  );
  const rateProgress = Math.min(
    100,
    Math.max(0, ((draftRate - 1) / (20 - 1)) * 100)
  );
  const interestStrokeOffset =
    totalPaymentVal > 0 ? 502.6 * (1 - totalInterestVal / totalPaymentVal) : 0;
  const mobileInterestStrokeOffset =
    totalPaymentVal > 0 ? 427.26 * (1 - totalInterestVal / totalPaymentVal) : 0;
  const formulaText = "EMI = P x r x (1 + r)^n / ((1 + r)^n - 1)";
  const formulaMeta = "P = principal, r = monthly interest rate, n = number of monthly installments";

  const applyCalculation = () => {
    const nextAmount =
      amountInput.trim() === "" ? 0 : Number(amountInput.replace(/[^0-9]/g, ""));
    const nextTenure =
      tenureInput.trim() === "" ? 0 : Number(tenureInput.replace(/[^0-9]/g, ""));
    const nextRate =
      rateInput.trim() === "" ? 0 : Number(rateInput.replace(/[^0-9.]/g, ""));

    setAmount(Number.isNaN(nextAmount) ? 0 : nextAmount);
    setTenure(Number.isNaN(nextTenure) ? 0 : nextTenure);
    setRate(Number.isNaN(nextRate) ? 0 : nextRate);
    setDraftAmount(Number.isNaN(nextAmount) ? 0 : nextAmount);
    setDraftTenure(Number.isNaN(nextTenure) ? 0 : nextTenure);
    setDraftRate(Number.isNaN(nextRate) ? 0 : nextRate);
  };

  const handleAmountInput = (e) => {
    const sanitized = e.target.value.replace(/[^0-9]/g, "");
    setAmountInput(sanitized);
    if (sanitized === "") return;
    const numeric = Number(sanitized);
    if (Number.isNaN(numeric)) return;
    setDraftAmount(numeric);
  };

  const handleTenureInput = (e) => {
    const sanitized = e.target.value.replace(/[^0-9]/g, "");
    setTenureInput(sanitized);
    if (sanitized === "") return;
    const numeric = Number(sanitized);
    if (Number.isNaN(numeric)) return;
    setDraftTenure(numeric);
  };

  const handleRateInput = (e) => {
    const sanitized = e.target.value.replace(/[^0-9.]/g, "");
    setRateInput(sanitized);
    if (sanitized === "") return;
    const numeric = Number(sanitized);
    if (Number.isNaN(numeric)) return;
    setDraftRate(numeric);
  };

  return (
    <section className="w-full bg-white px-4 lg:mt-[65px] lg:px-0">
      <div className="mx-auto flex flex-col lg:h-[867px] lg:max-w-[1195px]">
        <div className="flex justify-center">
          <div className="flex items-center justify-center">
            <svg
              viewBox="16 69 101 13"
              className="h-auto w-[260px] max-w-full md:w-[320px] lg:w-[420px]"
              aria-label="EMI Calculator"
              role="img"
            >
              <path
                d="M16.28 81V69.48H18.208V79.192H23.296V81H16.28ZM28.4673 81.24C27.6033 81.24 26.8486 81.0453 26.2033 80.656C25.5579 80.2667 25.0566 79.7307 24.6993 79.048C24.3473 78.36 24.1713 77.5707 24.1713 76.68C24.1713 75.7733 24.3526 74.9787 24.7153 74.296C25.0779 73.6133 25.5819 73.08 26.2273 72.696C26.8726 72.312 27.6193 72.12 28.4673 72.12C29.3366 72.12 30.0939 72.3147 30.7393 72.704C31.3846 73.0933 31.8859 73.632 32.2433 74.32C32.6006 75.0027 32.7793 75.7893 32.7793 76.68C32.7793 77.576 32.5979 78.368 32.2353 79.056C31.8779 79.7387 31.3766 80.2747 30.7313 80.664C30.0859 81.048 29.3313 81.24 28.4673 81.24ZM28.4673 79.432C29.2353 79.432 29.8059 79.176 30.1793 78.664C30.5526 78.152 30.7393 77.4907 30.7393 76.68C30.7393 75.8427 30.5499 75.176 30.1713 74.68C29.7926 74.1787 29.2246 73.928 28.4673 73.928C27.9499 73.928 27.5233 74.0453 27.1873 74.28C26.8566 74.5093 26.6113 74.832 26.4513 75.248C26.2913 75.6587 26.2113 76.136 26.2113 76.68C26.2113 77.5173 26.4006 78.1867 26.7793 78.688C27.1633 79.184 27.7259 79.432 28.4673 79.432ZM36.9579 81.24C36.3339 81.24 35.8059 81.1227 35.3739 80.888C34.9419 80.648 34.6139 80.3307 34.3899 79.936C34.1712 79.5413 34.0619 79.1067 34.0619 78.632C34.0619 78.216 34.1312 77.8427 34.2699 77.512C34.4085 77.176 34.6219 76.888 34.9099 76.648C35.1979 76.4027 35.5712 76.2027 36.0299 76.048C36.3765 75.936 36.7819 75.8347 37.2459 75.744C37.7152 75.6533 38.2219 75.5707 38.7659 75.496C39.3152 75.416 39.8885 75.3307 40.4859 75.24L39.7979 75.632C39.8032 75.0347 39.6699 74.5947 39.3979 74.312C39.1259 74.0293 38.6672 73.888 38.0219 73.888C37.6325 73.888 37.2565 73.9787 36.8939 74.16C36.5312 74.3413 36.2779 74.6533 36.1339 75.096L34.3739 74.544C34.5872 73.8133 34.9925 73.2267 35.5899 72.784C36.1925 72.3413 37.0032 72.12 38.0219 72.12C38.7899 72.12 39.4645 72.2453 40.0459 72.496C40.6325 72.7467 41.0672 73.1573 41.3499 73.728C41.5045 74.032 41.5979 74.344 41.6299 74.664C41.6619 74.9787 41.6779 75.3227 41.6779 75.696V81H39.9899V79.128L40.2699 79.432C39.8805 80.056 39.4245 80.5147 38.9019 80.808C38.3845 81.096 37.7365 81.24 36.9579 81.24ZM37.3419 79.704C37.7792 79.704 38.1525 79.6267 38.4619 79.472C38.7712 79.3173 39.0165 79.128 39.1979 78.904C39.3845 78.68 39.5099 78.4693 39.5739 78.272C39.6752 78.0267 39.7312 77.7467 39.7419 77.432C39.7579 77.112 39.7659 76.8533 39.7659 76.656L40.3579 76.832C39.7765 76.9227 39.2779 77.0027 38.8619 77.072C38.4459 77.1413 38.0885 77.208 37.7899 77.272C37.4912 77.3307 37.2272 77.3973 36.9979 77.472C36.7739 77.552 36.5845 77.6453 36.4299 77.752C36.2752 77.8587 36.1552 77.9813 36.0699 78.12C35.9899 78.2587 35.9499 78.4213 35.9499 78.608C35.9499 78.8213 36.0032 79.0107 36.1099 79.176C36.2165 79.336 36.3712 79.464 36.5739 79.56C36.7819 79.656 37.0379 79.704 37.3419 79.704ZM49.7366 81V76.84C49.7366 76.568 49.718 76.2667 49.6806 75.936C49.6433 75.6053 49.5553 75.288 49.4166 74.984C49.2833 74.6747 49.0806 74.4213 48.8086 74.224C48.542 74.0267 48.1793 73.928 47.7206 73.928C47.4753 73.928 47.2326 73.968 46.9926 74.048C46.7526 74.128 46.534 74.2667 46.3366 74.464C46.1446 74.656 45.99 74.9227 45.8726 75.264C45.7553 75.6 45.6966 76.032 45.6966 76.56L44.5526 76.072C44.5526 75.336 44.694 74.6693 44.9766 74.072C45.2646 73.4747 45.686 73 46.2406 72.648C46.7953 72.2907 47.478 72.112 48.2886 72.112C48.9286 72.112 49.4566 72.2187 49.8726 72.432C50.2886 72.6453 50.6193 72.9173 50.8646 73.248C51.11 73.5787 51.2913 73.9307 51.4086 74.304C51.526 74.6773 51.6006 75.032 51.6326 75.368C51.67 75.6987 51.6886 75.968 51.6886 76.176V81H49.7366ZM43.7446 81V72.36H45.4646V75.04H45.6966V81H43.7446ZM56.1794 81L59.8114 69.48H62.6354L66.2674 81H64.2834L60.9874 70.664H61.4194L58.1634 81H56.1794ZM58.2034 78.504V76.704H64.2514V78.504H58.2034ZM78.0898 81V75.752C78.0898 75.16 77.9431 74.6987 77.6498 74.368C77.3564 74.032 76.9591 73.864 76.4578 73.864C76.1484 73.864 75.8711 73.936 75.6258 74.08C75.3804 74.2187 75.1858 74.4267 75.0417 74.704C74.8978 74.976 74.8258 75.3013 74.8258 75.68L73.9698 75.176C73.9644 74.5787 74.0978 74.0533 74.3698 73.6C74.6471 73.1413 75.0204 72.784 75.4898 72.528C75.9591 72.272 76.4818 72.144 77.0578 72.144C78.0124 72.144 78.7431 72.432 79.2498 73.008C79.7618 73.5787 80.0178 74.3307 80.0178 75.264V81H78.0898ZM67.6978 81V72.36H69.4018V75.04H69.6418V81H67.6978ZM72.9058 81V75.776C72.9058 75.1733 72.7591 74.704 72.4658 74.368C72.1724 74.032 71.7724 73.864 71.2658 73.864C70.7751 73.864 70.3804 74.032 70.0818 74.368C69.7884 74.704 69.6418 75.1413 69.6418 75.68L68.7778 75.104C68.7778 74.544 68.9164 74.04 69.1938 73.592C69.4711 73.144 69.8444 72.792 70.3138 72.536C70.7884 72.2747 71.3191 72.144 71.9058 72.144C72.5511 72.144 73.0898 72.2827 73.5218 72.56C73.9591 72.832 74.2844 73.2053 74.4978 73.68C74.7164 74.1493 74.8258 74.68 74.8258 75.272V81H72.9058ZM85.7798 81.24C84.9158 81.24 84.1611 81.0453 83.5158 80.656C82.8704 80.2667 82.3691 79.7307 82.0118 79.048C81.6598 78.36 81.4838 77.5707 81.4838 76.68C81.4838 75.7733 81.6651 74.9787 82.0278 74.296C82.3904 73.6133 82.8944 73.08 83.5398 72.696C84.1851 72.312 84.9318 72.12 85.7798 72.12C86.6491 72.12 87.4064 72.3147 88.0518 72.704C88.6971 73.0933 89.1984 73.632 89.5558 74.32C89.9131 75.0027 90.0918 75.7893 90.0918 76.68C90.0918 77.576 89.9104 78.368 89.5478 79.056C89.1904 79.7387 88.6891 80.2747 88.0438 80.664C87.3984 81.048 86.6438 81.24 85.7798 81.24ZM85.7798 79.432C86.5478 79.432 87.1184 79.176 87.4918 78.664C87.8651 78.152 88.0518 77.4907 88.0518 76.68C88.0518 75.8427 87.8624 75.176 87.4838 74.68C87.1051 74.1787 86.5371 73.928 85.7798 73.928C85.2624 73.928 84.8358 74.0453 84.4998 74.28C84.1691 74.5093 83.9238 74.832 83.7638 75.248C83.6038 75.6587 83.5238 76.136 83.5238 76.68C83.5238 77.5173 83.7131 78.1867 84.0918 78.688C84.4758 79.184 85.0384 79.432 85.7798 79.432ZM95.0944 81.248C94.4544 81.248 93.9264 81.1413 93.5104 80.928C93.0944 80.7147 92.7637 80.4427 92.5184 80.112C92.273 79.7813 92.0917 79.4293 91.9744 79.056C91.857 78.6827 91.7797 78.3307 91.7424 78C91.7104 77.664 91.6944 77.392 91.6944 77.184V72.36H93.6464V76.52C93.6464 76.7867 93.665 77.088 93.7024 77.424C93.7397 77.7547 93.825 78.0747 93.9584 78.384C94.097 78.688 94.2997 78.9387 94.5664 79.136C94.8384 79.3333 95.2037 79.432 95.6624 79.432C95.9077 79.432 96.1504 79.392 96.3904 79.312C96.6304 79.232 96.8464 79.096 97.0384 78.904C97.2357 78.7067 97.393 78.4373 97.5104 78.096C97.6277 77.7547 97.6864 77.3227 97.6864 76.8L98.8304 77.288C98.8304 78.024 98.6864 78.6907 98.3984 79.288C98.1157 79.8853 97.697 80.3627 97.1424 80.72C96.5877 81.072 95.905 81.248 95.0944 81.248ZM97.9184 81V78.32H97.6864V72.36H99.6224V81H97.9184ZM107.846 81V76.84C107.846 76.568 107.827 76.2667 107.79 75.936C107.753 75.6053 107.665 75.288 107.526 74.984C107.393 74.6747 107.19 74.4213 106.918 74.224C106.651 74.0267 106.289 73.928 105.83 73.928C105.585 73.928 105.342 73.968 105.102 74.048C104.862 74.128 104.643 74.2667 104.446 74.464C104.254 74.656 104.099 74.9227 103.982 75.264C103.865 75.6 103.806 76.032 103.806 76.56L102.662 76.072C102.662 75.336 102.803 74.6693 103.086 74.072C103.374 73.4747 103.795 73 104.35 72.648C104.905 72.2907 105.587 72.112 106.398 72.112C107.038 72.112 107.566 72.2187 107.982 72.432C108.398 72.6453 108.729 72.9173 108.974 73.248C109.219 73.5787 109.401 73.9307 109.518 74.304C109.635 74.6773 109.71 75.032 109.742 75.368C109.779 75.6987 109.798 75.968 109.798 76.176V81H107.846ZM101.854 81V72.36H103.574V75.04H103.806V81H101.854ZM116.95 81C116.379 81.1067 115.819 81.152 115.27 81.136C114.726 81.1253 114.238 81.0267 113.806 80.84C113.374 80.648 113.046 80.3467 112.822 79.936C112.624 79.5627 112.52 79.1813 112.51 78.792C112.499 78.4027 112.494 77.9627 112.494 77.472V69.96H114.414V77.36C114.414 77.7067 114.416 78.0107 114.422 78.272C114.432 78.5333 114.488 78.7467 114.59 78.912C114.782 79.232 115.088 79.4107 115.51 79.448C115.931 79.4853 116.411 79.464 116.95 79.384V81ZM110.926 73.872V72.36H116.95V73.872H110.926Z"
                fill="#1E2A38"
              />
            </svg>
          </div>
        </div>
        <div className="mx-auto mt-3 max-w-[760px] text-center">
          <p className="text-sm font-semibold text-[#1E2A38] md:text-base">
            {formulaText}
          </p>
          <p className="mt-1 text-xs text-slate-500 md:text-sm">
            {formulaMeta}
          </p>
        </div>

        <div className="mx-auto mt-8 w-full max-w-[380px] rounded-[20px] border border-[#0E78C9] bg-[#F38D97] px-4 py-6 shadow-[0_14px_30px_rgba(230,3,24,0.12)] lg:hidden">
          <div className="space-y-7">
            {[
              {
                label: "Loan Amount",
                value: displayDraftAmount,
                min: 100000,
                max: 5000000,
                step: 50000,
                current: draftAmount,
                onChange: (e) => {
                  const value = Number(e.target.value);
                  setDraftAmount(value);
                  setAmountInput(String(value));
                },
                onInputChange: handleAmountInput,
                progress: amountProgress,
                inputMode: "numeric",
              },
              {
                label: "Tenure(Years)",
                value: displayDraftTenure,
                min: 1,
                max: 30,
                step: 1,
                current: draftTenure,
                onChange: (e) => {
                  const value = Number(e.target.value);
                  setDraftTenure(value);
                  setTenureInput(String(value));
                },
                onInputChange: handleTenureInput,
                progress: tenureProgress,
                inputMode: "numeric",
              },
              {
                label: "Interest Rate(%)",
                value: displayDraftRate,
                min: 1,
                max: 20,
                step: 0.1,
                current: draftRate,
                onChange: (e) => {
                  const value = Number(e.target.value);
                  setDraftRate(value);
                  setRateInput(String(value));
                },
                onInputChange: handleRateInput,
                progress: rateProgress,
                inputMode: "decimal",
              },
            ].map((item) => (
              <div key={item.label} className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[17px] font-semibold text-white">
                    {item.label}
                  </span>
                  <input
                    type="text"
                    inputMode={item.inputMode}
                    value={item.value}
                    onChange={item.onInputChange}
                    className="min-w-[76px] rounded-[8px] bg-[#FFE9E9] px-4 py-1.5 text-center text-[16px] font-semibold text-[#8F8F8F] outline-none"
                    aria-label={`${item.label} value`}
                  />
                </div>

                <div className="relative h-[18px]">
                  <div className="pointer-events-none absolute left-0 right-0 top-1/2 h-[4px] -translate-y-1/2 rounded-full bg-[#94414A]"></div>
                  <div
                    className="pointer-events-none absolute left-0 top-1/2 h-[4px] -translate-y-1/2 rounded-full bg-[#E60318]"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                  <div
                    className="pointer-events-none absolute top-1/2 h-[12px] w-[12px] -translate-y-1/2 rounded-full border-2 border-[#E60318] bg-white"
                    style={{ left: `calc(${item.progress}% - 6px)` }}
                  ></div>
                  <input
                    type="range"
                    min={item.min}
                    max={item.max}
                    step={item.step}
                    value={item.current}
                    onChange={item.onChange}
                    aria-label={item.label}
                    className="absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0"
                  />
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={applyCalculation}
              className="mx-auto flex h-[44px] w-[170px] items-center justify-center rounded-[6px] bg-[#F00218] text-[15px] font-semibold text-white shadow-[0_6px_14px_rgba(180,0,17,0.22)]"
            >
              Calculate EMI
            </button>

            <div className="pt-8 text-center">
              <h3 className="text-[20px] font-extrabold text-white">
                Your Monthly EMI is
              </h3>
              <p className="mt-4 text-[20px] font-extrabold text-[#E60318]">
                {rupee} {displayEMI}
              </p>
              <p className="mt-2 text-[14px] font-bold text-[#4D4D4D]">
                {displayRate}% interest rate per annum
              </p>
              <p className="mt-3 text-[11px] font-medium text-[#5B4650]">
                {formulaText}
              </p>
            </div>

            <div className="flex justify-center pt-2">
              <div className="relative h-[210px] w-[210px]">
                <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
                  <circle
                    cx="100"
                    cy="100"
                    r="68"
                    stroke="#2E323C"
                    strokeWidth="24"
                    fill="transparent"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="68"
                    stroke="#C30E1F"
                    strokeWidth="24"
                    fill="transparent"
                    strokeDasharray="427.26"
                    strokeDashoffset={mobileInterestStrokeOffset}
                  />
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-7 pt-1 text-left">
              <div>
                <div className="flex items-center gap-2 text-[13px] font-bold text-[#4A3F4B]">
                  <span className="h-[12px] w-[12px] rounded-full bg-[#C30E1F]"></span>
                  <span>Loan Amount</span>
                </div>
                <p className="mt-1 pl-4 text-[18px] font-extrabold text-white">
                  {rupee} {displayAmount}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-[13px] font-bold text-[#4A3F4B]">
                  <span className="h-[12px] w-[12px] rounded-full bg-[#2E323C]"></span>
                  <span>Total Interest</span>
                </div>
                <p className="mt-1 pl-4 text-[18px] font-extrabold text-white">
                  {rupee} {displayTotalInterest}
                </p>
              </div>

              <div>
                <p className="text-[13px] font-bold text-[#4A3F4B]">
                  Total interest
                </p>
                <p className="mt-1 text-[18px] font-extrabold text-white">
                  {rupee} {displayTotalInterest}
                </p>
              </div>

              <div>
                <p className="text-[13px] font-bold text-[#4A3F4B]">
                  Total payment
                </p>
                <p className="mt-1 text-[18px] font-extrabold text-white">
                  {rupee} {displayTotalPayment}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative hidden rounded-[20px] bg-[#E6031833] lg:-ml-[4px] lg:mt-[82px] lg:block lg:h-[749px] lg:w-[1203px]">
          <div className="z-10 bg-[#263238] lg:absolute lg:left-0 lg:top-0 lg:ml-[602px] lg:mt-[40px] lg:block lg:h-[669px] lg:w-[1px]"></div>

          <div className="relative overflow-visible lg:h-full lg:w-[602px]">
            <label className="z-20 flex items-center text-[22px] font-bold leading-none text-[#1E2A38] lg:absolute lg:left-0 lg:top-0 lg:ml-[80px] lg:mt-[168px] lg:h-[30px] lg:w-[152px]">
              Loan Amount
            </label>

            <div className="overflow-hidden bg-white z-20 lg:absolute lg:left-0 lg:top-0 lg:ml-[347px] lg:mt-[162px] lg:h-[42px] lg:w-[167px] lg:rounded-lg">
              <input
                type="text"
                inputMode="numeric"
                value={displayDraftAmount}
                onChange={handleAmountInput}
                aria-label="Loan Amount value"
                className="flex bg-transparent text-[24px] font-medium leading-none text-[#686868] outline-none lg:absolute lg:left-0 lg:top-0 lg:ml-[19px] lg:mt-[4px] lg:h-[33px] lg:w-[120px]"
              />
            </div>

            <div className="group lg:absolute lg:left-0 lg:top-0 lg:ml-[80px] lg:mt-[227px] lg:h-[6px] lg:w-[453px]">
              <div className="pointer-events-none absolute inset-0 rounded-full bg-[#7A7A7A]"></div>
              <div
                className="pointer-events-none absolute inset-y-0 left-0 rounded-full bg-[#C20D1F]"
                style={{ width: `${amountProgress}%` }}
              ></div>
              <div
                className="pointer-events-none absolute top-0 z-30 flex items-center justify-center rounded-full bg-[#D9D9D9] lg:-mt-[5px] lg:h-[16px] lg:w-[16px]"
                style={{ left: `calc(${amountProgress}% - 8px)` }}
              >
                <div className="rounded-full bg-[#C20D1F] lg:h-[8px] lg:w-[8px]"></div>
              </div>
              <input
                type="range"
                min="100000"
                max="5000000"
                step="50000"
                value={draftAmount}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  setDraftAmount(value);
                  setAmountInput(String(value));
                }}
                aria-label="Loan Amount"
                className="absolute inset-0 z-40 h-full w-full cursor-pointer opacity-0"
              />
            </div>

            <label className="z-20 flex items-center text-[22px] font-bold leading-none text-[#1E2A38] lg:absolute lg:left-0 lg:top-0 lg:ml-[80px] lg:mt-[295px] lg:h-[30px] lg:w-[162px]">
              Tenure (Years)
            </label>

            <div className="overflow-hidden bg-white z-20 lg:absolute lg:left-0 lg:top-0 lg:ml-[347px] lg:mt-[289px] lg:h-[42px] lg:w-[167px] lg:rounded-lg">
              <input
                type="text"
                inputMode="numeric"
                value={displayDraftTenure}
                onChange={handleTenureInput}
                aria-label="Tenure value"
                className="flex min-w-[14px] bg-transparent items-center text-[24px] font-medium leading-none text-[#686868] outline-none lg:absolute lg:left-0 lg:top-0 lg:ml-[20px] lg:mt-[4px] lg:h-[33px] lg:w-[120px]"
              />
            </div>

            <div className="group lg:absolute lg:left-0 lg:top-0 lg:ml-[80px] lg:mt-[354px] lg:h-[6px] lg:w-[453px]">
              <div className="pointer-events-none absolute inset-0 rounded-full bg-[#7A7A7A]"></div>
              <div
                className="pointer-events-none absolute inset-y-0 left-0 rounded-full bg-[#C20D1F]"
                style={{ width: `${tenureProgress}%` }}
              ></div>
              <div
                className="pointer-events-none absolute top-0 z-30 flex items-center justify-center rounded-full bg-[#D9D9D9] lg:-mt-[5px] lg:h-[16px] lg:w-[16px]"
                style={{ left: `calc(${tenureProgress}% - 8px)` }}
              >
                <div className="rounded-full bg-[#C20D1F] lg:h-[8px] lg:w-[8px]"></div>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                value={draftTenure}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  setDraftTenure(value);
                  setTenureInput(String(value));
                }}
                aria-label="Tenure"
                className="absolute inset-0 z-40 h-full w-full cursor-pointer opacity-0"
              />
            </div>

            <label className="z-20 flex items-center text-[22px] font-bold leading-none text-[#1E2A38] lg:absolute lg:left-0 lg:top-0 lg:ml-[80px] lg:mt-[422px] lg:h-[30px] lg:w-[192px]">
              Interest Rate (%)
            </label>

            <div className="overflow-hidden bg-white z-20 lg:absolute lg:left-0 lg:top-0 lg:ml-[347px] lg:mt-[416px] lg:h-[42px] lg:w-[167px] lg:rounded-lg">
              <input
                type="text"
                inputMode="decimal"
                value={displayDraftRate}
                onChange={handleRateInput}
                aria-label="Interest Rate value"
                className="flex min-w-[28px] bg-transparent items-center text-[24px] font-medium leading-none text-[#686868] outline-none lg:absolute lg:left-0 lg:top-0 lg:ml-[18px] lg:mt-[4px] lg:h-[33px] lg:w-[120px]"
              />
            </div>

            <div className="group lg:absolute lg:left-0 lg:top-0 lg:ml-[80px] lg:mt-[481px] lg:h-[6px] lg:w-[453px]">
              <div className="pointer-events-none absolute inset-0 rounded-full bg-[#7A7A7A]"></div>
              <div
                className="pointer-events-none absolute inset-y-0 left-0 rounded-full bg-[#C20D1F]"
                style={{ width: `${rateProgress}%` }}
              ></div>
              <div
                className="pointer-events-none absolute top-0 z-30 flex items-center justify-center rounded-full bg-[#D9D9D9] lg:-mt-[5px] lg:h-[16px] lg:w-[16px]"
                style={{ left: `calc(${rateProgress}% - 8px)` }}
              >
                <div className="rounded-full bg-[#C20D1F] lg:h-[8px] lg:w-[8px]"></div>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                step="0.1"
                value={draftRate}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  setDraftRate(value);
                  setRateInput(String(value));
                }}
                aria-label="Interest Rate"
                className="absolute inset-0 z-40 h-full w-full cursor-pointer opacity-0"
              />
            </div>

            <button
              type="button"
              onClick={applyCalculation}
              className="z-20 flex items-center justify-center gap-[10px] rounded-lg bg-[#E60318] text-white shadow-[0_4px_20px_0_rgba(0,0,0,0.1)] transition-all duration-300 hover:bg-white hover:text-[#E60318] focus:outline-none lg:absolute lg:left-0 lg:top-0 lg:ml-[64px] lg:mt-[583px] lg:h-[60px] lg:w-[453px] lg:pb-[17px] lg:pl-[43px] lg:pr-[41px] lg:pt-[16px]"
            >
              <span className="flex items-center justify-center text-center text-[20px] font-semibold leading-none lg:h-[27px] lg:w-[200px]">
                Calculate EMI
              </span>
            </button>
          </div>

          <div className="lg:absolute lg:left-[603px] lg:top-0 lg:h-full lg:w-[601px]">
            <h3 className="z-20 flex items-center justify-center text-center text-[28px] font-extrabold leading-none text-[#1E2A38] lg:absolute lg:left-0 lg:top-0 lg:ml-[170px] lg:mt-[75px] lg:h-[38px] lg:w-[300px]">
              Your Monthly EMI is
            </h3>

            <div className="z-20 flex justify-center whitespace-nowrap text-[42px] font-extrabold leading-none text-[#E60318] lg:absolute lg:left-0 lg:top-0 lg:mt-[117px] lg:w-full">
              {rupee} {displayEMI}
            </div>

            <p className="z-20 flex justify-center whitespace-nowrap text-center text-[18px] font-bold leading-none text-[#7A7A7A] lg:absolute lg:left-0 lg:top-0 lg:mt-[177px] lg:w-full">
              {displayRate}% Interest rate per annum
            </p>
            <p className="z-20 flex justify-center text-center text-[13px] font-medium text-slate-500 lg:absolute lg:left-0 lg:top-0 lg:mt-[205px] lg:w-full">
              {formulaText}
            </p>

            <div className="z-10 flex items-center justify-center lg:absolute lg:left-0 lg:top-0 lg:ml-[204px] lg:mt-[222px] lg:h-[200px] lg:w-[201px]">
              <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
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
                  strokeDashoffset={interestStrokeOffset}
                />
              </svg>
            </div>

            <div className="z-20 rounded-full bg-[#AF1021] lg:absolute lg:left-0 lg:top-0 lg:ml-[98px] lg:mt-[456px] lg:h-[20px] lg:w-[20px]"></div>
            <div className="z-20 flex items-center whitespace-nowrap text-[18px] font-bold leading-none text-[#C20D1F] lg:absolute lg:left-0 lg:top-0 lg:ml-[129px] lg:mt-[451px]">
              Loan Amount
            </div>
            <div className="z-20 flex items-center whitespace-nowrap text-[18px] font-extrabold leading-none text-[#1E2A38] lg:absolute lg:left-0 lg:top-0 lg:ml-[129px] lg:mt-[481px]">
              {rupee} {displayAmount}
            </div>

            <div className="z-20 rounded-full bg-[#7E7E7E] lg:absolute lg:left-0 lg:top-0 lg:ml-[336px] lg:mt-[456px] lg:h-[20px] lg:w-[20px]"></div>
            <div className="z-20 flex items-center whitespace-nowrap text-[18px] font-bold leading-none text-[#7A7A7A] lg:absolute lg:left-0 lg:top-0 lg:ml-[360px] lg:mt-[451px]">
              Total Interest
            </div>
            <div className="z-20 flex items-center whitespace-nowrap text-[18px] font-extrabold leading-none text-[#1E2A38] lg:absolute lg:left-0 lg:top-0 lg:ml-[360px] lg:mt-[481px]">
              {rupee} {displayTotalInterest}
            </div>

            <div className="z-20 flex items-center whitespace-nowrap text-[24px] font-bold leading-none text-[#263238] lg:absolute lg:left-0 lg:top-0 lg:ml-[98px] lg:mt-[566px]">
              Total interest
            </div>
            <div className="z-20 flex items-center whitespace-nowrap text-[32px] font-extrabold leading-none text-[#E60318] lg:absolute lg:left-0 lg:top-0 lg:ml-[98px] lg:mt-[600px]">
              {rupee} {displayTotalInterest}
            </div>

            <div className="z-20 flex items-center whitespace-nowrap text-[24px] font-bold leading-none text-[#263238] lg:absolute lg:left-0 lg:top-0 lg:ml-[336px] lg:mt-[566px]">
              Total payment
            </div>
            <div className="z-20 flex items-center whitespace-nowrap text-[32px] font-extrabold leading-none text-[#E60318] lg:absolute lg:left-0 lg:top-0 lg:ml-[336px] lg:mt-[600px]">
              {rupee} {displayTotalPayment}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmiCalculator;

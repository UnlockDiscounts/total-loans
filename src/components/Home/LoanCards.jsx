import loanHome from "../../assets/images/loan-home.png";
import loanVehicle from "../../assets/images/loan-vehicle.png";
import loanGold from "../../assets/images/loan-gold.png";
import loanAgriculture from "../../assets/images/loan-agriculture.png";
import loanEducation from "../../assets/images/loan-education.png";
import loanBusiness from "../../assets/images/loan-business.png";
import loanPersonal from "../../assets/images/loan-personal.png";

const loanTypes = [
  { id: 1, title: "Home Loan", image: loanHome },
  { id: 2, title: "Vehicle Loan", image: loanVehicle },
  { id: 3, title: "Gold Loan", image: loanGold },
  { id: 4, title: "Agriculture Loan", image: loanAgriculture },
  { id: 5, title: "Education Loan", image: loanEducation },
  { id: 6, title: "Business Loan", image: loanBusiness },
  { id: 7, title: "Personal Loan", image: loanPersonal },
];

function LoanCard({ title, image }) {
  return (
    <div className="flex-shrink-0 relative w-[85vw] sm:w-[320px] lg:w-[410px] h-[420px] sm:h-[460px] lg:h-[490px] rounded-[16px] overflow-hidden snap-start bg-[#DDDDDD] cursor-pointer">
      {image && (
        <img src={image} alt={title} className="w-full h-full object-cover" />
      )}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] lg:w-[379px] h-[65px] lg:h-[70px] rounded-[15px] border border-white flex items-center justify-center overflow-hidden z-20">
        <div className="absolute inset-0 bg-[#E60318]/40"></div>

        <span className="relative z-10 text-white font-bold text-[18px] sm:text-[20px] lg:text-[24px] uppercase tracking-wide text-center leading-none whitespace-nowrap">
          {title}
        </span>
      </div>
    </div>
  );
}

function LoanCards() {
  return (
    <section className="w-full lg:mt-[130px] lg:mb-[60px] bg-white overflow-hidden flex justify-center">
      {/* Center Wrapper */}
      <div className="w-full max-w-[1500px]">
        <div className="flex gap-[20px] lg:gap-[25px] overflow-x-auto overflow-y-hidden snap-x snap-mandatory items-center mx-18 lg:px-0 scrollbar-hide">
          {/* Left Spacer */}
          {/* <div className="flex-shrink-0 w-[10px] lg:w-[55px] h-full snap-start" /> */}

          {loanTypes.map((loan) => (
            <LoanCard key={loan.id} title={loan.title} image={loan.image} />
          ))}

          {/* Right Spacer */}
          {/* <div className="flex-shrink-0 w-[10px] lg:w-[55px] h-full" /> */}
        </div>
      </div>
    </section>
  );
}

export default LoanCards;

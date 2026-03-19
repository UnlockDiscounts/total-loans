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
    <div className="flex-shrink-0 relative w-[410px] h-[490px] rounded-[16px] overflow-hidden snap-start bg-[#DDDDDD] cursor-pointer">
      {/* Background Image */}
      {image && (
        <img src={image} alt={title} className="w-full h-full object-cover" />
      )}

      {/* Absolute Badge Overlay */}
      <div className="absolute top-[392px] left-[15px] w-[379px] h-[70px] rounded-[15px] border border-white flex items-center justify-center overflow-hidden z-20">
        {/* Semi-transparent Background overlay */}
        <div className="absolute inset-0 bg-[#E60318]/40"></div>

        {/* Badge Text */}
        <span className="relative z-10 text-white font-bold text-[24px] uppercase tracking-wide text-center leading-none">
          {title}
        </span>
      </div>
    </div>
  );
}

function LoanCards() {
  return (
    <section className="w-full lg:mt-[130px] lg:mb-[60px] lg:h-[490px] bg-white overflow-hidden">
      {/* Horizontal Scroll Container */}
      <div className="flex gap-[25px] overflow-x-auto no-scrollbar container overflow-y-hidden snap-x snap-mandatory h-full items-center">
        {/* Left Snap Spacer */}
        <div className="flex-shrink-0 lg:w-[55px] h-full snap-start" />

        {/* Loan Cards */}
        {loanTypes.map((loan) => (
          <LoanCard key={loan.id} title={loan.title} image={loan.image} />
        ))}

        {/* Right Snap Spacer */}
        <div className="flex-shrink-0 lg:w-[55px] h-full" />
      </div>
    </section>
  );
}

export default LoanCards;

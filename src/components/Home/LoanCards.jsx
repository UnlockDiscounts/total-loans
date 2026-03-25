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

function LoanCard({ title, image, index }) {
  const mobileWidthClass =
    index < 2 ? "w-[calc(100vw-2rem)]" : "w-[85vw]"

  return (
   
    <div
      className={`relative h-[240px] ${mobileWidthClass} flex-shrink-0 snap-start cursor-pointer overflow-hidden rounded-[16px] bg-[#DDDDDD] sm:h-[320px] sm:w-[320px] md:h-[420px] md:w-[320px] lg:h-[490px] lg:w-[410px]`}
    >
      {image && (
        <img src={image} alt={title} className="w-full h-full object-cover" />
      )}

      <div className="absolute bottom-3 left-1/2 z-20 flex h-[52px] w-[90%] -translate-x-1/2 items-center justify-center overflow-hidden rounded-[15px] border border-white sm:bottom-4 sm:h-[60px] md:h-[65px] lg:w-[379px] lg:h-[70px]">
        <div className="absolute inset-0 bg-[#E60318]/40"></div>

        <span className="relative z-10 px-2 text-center text-[13px] font-bold uppercase leading-none tracking-wide text-white sm:text-[16px] md:text-[20px] lg:text-[24px]">
          {title}
        </span>
      </div>
    </div>
  );
}

function LoanCards() {
  return (
    <section className="flex w-full justify-center overflow-hidden bg-white py-8 md:py-12 lg:mb-[60px] lg:mt-[80px]">
      <div className="w-full max-w-[1500px]">
        <div className="scrollbar-hide flex snap-x snap-mandatory items-center gap-3 overflow-x-auto overflow-y-hidden px-4 sm:gap-4 sm:px-6 md:gap-5 md:px-6 lg:gap-[25px] lg:px-0">
          {loanTypes.map((loan, index) => (
            <LoanCard
              key={loan.id}
              title={loan.title}
              image={loan.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LoanCards;

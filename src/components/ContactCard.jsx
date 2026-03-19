import heroImg from "../assets/image.png";

function ContactCard() {
  return (
    <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-6 rounded-[24px] bg-white px-6 py-8 shadow-[0_4px_20px_3px_rgba(179,195,255,0.3)] md:min-h-[365px] md:flex-row md:px-10">
      <div className="text-center md:text-left">
        <h3 className="mb-3 text-[26px] font-semibold leading-[34px] text-black md:text-[36px] md:leading-[48px] lg:text-[50px] lg:leading-[68px]">
          Prefer to Talk Directly?
        </h3>
        <p className="max-w-md text-sm text-slate-500 mb-5 md:text-base">
          We will be available to answer your questions and provide personalized
          assistance.
        </p>
        <button className="inline-flex items-center justify-center gap-[10px] rounded-[8px] bg-[#1E2A38] px-12 py-4 text-base font-medium text-white shadow-[0_4px_20px_rgba(0,0,0,0.25)] md:text-lg lg:text-[24px]">
          Call Us
        </button>
      </div>
      <div
        className="shrink-0 mt-4 md:mt-0 md:ml-6 flex justify-center"
        aria-hidden="true"
      >
        <img
          src={heroImg}
          alt=""
          role="presentation"
          className="w-40 md:w-52 h-auto"
        />
      </div>
    </div>
  );
}

export default ContactCard;

import { MdCall, MdOutlineMail } from "react-icons/md";
import { GoLocation } from "react-icons/go";

function Footer() {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <footer className="border-t border-slate-800 bg-[#263238] px-4 pb-6 pt-10 text-sm text-slate-100 sm:px-6 md:border-slate-200 md:bg-white md:pt-12 md:text-slate-500">
      <div className="mx-auto flex w-full max-w-[412px] flex-col gap-10 sm:max-w-[560px] sm:items-center sm:text-center md:max-w-[1280px] md:flex-row md:items-start md:justify-between md:gap-12 md:text-left">
        <div className="w-full max-w-sm sm:flex sm:flex-col sm:items-center md:items-start">
          <div className="mb-2 text-2xl font-semibold sm:text-[1.75rem] text-center sm:text-center md:text-left">
            <span className="text-white md:text-slate-900">Total</span>
            <span className="ml-1 text-rose-500">Loans</span>
          </div>
          <p className="mb-4 max-w-[28rem] text-sm leading-relaxed text-slate-200 md:text-slate-500 text-center sm:text-center md:text-left">
            We connect you with trusted banks to secure the right loan
            solution.
          </p>

          <form
            className="flex w-full max-w-sm items-center rounded-full bg-slate-900 py-1 pl-4 pr-1"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              className="mr-2 min-w-0 flex-1 bg-transparent text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose-500 text-lg text-white"
            >
              &#8594;
            </button>
          </form>
          <p className="mt-2 text-xs text-slate-400">
            Stay updated on loan offers and rates.
          </p>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-8 text-center md:grid-cols-3 md:gap-10 md:text-left">
          <div className="space-y-2 text-sm text-slate-200 md:text-slate-800">
            <h3 className="mb-3 text-sm font-semibold text-rose-500">
              Quick Links
            </h3>
            <a href="#" className="block hover:text-rose-500">
              Home
            </a>
            <a href="#" className="block hover:text-rose-500">
              Services
            </a>
            <a href="#" className="block hover:text-rose-500">
              About Us
            </a>
            <a href="#" className="block hover:text-rose-500">
              Contact Us
            </a>
          </div>

          <div className="space-y-2 text-sm text-slate-200 md:text-slate-800">
            <h3 className="mb-3 text-sm font-semibold text-rose-500">
              Loan Services
            </h3>
            <a
              href="/contact?subject=Personal Loan"
              className="block hover:text-rose-500"
            >
              Personal Loan
            </a>
            <a
              href="/contact?subject=Home Loan"
              className="block hover:text-rose-500"
            >
              Home Loan
            </a>
            <a
              href="/contact?subject=Business Loan"
              className="block hover:text-rose-500"
            >
              Business Loan
            </a>
            <a
              href="/contact?subject=Vehicle Loan"
              className="block hover:text-rose-500"
            >
              Vehicle Loan
            </a>
          </div>

          <div className="col-span-2 space-y-3 text-sm text-slate-200 flex flex-col items-center md:col-span-1 md:block md:text-slate-800">
            <h3 className="mb-3 text-sm font-semibold text-rose-500">
              Contact Info
            </h3>
            <div className="flex items-start justify-center gap-2 md:justify-start">
              <GoLocation className="mt-0.5 inline-flex h-4 w-4 shrink-0" />
              <p>
                Kirloskar Layout, Near Chimney Hills,
                <br />
                Bangalore, Karnataka - 560057
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <MdCall className="inline-flex h-4 w-4 shrink-0" />
              <a href="tel:+919019742795" className="hover:text-rose-500">
                +91 90197 42795
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <MdOutlineMail className="inline-flex h-4 w-4 shrink-0" />
              <a
                href="mailto:info@totalloans.in"
                className="break-all hover:text-rose-500 sm:break-normal"
              >
                info@totalloans.in
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 w-full max-w-[412px] border-t border-slate-700 pt-4 text-center text-xs text-slate-400 sm:max-w-[560px] md:max-w-[1280px] md:border-slate-200">
        {"\u00A9"} 2026 Total Loans. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer

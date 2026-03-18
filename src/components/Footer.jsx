import { MdCall, MdOutlineMail } from "react-icons/md";
import { GoLocation } from "react-icons/go";

function Footer() {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <footer className="border-t border-slate-200 bg-white px-4 md:px-6 pt-10 pb-6 text-sm text-slate-500">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 md:flex-row">
        <div className="max-w-xs">
          <div className="mb-2 text-2xl font-semibold">
            <span className="text-slate-900">Total</span>
            <span className="ml-1 text-rose-500">Loans</span>
          </div>
          <p className="mb-4 text-xs leading-relaxed text-slate-500">
            We connect you with trusted banks to secure the right loan
            solution.
          </p>

          <form
            className="flex max-w-xs items-center rounded-full bg-slate-900 pl-4 pr-1 py-1"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              className="mr-2 flex-1 bg-transparent text-xs text-slate-100 placeholder:text-slate-400 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose-500 text-white text-lg"
            >
              &#8594;
            </button>
          </form>
          <p className="mt-2 text-[11px] text-slate-400">
            Stay updated on loan offers and rates.
          </p>
        </div>

        <div className="flex flex-1 flex-col gap-8 text-left md:flex-row md:justify-evenly">
          <div className="space-y-2 text-xs text-slate-800">
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

          <div className="space-y-2 text-xs text-slate-800">
            <h3 className="mb-3 text-sm font-semibold text-rose-500">
              Loan Services
            </h3>
            <a href="#" className="block hover:text-rose-500">
              Personal Loan
            </a>
            <a href="#" className="block hover:text-rose-500">
              Home Loan
            </a>
            <a href="#" className="block hover:text-rose-500">
              Business Loan
            </a>
            <a href="#" className="block hover:text-rose-500">
              Vehicle Loan
            </a>
          </div>

          <div className="space-y-2 text-xs text-slate-800">
            <h3 className="mb-3 text-sm font-semibold text-rose-500">
              Contact Info
            </h3>
            <div className="mb-2 flex items-center gap-2">
              <GoLocation className="inline-flex h-4 w-4 shrink-0 " />
              <p>
                HSR Layout, Bengaluru - 560102
                <br />
                Karnataka, India
              </p>
            </div>
            <div className="mb-2 flex items-center gap-2">
              <MdCall className="inline-flex h-4 w-4 shrink-0 " />
              <a href="tel:+918045678901" className="hover:text-rose-500">
                +91 80 4567 8901
              </a>
            </div>
            <div className="mb-2 flex items-center gap-2">
              <MdOutlineMail className="inline-flex h-4 w-4 shrink-0 " />
              <a
                href="mailto:info@totalloans.in"
                className="hover:text-rose-500"
              >
                info@totalloans.in
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-6 w-full max-w-[1280px] border-t border-slate-200 pt-4 text-center text-[11px] text-slate-400">
        © 2026 Total Loans. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer

function ContactFormBlock() {
  return (
    <div className="flex h-full flex-1 flex-col rounded-[16px] bg-[#FACDD1] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-6">
      <h3 className="text-center font-semibold text-slate-900 mb-4">
        Send us a Message
      </h3>
      <form
        className="flex flex-1 flex-col gap-3"
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="flex flex-col gap-1 text-left">
          <label
            htmlFor="fullName"
            className="text-xs font-medium text-slate-900"
          >
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Riya Sharma"
            className="w-full rounded-md border border-rose-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-300"
          />
        </div>
        <div className="flex flex-col gap-1 text-left">
          <label
            htmlFor="email"
            className="text-xs font-medium text-slate-900"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="riya@example.com"
            className="w-full rounded-md border border-rose-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-300"
          />
        </div>
        <div className="flex flex-col gap-1 text-left">
          <label
            htmlFor="phone"
            className="text-xs font-medium text-slate-900"
          >
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+91 9999999999"
            className="w-full rounded-md border border-rose-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-300"
          />
        </div>
        <div className="flex flex-col gap-1 text-left">
          <label
            htmlFor="subject"
            className="text-xs font-medium text-slate-900"
          >
            Subject
          </label>
          <select
            id="subject"
            defaultValue=""
            className="w-full rounded-md border border-rose-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-300"
          >
            <option value="" disabled>
              Select Subject
            </option>
            <option>Personal Loan</option>
            <option>Home Loan</option>
            <option>Business Loan</option>
            <option>Vehicle Loan</option>
          </select>
        </div>
        <div className="flex flex-col gap-1 text-left">
          <label
            htmlFor="message"
            className="text-xs font-medium text-slate-900"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={3}
            placeholder="Tell us how we can help you..."
            className="min-h-[72px] w-full rounded-md border border-rose-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-300"
          />
        </div>
        <button
          type="submit"
          className="mt-2 w-full rounded-lg bg-rose-500 px-4 py-2.5 text-sm font-medium text-white shadow-sm"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default ContactFormBlock

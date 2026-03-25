function OfficeHoursCard() {
  return (
    <div className="w-full rounded-[1.75rem] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-[1px] shadow-[0_18px_40px_rgba(15,23,42,0.18)]">
      <div className="flex w-full flex-col gap-4 rounded-[calc(1.75rem-1px)] bg-white/95 p-5 backdrop-blur sm:p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 3" />
            </svg>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900 sm:text-base">
              Office Hours
            </h4>
            <p className="text-xs text-slate-500">Available for calls and visits</p>
          </div>
        </div>

        <div className="grid gap-3 text-sm text-slate-700">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-medium text-slate-900">Monday - Friday</span>
              <span className="text-rose-600">9:00 AM - 6:00 PM</span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-medium text-slate-900">Saturday</span>
              <span className="text-rose-600">10:00 AM - 4:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfficeHoursCard

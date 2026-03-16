function OfficeHoursCard() {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-4 rounded-2xl border-t-8 border-[#1E2A38] bg-white p-6 shadow-[0_4px_20px_rgba(96,165,250,0.2)]">
      <h4 className="text-sm font-semibold text-slate-900 md:text-base">
        Office Hours
      </h4>
      <div className="w-full space-y-1 text-xs text-slate-600 md:text-sm">
        <div className="flex justify-between">
          <span>Monday - Friday:</span>
          <span>9:00 AM - 6:00 PM</span>
        </div>
        <div className="flex justify-between">
          <span>Saturday:</span>
          <span>10:00 AM - 4:00 PM</span>
        </div>
      </div>
    </div>
  )
}

export default OfficeHoursCard

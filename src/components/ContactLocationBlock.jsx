import OfficeHoursCard from "./OfficeHoursCard"

function ContactLocationBlock() {
  return (
    <div className="flex h-full flex-1 flex-col rounded-[16px] bg-[#ffffff] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-6">
      <h3 className="mb-4 text-center font-semibold text-slate-900">
        Find us here
      </h3>
      <div className="relative mb-4 flex-1 min-h-[280px] overflow-hidden rounded-2xl">
        <iframe
          title="TotalLoans location on map"
          src="https://www.google.com/maps?q=HSR%20Layout%20Bengaluru%20560102&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[280px] w-full border-0"
        />
      </div>

      <OfficeHoursCard />
    </div>
  )
}

export default ContactLocationBlock

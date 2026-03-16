import ContactCard from './ContactCard'
import ContactHeader from './ContactHeader'
import ContactFormBlock from './ContactFormBlock'
import ContactLocationBlock from './ContactLocationBlock'

function ContactSection() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-white py-12 md:py-16 px-4">
      <div className="mx-auto w-full max-w-[1280px] space-y-8">
        <ContactHeader />
        <ContactCard />
  <div className="flex flex-col gap-6 md:flex-row md:gap-6">
          <ContactFormBlock />
          <ContactLocationBlock />
        </div>
      </div>
    </section>
  )
}

export default ContactSection

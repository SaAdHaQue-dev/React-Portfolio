import { services } from '../../data/services'
import ServiceItem from '../ui/ServiceItem'
import Reveal from '../ui/Reveal'

export default function Services() {
  return (
    <section aria-label="Design services" className="mx-auto w-full max-w-[1240px] px-6 pb-16 pt-4 sm:px-8 md:pb-20">
      <Reveal>
        <div className="border-t border-[#BDBFB8] pt-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-0">
            {services.map((service) => (
              <ServiceItem key={service.id} {...service} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

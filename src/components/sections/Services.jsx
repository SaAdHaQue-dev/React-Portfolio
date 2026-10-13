import { services } from '../../data/services'
import ServiceItem from '../ui/ServiceItem'

export default function Services() {
  return (
    <section aria-label="Design services" className="mx-auto w-full max-w-[1200px] px-[22px] pb-12 md:px-8 md:pb-16">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-0">
        {services.map((service) => <ServiceItem key={service.title} {...service} />)}
      </div>
    </section>
  )
}

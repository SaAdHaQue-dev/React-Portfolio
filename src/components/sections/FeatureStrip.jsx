import { features } from '../../data/features'
import FeatureItem from '../ui/FeatureItem'

export default function FeatureStrip() {
  return (
    <section className="bg-[#0d1b3d] py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {features.map((feature) => (
            <FeatureItem key={feature.title} title={feature.title} text={feature.text} />
          ))}
        </div>
      </div>
    </section>
  )
}

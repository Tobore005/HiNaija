import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section className="flexCenter flex-col overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image src="/phone.png" alt="phone" width={440} height={1000} className="feature-phone" />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image src="/camp.svg" alt="camp" width={50} height={50} className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]" />
            <h2 className="bold-40 lg:bold-64">Featured Locations</h2>
          </div>
          <ul className="mt-10 grid gap-6 sm:gap-8 md:grid-cols-2 lg:gap-10">
            {FEATURES.map((feature) => (
              <FeatureItem key={feature.title} title={feature.title} icon={feature.icon} description={feature.description} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="group flex w-full flex-1 flex-col items-start rounded-2xl bg-white/80 p-6 backdrop-blur shadow-md ring-1 ring-gray-10/60 transition-all hover:shadow-xl hover:-translate-y-0.5">
      <div className="rounded-2xl bg-gradient-to-br from-green-50 to-blue-70 p-4 text-white">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
        {title}
      </h2>
      <p className="regular-16 mt-4 text-gray-30">
        {description}
      </p>
    </li>
  )
}

export default Features
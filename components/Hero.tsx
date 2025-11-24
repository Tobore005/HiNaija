import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="relative">
      <div className="hero-map" />

      <div className="max-container padding-container flex flex-col gap-16 py-14 xl:flex-row">
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
          <Image
            src="/camp.svg"
            alt="camp"
            width={50}
            height={50}
            className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
          />
          <h1 className="bold-52 lg:bold-83 bg-gradient-to-r from-green-50 to-blue-70 bg-clip-text text-transparent">
            Explore Nigeria, One Adventure at a Time
          </h1>
          <p className="regular-16 mt-6 text-gray-30 xl:max-w-[560px]">
            From the rolling hills of Obudu to the waterfalls of Enugu, we bring Nigeria's most stunning destinations right to your fingertips. Plan your next getaway, discover hidden gems, and explore nature, all in one app
          </p>

          <div className="my-10 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              {Array(5)
                .fill(1)
                .map((_, index) => (
                  <Image src="/star.svg" key={index} alt="star" width={22} height={22} />
                ))}
            </div>
            <p className="bold-16 lg:bold-20 text-blue-70">
              40k
              <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row">
            <Button type="button" title="Download App" variant="btn_green" />
            <Button type="button" title="Explore Naija" icon="/play.svg" variant="btn_white_text" />
          </div>
        </div>

        <div className="relative flex flex-1 items-start justify-center xl:justify-end">
          <div className="relative z-20 flex w-[300px] flex-col gap-6 rounded-3xl bg-white/80 px-7 py-8 backdrop-blur shadow-xl ring-1 ring-gray-10/60">
            <div className="flex flex-col">
              <div className="flexBetween">
                <p className="regular-16 text-gray-20">Location</p>
                <Image src="/close.svg" alt="close" width={24} height={24} />
              </div>
              <p className="bold-20">Cross Rivers</p>
            </div>

            <div className="flexBetween">
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">Distance</p>
                <p className="bold-20">173.28 km</p>
              </div>
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">Elevation</p>
                <p className="bold-20">2.32 km</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
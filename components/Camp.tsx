import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div className={`relative h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-90/60 to-transparent lg:rounded-r-5xl 2xl:rounded-5xl" />
      <div className="relative flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-white/90 backdrop-blur p-4 shadow-md">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-gray-10">{subtitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white/70"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite 
          backgroundImage="bg-bg-img-1"
          title="Obudu Mountain Resort"
          subtitle="Cross Rivers, Nigeria"
          peopleJoined="120+ Joined"
        />
        <CampSite 
          backgroundImage="bg-bg-img-2"
          title="Awhum Waterfall"
          subtitle="Enugu, Nigeria"
          peopleJoined="30+ Joined"
        />

         <CampSite 
          backgroundImage="bg-bg-img-2"
          title="Olumo Rock"
          subtitle=" Abeokuta, Nigeria"
          peopleJoined="95+ Joined"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-r from-green-50 to-blue-70 p-8 text-white lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize">
            <strong>Explore Nigeria,</strong> One Adventure at a Time.
          </h2>
          <p className="regular-14 xl:regular-16 mt-5">
            From the rolling hills of Obudu to the waterfalls of Enugu, we bring Nigeria's most stunning destinations right to your fingertips. Plan your next getaway, discover hidden gems, and explore nature, all in one app.
          </p>
          <Image src="/quote.svg" alt="camp-2" width={186} height={219} className="camp-quote" />
        </div>
      </div>
    </section>
  )
}

export default Camp
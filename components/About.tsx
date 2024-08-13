'use client';
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="mt-10 sm:mt-10 md:mt-20 xl:mt-28">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-center md:flex-row  xl:items-center xl:gap-8">
          {/* img */}
          <div className="flex-1 relative xl:h-[400px] mb-6">
            <Image src={'/assets/about/hotelabout1.jpg'} width={600} height={400} objectFit="cover" alt="" />
          </div>
          {/* text */}
          <div className="xl:max-w-[700px] md:max-w-[600px] flex-1 md:pl-6">
            <h2 className="h2 xl:mb-[38px] md:mb-[10px] sm:mb-[6px]">About Hotel</h2>
            <p className="mb-10 md:mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis expedita, voluptatem quis quas hic officiis unde quos similique accusamus a ad dignissimos enim iure commodi molestiae optio! Optio, nam animi.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
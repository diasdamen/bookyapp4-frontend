'use client';
import Image from "next/image";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const reviewsData = [
  {
    avatar: '/assets/reviews/avatar-1.png',
    name: 'Richard Thompson',
    job: 'Hotel Manager',
    review: 
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem repellendus culpa ipsum odio, vitae eos!',
  },
  {
    avatar: '/assets/reviews/avatar-2.png',
    name: 'Evelyn Anderson',
    job: 'Hotel Director',
    review: 
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem repellendus culpa ipsum odio, vitae eos!',
  },
  {
    avatar: '/assets/reviews/avatar-3.png',
    name: 'John Doe',
    job: 'Marketing Manager',
    review: 
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem repellendus culpa ipsum odio, vitae eos!',
  },
  {
    avatar: '/assets/reviews/avatar-4.png',
    name: 'Michael Nataniel',
    job: 'CEO',
    review: 
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem repellendus culpa ipsum odio, vitae eos!',
  },
  {
    avatar: '/assets/reviews/avatar-5.png',
    name: 'David Bergman',
    job: 'Hotel Manager',
    review: 
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem repellendus culpa ipsum odio, vitae eos!',
  },
  {
    avatar: '/assets/reviews/avatar-6.png',
    name: 'Katy Walsh',
    job: 'Administrator',
    review: 
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem repellendus culpa ipsum odio, vitae eos!',
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-16 mb-12">
      <div className="container mx-auto">
        {/* image & title */}
        <div className='flex flex-col items-center'>
          {/* image */}
          <div className='relative w-[82px] h-[20px]'>
            <Image src={'/assets/heading-icon.svg'} fill alt='' className='object-cover' />
          </div>
          <h2 className='h2 mb-8'>Reviews</h2>
        </div>
        {/* slider */}
        <Swiper 
          slidesPerView={1} 
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="h-[350px]"
        >
          {reviewsData.map((person, index)=> {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      {/* image */}
                      <Image 
                        src={person.avatar} 
                        width={70} 
                        height={70} 
                        alt="" 
                        priority 
                      />
                      {/* name */}
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
  
    </section>
  )
}

export default Reviews
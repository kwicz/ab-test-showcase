'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function SocialProofControl({ variant }: { variant: boolean }) {
  return (
    <section
      id='socialProofControl'
      className='flex flex-col justify-center gap-12 w-full py-16 bg-[#fcf3ec]'
    >
      <div className='grid gap-6 max-w-screen-lg w-full justify-center m-auto px-4'>
        <h2 className='align-baseline [&_a]:underline [&_a:hover]:no-underline text-[calc(1rem_*_1.5)] md:text-[calc(1rem_*_1.9375)] lg:text-[calc(1rem_*_2.125)] !text-[#2c2926] !text-[34px] md:!text-[44px] !font-bold md:!leading-[56px] text-center'>
          Treat yourself to five delicious flavors
        </h2>
        <h3 className='align-baseline [&_a]:underline [&_a:hover]:no-underline text-[calc(1rem_*_1.25)] md:text-[calc(1rem_*_1.375)] lg:text-[calc(1rem_*_1.5)] !text-[#2c2926] !text-lg !font-bold md:!font-normal text-center'>
          We put abundance in a bag. All you have to do is add water.
        </h3>
        <div className='grid justify-center'>
          <button className='inline-flex items-center gap-x-[5px] disabled:opacity-70 [&_svg]:fill-current transition-all duration-[0.2s] rounded-[5px] disabled:pointer-events-none focus-visible:duration-0 focus-visible-2 p-0 justify-center relative max-h-[50px] max-w-[244px] w-full text-lg font-bold 3xl:text-[25px] 3xl:max-w-[342px] bg-neutral-700 hover:bg-neutral-600 border-neutral-700 text-white cursor-pointer px-11 py-[18px] !rounded-[50px] border text-center !text-lg !font-bold font-primary !leading-[18px]'>
            <div className='contents'>Shop Now</div>
          </button>
        </div>
      </div>
      <div className='max-w-screen-lg w-full justify-center m-auto md:px-4'>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {[
            {
              src: 'https://cdn.sanity.io/images/oe59ey5f/production/7cb5092ecd6d76499368097ae47a3ea53ee2c43b-887x1103.png',
              alt: 'Chocolate',
            },
            {
              src: 'https://cdn.sanity.io/images/oe59ey5f/production/5106392ecc2ec8257f5fff4fd3093f6e1f15aa8c-887x1103.png',
              alt: 'Vanilla',
            },
            {
              src: 'https://cdn.sanity.io/images/oe59ey5f/production/9c02a30e72a9f2feadafe41869f6199a225c9488-887x1103.png',
              alt: 'Chia',
            },
            {
              src: 'https://cdn.sanity.io/images/oe59ey5f/production/3e41fe5b2b4e6b5467744660b807ce8c615a439c-887x1103.png',
              alt: 'Matcha',
            },
            {
              src: 'https://cdn.sanity.io/images/oe59ey5f/production/16e0a1d2f2b8fbb82874e228e18fb52f7216b74f-887x1103.png',
              alt: 'Coconut Acai',
            },
          ].map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image.src}
                alt={image.alt}
                width={200}
                height={250}
                className='mx-2'
                loading='lazy'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

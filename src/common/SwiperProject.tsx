import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import Image, { StaticImageData } from "next/image";

const SwiperProject = ({
  imgData,
}: {
  imgData: (string | { src: StaticImageData; alt?: string })[];
}) => {
  return (
    <section className="py-12">
      <div className="container">
        <Swiper
          // Enable Navigation and Pagination modules
          modules={[Navigation, Pagination]}
          // Configure Navigation and Pagination options (optional)
          navigation={true}
          pagination={{ type: "fraction" }}
          className="h-96 w-full rounded-lg"
        >
          {imgData.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src={(img as unknown as { src: string }).src}
                  alt={(img as { alt: string }).alt}
                  className="block h-full w-full object-cover"
                  width={0}
                  height={0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SwiperProject;

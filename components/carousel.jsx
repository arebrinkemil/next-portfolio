import * as React from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ItemCarousel({ content }) {
  return (
    <Carousel className="w-[90%]">
      <CarouselContent className="-ml-1">
        {content.map((item, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <p>{item}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export function VidCarousel({ content }) {
  return (
    <Carousel className=" w-[60%] lg:w-[90%]">
      <CarouselContent className="-ml-1">
        {content.map((item, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/4 ">
            <div className="p-1">
              <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${item}`}
                title={`YouTube Video ${index + 1}`}
                allowFullScreen
              ></iframe>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export function ImageCarousel({ content }) {
  return (
    <Carousel className="w-[60%] lg:w-[90%]">
      <CarouselContent className="-ml-1 ">
        {content.map((item, index) => (
          <CarouselItem
            key={index}
            className="pl-1 md:basis-1/2 lg:basis-1/3 rounded-lg "
          >
            <div className="p-1">
              <Image
                src={item.src}
                alt={`Image ${index + 1}`}
                width={item.width}
                height={item.height}
                placeholder="blur"
                blurDataURL={item.blurDataURL}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

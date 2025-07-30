"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function Slider({ images }) {
   const autoplayOptions = {
      delay: 3000 + Math.floor(Math.random() * 3) * 1000, // delay عشوائي بين 3 و 5 ثواني  ||   // ← الوقت بين كل سلايد بالـ milliseconds (4000 = 4 ثواني)
      stopOnInteraction: false,
      stopOnMouseEnter: true,
   };

   const [emblaRef] = useEmblaCarousel({ loop: true }, [
      Autoplay(autoplayOptions),
   ]);

   return (
      <div className="embla overflow-hidden" ref={emblaRef}>
         <div className="embla__container flex">
            {images.map((projectImage, i) => (
               <div
                  key={i}
                  className="w-full relative h-[350px] overflow-hidden rounded-[12px] shrink-0"
               >
                  <Image
                     priority
                     src={projectImage}
                     alt={`Project Image ${i}`}
                     fill
                     quality={100}
                     className=" group-hover:scale-[1.1]  transition-all duration-[0.4s] rounded-[12px]"
                  />
               </div>
            ))}
         </div>
      </div>
   );
}

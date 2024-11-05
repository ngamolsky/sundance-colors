"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { MAIN_IMAGE_QUERYResult } from "@/sanity/types";

interface ImageCarouselProps {
  images: MAIN_IMAGE_QUERYResult;
}

const INTERVAL_TIME = 10000;

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length);
    }, INTERVAL_TIME);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0">
      {images.map((image, index) => (
        <div
          key={image._id}
          className="absolute inset-0 h-full w-full transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(${100 * (index - currentIndex)}%)`,
          }}
        >
          <Image
            src={urlFor(image.mainImage).url()}
            alt={image.mainImage.alt || "Background image"}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}

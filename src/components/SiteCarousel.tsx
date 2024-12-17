"use client"; // For Next.js App Router

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

export function SiteCarousel() {
  const slides: Slide[] = [
    {
      image: "/bg.jpg",
      title: "Create a sustainable future.",
      subtitle: "The Farmers Smart Companion",
      buttonText: "Learn More",
      buttonLink: "/about",
    },
    {
      image: "/bg2.jpg",
      title: "Empower Growth.",
      subtitle: "Smart solutions for modern farmers.",
      buttonText: "Explore Now",
      buttonLink: "/store",
    },
    {
      image: "/bg3.jpg",
      title: "Innovate for Tomorrow.",
      subtitle: "Tools to revolutionize agriculture.",
      buttonText: "Read More",
      buttonLink: "/blog",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Next slide function
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  // Previous slide function
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto slide functionality using useEffect
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5000ms

    // Clean up interval when component unmounts or on update
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run only once on mount

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slide Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url('${slides[currentIndex].image}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Slide Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          {slides[currentIndex].title}
        </h1>
        <p className="text-xl md:text-2xl mb-6">{slides[currentIndex].subtitle}</p>
        <Button
          asChild
          className="bg-zinc-900 text-white hover:bg-zinc-800"
        >
          <a href={slides[currentIndex].buttonLink}>{slides[currentIndex].buttonText}</a>
        </Button>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white text-3xl font-bold"
        aria-label="Previous Slide"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white text-3xl font-bold"
        aria-label="Next Slide"
      >
        &#8594;
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              i === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

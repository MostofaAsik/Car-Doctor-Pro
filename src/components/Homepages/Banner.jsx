'use client';
import { useState } from "react";

const Banner = () => {
    const slides = [
        {
            id: 1,
            title: "Affordable Price For Car Servicing",
            description: "There are many variations of passages of available, but the majority have suffered alteration in some form",
            image: "/assets/images/banner/1.jpg",
        },
        {
            id: 2,
            title: "Affordable Price For Car Servicing",
            description: "There are many variations of passages of available, but the majority have suffered alteration in some form",
            image: "/assets/images/banner/2.jpg",
        },
        {
            id: 3,
            title: "Affordable Price For Car Servicing",
            description: "There are many variations of passages of available, but the majority have suffered alteration in some form",
            image: "/assets/images/banner/3.jpg",
        },
        {
            id: 4,
            title: "Affordable Price For Car Servicing",
            description: "There are many variations of passages of available, but the majority have suffered alteration in some form",
            image: "/assets/images/banner/4.jpg",
        },
        {
            id: 5,
            title: "Affordable Price For Car Servicing",
            description: "There are many variations of passages of available, but the majority have suffered alteration in some form",
            image: "/assets/images/banner/5.jpg",
        },
        {
            id: 6,
            title: "Affordable Price For Car Servicing",
            description: "There are many variations of passages of available, but the majority have suffered alteration in some form",
            image: "/assets/images/banner/6.jpg",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
            {/* Slide */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-500 object-cover"
                style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
                <h1 className="text-2xl md:text-5xl font-extrabold mb-3 leading-tight">
                    {slides[currentIndex].title}
                </h1>
                <p className="text-sm md:text-lg lg:text-xl mb-5 leading-relaxed">
                    {slides[currentIndex].description}
                </p>
                <div className="space-y-2 sm:space-x-4 sm:space-y-0">
                    <button className="w-full sm:w-auto px-6 py-2 text-sm md:text-base font-semibold bg-orange-600 hover:bg-orange-700 rounded-md text-white">
                        Discover More
                    </button>
                    <button className="w-full sm:w-auto px-6 py-2 text-sm md:text-base font-semibold bg-gray-600 hover:bg-gray-700 rounded-md text-white">
                        Latest Project
                    </button>
                </div>
            </div>

            {/* Carousel Controls */}
            <div className="absolute right-4 bottom-4 flex items-center space-x-2">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-500"
                            } cursor-pointer`}
                    ></div>
                ))}
            </div>
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
            >
                &#8249;
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
            >
                &#8250;
            </button>
        </div>
    );
};

export default Banner;

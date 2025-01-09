'use client';

import ServiceCard from "../Cards/ServiceCard";
import { services } from "@/lib/services";


const Services = () => {


    return (
        <div className="py-10 px-6 md:py-16 md:px-12 lg:px-20 bg-gray-50">
            {/* Intro Section */}
            <div className="text-center max-w-3xl mx-auto mb-10">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h1>
                <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
                    We provide a wide range of professional car services to meet all your needs.
                    From maintenance to major repairs, our experienced team ensures top-notch quality and customer satisfaction.
                </p>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                    <ServiceCard
                        key={service.id}
                        service={service}

                    />
                ))}
            </div>
        </div>
    );
};

export default Services;

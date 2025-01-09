'use client';

const About = () => {
    return (
        <div className="relative w-full py-10 px-6 md:py-16 md:px-12 lg:py-20 lg:px-20 bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Image Section */}
                <div className="relative flex justify-center items-center">
                    <div className="relative w-3/4 h-56 md:h-80 lg:h-96 rounded-lg shadow-md">
                        <img
                            src="/assets/images/about_us/person.jpg"
                            alt="Image 1"
                            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-md"
                        />
                    </div>
                    <div className="absolute -bottom-6 right-0 w-1/2 h-44 md:h-60 lg:h-72 rounded-lg shadow-md">
                        <img
                            src="/assets/images/about_us/parts.jpg"
                            alt="Image 2"
                            className="absolute w-full h-full object-cover rounded-lg shadow-md"
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className="text-center md:text-left">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">
                        About Our Services
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-6 leading-relaxed">
                        We provide exceptional services for your needs. Our team of
                        professionals is dedicated to ensuring your satisfaction with
                        quality solutions and timely delivery. Whether you're looking for
                        repairs, maintenance, or new installations, we have you covered.
                    </p>
                    <button className="px-6 py-2 text-sm md:text-base btn btn-primary hover:bg-orange-700 text-white rounded-md shadow-md">
                        Get More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;

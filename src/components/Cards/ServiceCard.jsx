'use client';

const ServiceCard = ({ service }) => {
    const { title, price, img } = service
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
                src={img}
                alt={title}
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{title
                }</h2>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                    Price: ${price}
                </p>
                <button className="px-6 py-1 btn btn-primary text-white rounded-md hover:bg-orange-700 transition-colors">
                    Details
                </button>
            </div>
        </div>
    );
};

export default ServiceCard;

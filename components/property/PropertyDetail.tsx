import { PropertyProps } from "@/interfaces/index";
import Image from "next/image";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({
	property,
}) => {
	// Fallback values in case API data is incomplete
	const {
		name = "Property Name",
		rating = 0,
		address = { city: "Unknown City", country: "Unknown Country" },
		image = "/placeholder-property.jpg",
		description = "No description available",
		category = [],
		// Add any other fallbacks needed for your original props
	} = property || {};

	return (
		<div className="container mx-auto p-6">
			{/* Header Section */}
			<div className="mb-6">
				<h1 className="text-4xl font-bold">{name}</h1>
				<div className="flex items-center space-x-4 mt-2">
					<div className="flex items-center">
						<FaStar className="text-yellow-500 mr-1" />
						<span>{rating.toFixed(1)}</span>
					</div>
					<div className="flex items-center text-gray-600">
						<FaMapMarkerAlt className="mr-1" />
						<span>
							{address.city}, {address.country}
						</span>
					</div>
				</div>
			</div>

			{/* Image Grid - Now handles both single image and multiple images */}
			<div className="grid grid-cols-2 gap-4 mt-4">
				<div className="col-span-2">
					<div className="relative w-full h-96 rounded-lg overflow-hidden">
						<Image
							src={image}
							alt={name}
							layout="fill"
							objectFit="cover"
							priority
						/>
					</div>
				</div>
				{/* Additional images can be added here if available in API data */}
			</div>

			{/* Description Section */}
			<div className="mt-8">
				<h2 className="text-2xl font-semibold mb-4">Description</h2>
				<p className="text-gray-700 whitespace-pre-line">{description}</p>
			</div>

			{/* Amenities Section */}
			<div className="mt-8">
				<h2 className="text-2xl font-semibold mb-4">What this place offers</h2>
				<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					{category.map((amenity, index) => (
						<li
							key={index}
							className="flex items-center space-x-2 bg-gray-100 p-3 rounded-md"
						>
							<span className="text-green-500">✓</span>
							<span>{amenity}</span>
						</li>
					))}
				</ul>
			</div>

			{/* Booking Section */}
			<div className="mt-8 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
				<h2 className="text-xl font-semibold mb-4">Book your stay</h2>
				{/* Booking form or call-to-action would go here */}
				<button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition duration-200">
					Check Availability
				</button>
			</div>
		</div>
	);
};

export default PropertyDetail;

import React from 'react'
import { Link } from 'react-router'

interface TripCardProps {
  id: number;
  name: string;
  imageUrls: string[];
  itinerary: { location: string }[];
  tags: string[];
  travelStyle: string;
  estimatedPrice: string;
}

const TripCard: React.FC<TripCardProps> = ({
  name,
  imageUrls,
  itinerary,
  tags,
  travelStyle,
  estimatedPrice
}) => {
  return (
    <Link to="/ai-trips" className="block">
      <div className="trip-card hover:shadow-lg transition-shadow duration-200 cursor-pointer">
        <img src={imageUrls[0]} alt={`${name} destination`} />
        <article>
          <h2>{name}</h2>
          <div className="flex flex-col gap-2 mt-3">
            <figure className="info-pill flex items-center gap-2">
              <img src="/assets/icons/location-mark.svg" alt="location" className="size-4 flex-shrink-0" />
              <figcaption className="text-sm text-gray-600 truncate">{itinerary[0]?.location}</figcaption>
            </figure>
            <figure className="info-pill flex items-center gap-2">
              <img src="/assets/icons/users.svg" alt="travel style" className="size-4 flex-shrink-0" />
              <figcaption className="text-sm text-gray-600 truncate">{travelStyle}</figcaption>
            </figure>
            <div className="flex flex-wrap gap-1 mt-2">
              {tags.slice(0, 2).map((tag, index) => (
                <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
        <div className="tripCard-pill">{estimatedPrice}</div>
      </div>
    </Link>
  )
}

export default TripCard

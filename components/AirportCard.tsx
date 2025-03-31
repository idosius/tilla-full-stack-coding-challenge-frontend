import Airport from '../types/airport'
import Link from 'next/link'

type AirportCardProps = {
  airport: Airport
}

export default function AirportCard({airport}: AirportCardProps) {
  return (
    <Link
      className="flex flex-col justify-between gap-2 p-5 text-gray-800 border border-gray-200 rounded-lg shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-200 focus:outline-none"
      href={`/airports/${airport.iata.toLowerCase()}`}
      key={airport.iata}
    >
      <span>
        {airport.name}, {airport.city}
      </span>
      <span className="text-gray-500">{airport.country}</span>
    </Link>
  )
}
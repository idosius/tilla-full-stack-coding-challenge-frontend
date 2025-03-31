import { NextPage } from 'next'
import { useState } from 'react'

import Layout from '../components/layout'
import useApiData from '../hooks/use-api-data'
import Airport from '../types/airport'
import AirportCard from '../components/AirportCard'
import ResultsCount from '../components/ResultsCount'

const Page: NextPage = () => {
  const [query, setQuery] = useState<string>('')

  const airports = useApiData<Airport[]>(`/api/airports/${query}`, [], [query])

  return (
    <Layout>
      <h1 className="text-2xl mb-10 font-bold">Code Challenge: Airports</h1>

      <div className="relative shadow-sm">
        <input
          type="text"
          name="query"
          id="query"
          className="focus:ring-blue-600 focus:border-blue-600 block w-full sm:text-sm border-gray-300 text-gray-800 rounded bg-gray-50 p-3"
          placeholder="Search by name, IATA, city, or country"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <h2 className="flex gap-2 items-center mt-10 mb-5 text-xl font-semibold">Airports
        {airports.length > 0 && (
          <ResultsCount count={airports.length} />
        )}
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {airports.map((airport) => (
          <AirportCard airport={airport} key={airport.iata} />
        ))}
      </div>
    </Layout>
  )
}

export default Page

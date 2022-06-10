import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { ALL_CONTRIES } from '../config'
import CountryList from '../components/CountryList'
import Card from '../components/Card'
import Controls from '../components/Controls'
import { useNavigate } from 'react-router-dom'

const HomePage = ({ countries, setCountries }) => {
  const [filteredCountries, setFilteredCountries] = useState(countries)
  const navigate = useNavigate()

  const handleSearch = (search, region) => {
    let data = [...countries]

    if (region) {
      data = data.filter((country) => country.region.includes(region))
    }

    if (search) {
      data = data.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase()),
      )
    }

    setFilteredCountries(data)
  }

  useEffect(() => {
    if (!countries.length)
      axios.get(ALL_CONTRIES).then(({ data }) => setCountries(data))
  }, [])

  return (
    <>
      <Controls onSearch={handleSearch}/>
      <CountryList>
        {filteredCountries.map((c) => {
          const countryInfo = {
            img: c.flags.png,
            countryName: c.name.common,
            info: [
              {
                title: 'Population',
                description: c.population.toLocaleString(),
              },
              {
                title: 'Capital',
                description: c.capital[0],
              },
              {
                title: 'Region',
                description: c.region,
              },
            ],
          }

          return (
            <Card
              key={c.name.common}
              onClick={() => {
                navigate(`/country/${c.name.common}`)
                console.log()
              }}
              {...countryInfo}
            />
          )
        })}
      </CountryList>
    </>
  )
}

export default HomePage

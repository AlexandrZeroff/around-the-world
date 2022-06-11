import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { SEARCH_BY_COUNTRY } from '../config'
import { Button } from '../components/Button'
import Info from '../components/Info'

const Details = () => {
  const { name } = useParams()
  const navigate = useNavigate()
  const [country, setCountry] = useState(null)

  useEffect(() => {
    axios.get(SEARCH_BY_COUNTRY(name)).then(({ data }) => setCountry(data[0]))
  }, [name])

  //console.log(country)

  const goBack = () => navigate(-1)

  return (
    <div>
      <Button onClick={goBack}>
        <IoArrowBack />
        Back
      </Button>
      {country && <Info {...country} />}
    </div>
  )
}

export default Details

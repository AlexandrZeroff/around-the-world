import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Details = () => {

  const { name } = useParams()
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div>
      {name}
    </div>
  )
}

export default Details
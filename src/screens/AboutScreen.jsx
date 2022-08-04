import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

const AboutScreen = () => {
  const [details, setDetails] = useState({})
  const {pokemon} = useParams()
  console.log(details)
  console.log("About")

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((res) => {
      setDetails(res.data)
    })
  },[])
  if(details.name) {

  
  return (

    <div>
      <h1>About</h1>
      <h2>{details?.stats[0]?.base_stat} {details?.stats[0]?.stat.name}</h2>
      {/* <img src={details.sprites.other["official-artwork"]} alt="" /> */}
    </div>
  )
} else {
  return <h1>Loading</h1>
}
}

export default AboutScreen
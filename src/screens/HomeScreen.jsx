import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const HomeScreen = () => {
  const [userInput, setUserInput] = useState("")
  const navigate = useNavigate()
  console.log("Home")

  const handleClick = () => {
    navigate(`/about/${userInput}`)
  }

  return (
    <div>
      <h1>HomeScreen</h1>
      <input onChange={(e) => setUserInput(e.target.value)} />
      <button onClick={handleClick}>Send me elsewhere</button>
    </div>
  )
}

export default HomeScreen
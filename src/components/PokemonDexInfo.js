import React, { useEffect, useState } from "react"

export default function PokemonDexInfo({ id }) {
  const [pokemonDexInfo, setPokemonDexInfo] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      .then((res) => res.json())
      .then(
        (data) => {
          setPokemonDexInfo(data)
          setIsLoaded(true)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  } 
  else {
    return (
    <div className="container text-center">
      <h1>Dex Info</h1>
      <p>
        {(pokemonDexInfo.flavor_text_entries.find(entry => entry.language.name === "es")).flavor_text}
      </p>      
    </div>
    )  
  }

  
}

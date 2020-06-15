import React, { useEffect, useState } from "react"
import PokemonDexInfo from "./PokemonDexInfo"

export default function PokemonInfo({ location }) {
  const { id, name, url } = location.state
  const [pokemonInfo, setPokemonInfo] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (data) => {
          setPokemonInfo(data)
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
      <h1>{name}</h1>
      <p>Numero de dex del pokemon: {id}</p>
      <p>Experiencia base: {pokemonInfo.base_experience}</p>
      <p>Altura: {pokemonInfo.height}</p>
      <p>
      Tipos: {pokemonInfo.types.map(type => type.type.name) }
      </p>
      
      <h1>Sprites</h1>
      
      <div className="row row-cols-1 row-cols-md-2">
        
        <div className="col">
          <h2> Normal </h2>
          <img
            className="card-img-top"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            alt={name}
          />
        </div>

        <div className="col">
          <h2> Shiny </h2>
          <img
            className="card-img-top"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`}
            alt={name}
          />
        </div>

      </div>
      <PokemonDexInfo id={id} />
    </div>
    )  
  }

  
}

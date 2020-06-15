import React, { useEffect, useState } from "react"
import PokemonListItem from "./PokemonListItem"

export default function PokemonListWithHooks() {
  const [pokemonList, setPokemonList] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=156&offset=493")
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true)
          setPokemonList(data.results)
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
  } else {
    return (
      <div className="row row-cols-1 row-cols-md-3">
        {pokemonList.map((pokemon) => {
          const { url, name } = pokemon
          const id = url
            .split("/")
            .filter((el) => !!el)
            .pop()
          return (
            <div key={url} className="col mb-4">
              <PokemonListItem id={id} name={name} url={url} />
            </div>
          )
        })}
      </div>
    )
  }
}

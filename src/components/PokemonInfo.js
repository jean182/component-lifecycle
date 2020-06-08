import React from "react"

export default function PokemonInfo({ location }) {
  const { id, name, url } = location.state
  return (
    <div className="container">
      <h1>{name}</h1>
      <p>Numero de dex del pokemon: {id}</p>
      <p>
        Endpoint original:
        <a href={url}> {url}</a>
      </p>
      <p>
        La info del dex esta en este endpoint:
        <a href={`https://pokeapi.co/api/v2/pokemon-species/${id}`}>
          {" "}
          {`https://pokeapi.co/api/v2/pokemon-species/${id}`}
        </a>
      </p>
      <p>
        Hacer que este componente muestre la información del pokemon, su info
        del pokedex y el o los tipos ademas de su sprite
      </p>
      <p>Se pueden hacer subcomponentes para mostrar la info</p>
    </div>
  )
}

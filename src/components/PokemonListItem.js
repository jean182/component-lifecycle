import { capitalize } from "lodash"
import React from "react"
import { Link } from "react-router-dom"

const PokemonListItem = ({ id, name, url }) => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
      />
      <div className="card-body">
        <h5 className="card-title">{capitalize(name)}</h5>
        <Link
          to={{
            pathname: `/pokemon/${id}`,
            state: {
              id,
              name,
              url,
            },
          }}
          className="btn btn-primary"
        >
          View Data
        </Link>
      </div>
    </div>
  )
}

export default PokemonListItem

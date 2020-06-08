import React from "react"
import PokemonListWithClass from "../components/PokemonListWithClass"

export default function PokemonListClassPage() {
  return (
    <div className="container">
      <h1 className="display-4">Poke List using classes</h1>
      <PokemonListWithClass />
    </div>
  )
}

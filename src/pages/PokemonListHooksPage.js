import React from "react"
import PokemonListWithHooks from "../components/PokemonListWithHooks"

export default function PokemonListHooksPage() {
  return (
    <main role="main" className="flex-shrink-0">
      <div className="container">
        <h1 className="display-4">Poke List using hooks</h1>
        <PokemonListWithHooks />
      </div>
    </main>
  )
}

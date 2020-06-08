import React from "react"
import { Link } from "react-router-dom"

export default function HomePage() {
  return (
    <main role="main" className="flex-shrink-0">
      <div className="container mt-2">
        <div className="jumbotron bg-danger">
          <div className="container">
            <h1 className="display-4 custom-jumbotron-title">Pokemon</h1>
            <p className="lead text-white">
              Lista de todos los pokemon de Kanto.
            </p>
            <Link
              className="btn btn-warning btn-lg mr-2"
              to="pokemon-list-class"
              role="button"
            >
              Con clases
            </Link>
            <Link
              className="btn btn-warning btn-lg"
              to="pokemon-list-hooks"
              role="button"
            >
              Con hooks
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

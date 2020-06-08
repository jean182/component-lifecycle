import React from "react"
import PokemonListItem from "./PokemonListItem"

class PokemonListWithClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      pokemon: [],
    }
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => res.json())
      .then(
        (response) => {
          this.setState({
            isLoaded: true,
            pokemon: response.results,
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          })
        }
      )
  }

  render() {
    const { error, isLoaded, pokemon } = this.state
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
          {pokemon.map((pokemon) => {
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
}

export default PokemonListWithClass

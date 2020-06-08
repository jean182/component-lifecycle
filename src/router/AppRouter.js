import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Header from "../components/Header"
import PokemonListClassPage from "../pages/PokemonListClassPage"
import PokemonListHooksPage from "../pages/PokemonListHooksPage"
import PokemonInfo from "../components/PokemonInfo"

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/pokemon-list-class" exact>
          <PokemonListClassPage />
        </Route>
        <Route path="/pokemon/:id" component={PokemonInfo} />
        <Route path="/pokemon-list-hooks">
          <PokemonListHooksPage />
        </Route>
      </Switch>
    </Router>
  )
}

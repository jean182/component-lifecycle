import React, { useState, useLayoutEffect } from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
  const [toggle, setToggle] = useState(false)
  const [collapsedNav, setCollapsedNav] = useState("collapse")

  useLayoutEffect(() => {
    setCollapsedNav("collapse")
  }, [toggle])

  const handleClick = () => {
    setCollapsedNav("collapsing")
    setToggle((currenToggleState) => !currenToggleState)
  }

  const collapsedButton = toggle ? "" : "collapsed"
  const show = toggle ? "show" : ""

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <Link className="navbar-brand custom-navbar-brand" to="/">
          Poke App
        </Link>
        <button
          className={`navbar-toggler ${collapsedButton}`}
          onClick={handleClick}
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded={toggle}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`navbar-collapse ${collapsedNav} ${show}`}
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <NavLink
              className="nav-item nav-link"
              activeClassName="active"
              to="/pokemon-list-class"
            >
              Pokemon List /w Class
            </NavLink>
            <NavLink
              className="nav-item nav-link"
              activeClassName="active"
              to="/pokemon-list-hooks"
            >
              Pokemon List /w Hooks
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  )
}

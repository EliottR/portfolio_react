import React from "react"
import { NavLink } from "react-router-dom"
import { Spring } from "react-spring"

const Header = () => {

  const handleClick = () => {
    console.log('oui');
    window.scrollTo(0, 0)
  }

  return (
    <div className="header">
      <Spring
        from={{ opacity: 0, marginTop: -500 }}
        to={{ opacity: 1, marginTop: 0 }}
      >
        {(props) => (
          <div style={props} className="header_content">
            <div className="header_content_navigation">
              <NavLink exact to="/" activeClassName="nav-active">
                Accueil
              </NavLink>
              <NavLink exact to="profile" activeClassName="nav-active" onClick={handleClick}>
                Profil
              </NavLink>
              <NavLink exact to="projects" activeClassName="nav-active">
                Projets
              </NavLink>
              <NavLink exact to="contact" activeClassName="nav-active">
                Contact
              </NavLink>
            </div>
            <span></span>
          </div>
        )}
      </Spring>
    </div>
  )
}

export default Header

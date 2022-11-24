import { NavLink } from 'react-router-dom'
import './index.css'

const NavMenu = () => {
  let activeStyle = {
    textDecoration: 'underline',
  }

  return (
    <nav className="navMenu">
      <ul className="navMenu__nav">
        <li className="navMenu__navItem">
          <NavLink
            className="navMenu__navLink"
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Create Employee
          </NavLink>
        </li>
        <li className="navMenu__navItem">
          <NavLink
            className="navMenu__navLink"
            to="/listemployee"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Current Employees
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavMenu

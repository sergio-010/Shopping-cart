import { NavLink } from 'react-router-dom'
import logo from '../../../assets/react.svg'

export const NavBar = () => {
    return (
        <nav className="w-[200px] h-[100vh] sticky top-0 bg-gray-800 text-white flex flex-col items-center gap-4">
            <img className="w-20 h-20 pt-4" src={logo} alt="" />
            <ul className="flex flex-col items-center justify-center gap-4">
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-500' : ''}>Shopping</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : ''}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/users" className={({ isActive }) => isActive ? 'text-blue-500' : ''}>Users</NavLink>
                </li>
            </ul>
        </nav>

    )
}

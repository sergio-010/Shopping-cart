import { NavLink } from 'react-router-dom'
import logo from '../../../assets/react.svg'
import { FaShoppingCart } from 'react-icons/fa'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/ShoppingContext'



export const NavBar = () => {
    const shoppingCart = useContext(ShoppingCartContext)
    return (
        <nav className="min-w-[200px] h-[100vh] sticky top-0 bg-gray-800 text-white flex flex-col items-center gap-4">
            <img className="w-20 h-20 pt-4" src={logo} alt="" />
            <ul className="flex flex-col items-center justify-center gap-4">
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-500' : ''}>Shopping</NavLink>
                </li>
                <li>
                    <NavLink to="/pokemons" className={({ isActive }) => isActive ? 'text-blue-500' : ''}>Pokemons</NavLink>
                </li>
                <li>
                    <NavLink to="/users" className={({ isActive }) => isActive ? 'text-blue-500' : ''}>Users</NavLink>
                </li>
                <li>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center relative">
                        <FaShoppingCart size={24} color="black" />
                        <span className='w-4 h-4 bg-red-500 rounded-full text-white text-sm 
                        absolute -top-1 -right-1 flex justify-center items-center'>{shoppingCart.products.length}</span>
                    </div>
                </li>
            </ul>
        </nav>

    )
}

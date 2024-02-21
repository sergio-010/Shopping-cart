import { NavLink } from 'react-router-dom';
import logo from '../../../assets/react.svg';
import { FaShoppingCart } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { ShoppingCartContext } from '../../context/ShoppingContext';
import { TbLayoutNavbarExpandFilled } from 'react-icons/tb';
import { IoExitOutline } from 'react-icons/io5';
import { CartModal } from '../modals/CartModal';


export const NavBar = () => {
    const [open, setOpen] = useState(false);
    const shoppingCart = useContext(ShoppingCartContext);

    const handleCartClick = () => {
        setOpen(prevState => !prevState);
    };

    return (
        <div className='w-full  sticky top-0 left-0 '>
            <div className='items-center justify-between bg-slate-700 py-4 md:px-10 md:flex px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <NavLink to='/'><img src={logo} className='w-10 h-10' alt="Logo" /></NavLink>
                </div>

                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {open ? <IoExitOutline size={24} color="white" /> : <TbLayoutNavbarExpandFilled size={24} color="white" />}
                </div>
                <ul className={`md:flex md:items-center md:pb-0 absolute md:static bg-green-500 md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9  ${open ? 'top-12' : 'top-[-490px]'}`}>
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <NavLink to='/?category=jewelery' className='text-white hover:text-red-500'>JOYAS</NavLink>
                    </li>
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <NavLink to={`/?category=electronics`} className='text-white hover:text-red-500'>Electronics</NavLink>
                    </li>
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        {shoppingCart.products.length > 0 &&
                            <button className='text-white hover:text-red-500' onClick={handleCartClick}>
                                <div className="w-10 h-10 rounded-full flex items-center justify-center relative">
                                    <FaShoppingCart size={24} color="black" />
                                    <span className='w-4 h-4 bg-red-500 rounded-full text-white text-sm absolute -top-1 -right-1 flex justify-center items-center'>{shoppingCart.products.length}</span>
                                </div>
                            </button>
                        }
                    </li>
                </ul>
            </div>
            {open && <CartModal onClose={handleCartClick} />}
        </div>
    );
};

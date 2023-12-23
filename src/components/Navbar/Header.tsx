
import Logo from '../../assets/logo-white.png'
import { BsSearch } from 'react-icons/bs'
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react';
import { FiShoppingBag } from 'react-icons/fi'
import { GrFormClose } from 'react-icons/gr'
import { RxHamburgerMenu } from 'react-icons/rx'
import useMediaQuery from '../../hooks/useMediaQuery';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from "../../slices/userApiSlice";
import { logout } from '../../slices/authSlice';

type Props = {

    isTopOfPage: boolean

}


const Header = ({ isTopOfPage }: Props) => {

    const { cartItems } = useSelector((state: any) => state.cart)
    const { userInfo } = useSelector((state: any) => state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [logoutApiCall] = useLogoutMutation()

    const logoutHandler = async () => {
        try {
            await logoutApiCall({}).unwrap()
            dispatch(logout())
            closeDropDown()
            navigate('/login')
        } catch (error) {
            console.log(error);

        }

    }





    const flexBetween = "flex items-center justify-between"
    const textHover = "transition duration-500 hover:text-red-300"
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? "" : "bg-primary-400";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)

    const closeDropDown = () => {
        const element: any = document.activeElement;
        if (element) {
            element?.blur();
        }
    }


    return (
        <nav>
            <div className={`${navbarBackground} fixed top-0 z-30 w-full py-3 bg-primary-200 `}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className='flex gap-10'>
                        <div className='flex items-center gap-3'>
                            <div className='w-[40px]'>
                                <img src={Logo} alt="Logo" />
                            </div>
                            <Link to="/">
                                <span className='text-sm font-bold hover:text-white transition-all'>Tech Store</span>
                            </Link>
                        </div>

                        <div className='hidden md:flex cursor-pointer text-[12px] items-center gap-6 ml-2'>
                            <div className="form-control">
                                <div className="input-group">
                                    <select className="select">
                                        <option>All</option>
                                        <option>Gaming-Console</option>
                                        <option>Laptops</option>
                                        <option>Phones</option>
                                    </select>
                                    <input type="text" placeholder="Search…" className="input" />
                                    <button className="btn btn-square">
                                        <BsSearch />
                                    </button>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='flex text-sm gap-6'>
                        {isAboveMediumScreens ? (
                            <>




                                {userInfo ? <>
                                    {userInfo.isAdmin && (
                                        <Link className={`${textHover} flex items-center gap-1 text-white`} to={"/admin/orders"}>
                                            Admin
                                        </Link>
                                    )}
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="text-white cursor-pointer">{userInfo.name}</label>
                                        <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                            <li onClick={closeDropDown}><Link to="/user/my-orders">My orders</Link></li>
                                            <li onClick={closeDropDown}><Link to="/user">My profile</Link></li>
                                            <li onClick={logoutHandler}><button>Logout</button></li>
                                        </ul>

                                    </div>
                                    <Link className={` flex items-center gap-1 text-white`} to={"/cart"}>
                                        <FiShoppingBag />
                                        Cart
                                        {cartItems.length > 0 && <span className='badge ml-2'>{cartItems.reduce((a: any, c: any) => a + c.qty, 0)}</span>}
                                    </Link>
                                </> :
                                    <>
                                        <Link className={` flex items-center gap-1 text-white`} to={"/login"}>
                                            Login
                                        </Link>
                                        <Link className={` flex items-center gap-1 text-white`} to={"/cart"}>
                                            <FiShoppingBag />
                                            Cart
                                            {cartItems.length > 0 && <span className='badge ml-2'>{cartItems.reduce((a: any, c: any) => a + c.qty, 0)}</span>}
                                        </Link>
                                    </>
                                }
                            </>
                        ) :
                            <button className='z-20' onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                {isMenuToggled ? "" : <RxHamburgerMenu className='text-[26px] cursor-pointer' />}
                            </button>

                        }


                    </div>
                </div>
                {!isAboveMediumScreens && isMenuToggled && (
                    <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-white drop-shadow-xl'>
                        <div className='flex justify-end p-12'>
                            <button className='text-3xl' onClick={() => setIsMenuToggled(!isMenuToggled)}><GrFormClose /></button>
                        </div>

                        <div onClick={() => setIsMenuToggled(!isMenuToggled)} className='flex flex-col items-center gap-10 text-2xl'>
                            {userInfo ? <>

                                <Link className={textHover} to={"/"}>
                                    Home
                                </Link>
                                <Link onClick={() => setIsMenuToggled(!isMenuToggled)} className={textHover} to={"/product-list"}>
                                    Catalogue
                                </Link>
                                <Link className={`${textHover} flex items-center gap-1`} to={"/cart"}>
                                    <FiShoppingBag />
                                    Cart
                                    {cartItems.length > 0 && <span className='badge ml-2'>{cartItems.reduce((a: any, c: any) => a + c.qty, 0)}</span>}
                                </Link>
                                <Link onClick={() => setIsMenuToggled(!isMenuToggled)} className={textHover} to={"/user/my-orders"}>My Orders</Link>
                                <Link onClick={() => setIsMenuToggled(!isMenuToggled)} className={textHover} to={"/user"}>My Profile</Link>

                                {userInfo.isAdmin && (
                                    <Link className={`${textHover} flex items-center gap-1`} to={"/admin/orders"}>
                                        Admin
                                    </Link>
                                )}
                                <Link onClick={logoutHandler} className={`${textHover} flex items-center gap-1`} to={"/admin/orders"}>

                                    Logout
                                </Link>
                            </> :
                                <>
                                    <Link className={textHover} to={"/"}>
                                        Home
                                    </Link>
                                    <Link onClick={() => setIsMenuToggled(!isMenuToggled)} className={textHover} to={"/product-list"}>
                                        Catalogue
                                    </Link>
                                    <Link className={`${textHover} flex items-center gap-1`} to={"/login"}>
                                        Login
                                    </Link>
                                    <Link className={`${textHover} flex items-center gap-1`} to={"/cart"}>
                                        <FiShoppingBag />
                                        Cart
                                        {cartItems.length > 0 && <span className='badge ml-2'>{cartItems.reduce((a: any, c: any) => a + c.qty, 0)}</span>}
                                    </Link>
                                </>
                            }

                        </div>


                    </div>
                )}
            </div>

        </nav>
    )
};
export default Header;

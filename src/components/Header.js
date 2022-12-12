import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { Row, NavDropdown, ButtonGroup, Dropdown, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { addToCart, removeFromCart } from '../actions/cartActions'
import { logout } from '../actions/userActions'
import SearchBox from './SearchBox'


const Header = () => {

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }


    return (

        <>
            <header className="header">
                <div className="top_bar">
                    <div className="top_bar_container">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="top_bar_content d-flex flex-row align-items-center justify-content-start">
                                        <ul className="top_bar_contact_list">
                                            <li><div className="question">Have any questions?</div></li>
                                            <li>
                                                <i className="fa fa-phone" aria-hidden="true"></i>
                                                <div>001-1234-88888</div>
                                            </li>
                                            <li>
                                                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                                <div>info.newyou@gmail.com</div>
                                            </li>
                                        </ul>
                                        <div className="top_bar_login ml-auto">

                                            <div className="login_button">
                                                {userInfo ? (
                                                    <Link to="/login">John's Profile</Link>
                                                ) : (
                                                    <Link to="/login">Register or Login</Link>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="header_container">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="header_content d-flex flex-row align-items-center justify-content-start">
                                    <div className="logo_container">
                                        <Link to="/">
                                            <div className="logo_text">New<span>You</span></div>
                                        </Link>
                                    </div>
                                    <nav className="main_nav_contaner ml-auto">
                                        <ul className="main_nav">
                                            <li className="active"><Link to="/">Home</Link></li>
                                            <li><Link to="/about">About</Link></li>
                                            <li><Link to="/shop">Courses</Link></li>
                                            <li><Link to="/blog">Blog</Link></li>
                                            <li><Link to="/contact">Contact</Link></li>
                                        </ul>
                                        <div className="search_button">
                                            <i className="fa fa-search" aria-hidden="true"></i>
                                        </div>

                                        {/* <!-- Hamburger --> */}

                                        <div className="shopping_cart">
                                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                            <span className='ml-2 bg-light h6 p-1 rounded-circle'>{cartItems.reduce((acc, item) => acc + item.qty, 10)}</span>
                                        </div>
                                        {userInfo && userInfo.isAdmin && (
                                            <Dropdown focusFirstItemOnShow="true" className='ml-2' as={ButtonGroup} drop="start">
                                                <Dropdown.Toggle split variant="light" id="dropdown-button-drop-start" />
                                                <Button variant="light shopping_cart">
                                                    John Doe
                                                    <i className="ml-2 fa fa-sign-out" onClick={logoutHandler} aria-hidden="true"></i>
                                                </Button>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item to="#/action-1"><Link to="#" className='text-dark'>Users</Link></Dropdown.Item>
                                                    <Dropdown.Item to="#/action-3"><Link to="#" className='text-dark'>Orders</Link></Dropdown.Item>
                                                    <Dropdown.Item to="#/action-2"><Link to="#" className='text-dark'>ProductList</Link></Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        )}
                                        <div className="hamburger menu_mm">
                                            <i className="fa fa-bars menu_mm" aria-hidden="true"></i>
                                        </div>
                                    </nav>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="header_search_container">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="header_search_content d-flex flex-row align-items-center justify-content-end">
                                    <SearchBox />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Menu */}

            <div className="menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400">
                <div className="menu_close_container"><div className="menu_close"><div></div><div></div></div></div>
                <div className="search">
                    <form className="header_search_form menu_mm">
                        <input type="search" className="search_input menu_mm" placeholder="Search" required="required" />
                        <button className="header_search_button d-flex flex-column align-items-center justify-content-center menu_mm">
                            <i className="fa fa-search menu_mm" aria-hidden="true"></i>
                        </button>
                    </form>
                </div>
                <nav className="menu_nav">
                    <ul className="menu_mm">
                        <li className="menu_mm"><Link to="index">Home</Link></li>
                        <li className="menu_mm"><Link to="#">About</Link></li>
                        <li className="menu_mm"><Link to="#">Courses</Link></li>
                        <li className="menu_mm"><Link to="#">Blog</Link></li>
                        <li className="menu_mm"><Link to="#">Page</Link></li>
                        <li className="menu_mm"><Link to="contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </>

    )
}

export default Header

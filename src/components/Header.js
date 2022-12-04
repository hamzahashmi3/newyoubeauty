import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { Row, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import SearchBox from './SearchBox'
import { addToCart, removeFromCart } from '../actions/cartActions'
import { logout } from '../actions/userActions'


function Header() {

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
                                            <div className="login_button"><Link to="/login">Register or Login</Link></div>
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
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="#">More</a></li>
                                            <li><Link to="/contact">Contact</Link></li>
                                        </ul>
                                        <div className="search_button"><i className="fa fa-search" aria-hidden="true"></i></div>

                                        {/* <!-- Hamburger --> */}

                                        <div className="shopping_cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
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
                                    <form action="#" className="header_search_form">
                                        <input type="search" className="search_input" placeholder="Search" required="required" />
                                        <button className="header_search_button d-flex flex-column align-items-center justify-content-center">
                                            <i className="fa fa-search" aria-hidden="true"></i>
                                        </button>
                                    </form>
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
                    <form action="#" className="header_search_form menu_mm">
                        <input type="search" className="search_input menu_mm" placeholder="Search" required="required" />
                        <button className="header_search_button d-flex flex-column align-items-center justify-content-center menu_mm">
                            <i className="fa fa-search menu_mm" aria-hidden="true"></i>
                        </button>
                    </form>
                </div>
                <nav className="menu_nav">
                    <ul className="menu_mm">
                        <li className="menu_mm"><a href="index.html">Home</a></li>
                        <li className="menu_mm"><a href="#">About</a></li>
                        <li className="menu_mm"><a href="#">Courses</a></li>
                        <li className="menu_mm"><a href="#">Blog</a></li>
                        <li className="menu_mm"><a href="#">Page</a></li>
                        <li className="menu_mm"><a href="contact.html">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header


// This was the Current Header comment to add new one

{/* <div className="Home">
<div className="humberger__menu__overlay"></div>
    <header className="header">
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="header__top__left">
                            <ul>
                                <li>
                                    <i className="fa fa-envelope"></i>
                                    <Link className="text-primary"> sheikhsalman@msn.com </Link>
                                </li>
                                <li>Free Shipping for all Order of $99</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="header__top__right">
                        
                            <div className="header__top__right__social">
                                <Link to="#">
                                    <i className="fa fa-facebook"></i>
                                </Link>
                                <Link to="#">
                                    <i className="fa fa-twitter"></i>
                                </Link>
                                <Link to="#">
                                    <i className="fa fa-linkedin"></i>
                                </Link>
                                <Link to="#">
                                    <i className="fa fa-pinterest-p"></i>
                                </Link>
                            </div>
                             <div className="header__top__right__language">
                                <img src="images/language.png" alt="" />
                                <div>English</div>
                            </div>
                            
                            <Row className="header__top__right__auth">
                            {userInfo ? (
                            <NavDropdown title={userInfo.name} id='username'>
                                <LinkContainer to='/profile'>
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>

                                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                            </NavDropdown>
                            ) : (
                                <LinkContainer to='/login'>
                                    <Nav.Link><i className="fa fa-user"></i>Login</Nav.Link>
                                </LinkContainer>
                            )}
                                                

                            {userInfo && userInfo.isAdmin && (
                            <NavDropdown title='Admin' id='adminmenue'>
                                <LinkContainer to='/admin/userlist'>
                                    <NavDropdown.Item>Users</NavDropdown.Item>
                                </LinkContainer>

                                <LinkContainer to='/admin/productlist'>
                                    <NavDropdown.Item>Products</NavDropdown.Item>
                                </LinkContainer>

                                <LinkContainer to='/admin/orderlist'>
                                    <NavDropdown.Item>Orders</NavDropdown.Item>
                                </LinkContainer>

                            </NavDropdown>
                        )}
                        </Row>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="header__logo">
                        <Link to="/">
                            <img src="images/logo.png" alt="logo" />
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6">
                    <nav className="header__menu">
                        <ul>
                            <li className="active">
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/shop">Shop</Link>
                            </li>
                            {/* <li>
                                <Link to="#">Pages</Link>
                                <ul className="header__menu__dropdown">
                                    <li>
                                        <Link to="/shop_details">Shop Details</Link>
                                    </li>
                                    <li>
                                        <Link to="/shop_cart">Shoping Cart</Link>
                                    </li>
                                    <li>
                                        <Link to="/checkout">Check Out</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog_details">Blog Details</Link>
                                    </li>
                                </ul>
                            </li> */}
{/*<li>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-3">
                    <div className="header__cart">
                        <ul>
                            <li>
                                <Link to="#">
                                    <i className="fa fa-heart"></i>
                                    <span>0</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="cart">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span>{cartItems.reduce((acc, item) => acc + item.qty, 0)}</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="humberger__open">
                <i className="fa fa-bars"></i>
            </div>
        </div>
    </header>
</div> */}

// Current Header....



{/* <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>ProShop</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <SearchBox />
                        <Nav className="ml-auto">

                            <LinkContainer to='/cart'>
                                <Nav.Link ><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                            </LinkContainer>

                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>

                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                                </NavDropdown>
                            ) : (
                                    <LinkContainer to='/login'>
                                        <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                                    </LinkContainer>
                                )}


                            {userInfo && userInfo.isAdmin && (
                                <NavDropdown title='Admin' id='adminmenue'>
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/productlist'>
                                        <NavDropdown.Item>Products</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/orderlist'>
                                        <NavDropdown.Item>Orders</NavDropdown.Item>
                                    </LinkContainer>

                                </NavDropdown>
                            )}


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header> */}


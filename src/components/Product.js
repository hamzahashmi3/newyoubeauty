import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'


function Product({ product }) {

    return (

        <div className="col-lg-4 course_col">
            <div className="course">
                <div className="course_image"><img src={product.image} alt={product.name} /></div>
                <div className="course_body">
                    <h3 className="course_title"><Link to={`/product/${product._id}`}>{product.name}</Link></h3>
                    <div className="course_teacher">Mr. John Taylor</div>
                    <div className="course_text">
                        <p>{product.description}</p>
                    </div>
                </div>
                <div className="course_footer">
                    <div className="course_footer_content d-flex flex-row align-items-center justify-content-start">
                        <div className="course_info">
                            <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                            <span>20 Student</span>
                        </div>
                        <div className="course_info">
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <span>5 Ratings</span>
                        </div>
                        <div className="course_price ml-auto"><Link to={`/product/${product._id}`}>{product.price}</Link></div>
                    </div>
                </div>
            </div>
        </div>



        // <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
        //     <div className="featured__item">
        //         <div className="featured__item__pic set-bg" data-setbg={product.image}>
        //             <img src={product.image} alt={product.name} />
        //             <ul className="featured__item__pic__hover">
        //                 <li><a><i className="fa fa-heart"></i></a></li>
        //                 <li><a><i className="fa fa-retweet"></i></a></li>
        //                 <li><Link to={`/product/${product._id}`}><i className="fa fa-shopping-cart"></i></Link></li>
        //             </ul>
        //         </div>
        //         <div className="featured__item__text">
        //             <h6><Link to={`/product/${product._id}`}> { product.name } </Link></h6>
        //             <h5>${product.price}</h5>
        //         </div>
        //     </div>
        // </div>

    )
}

export default Product



{/* <Card className="my-3 p-3 rounded">
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} />
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as="div">
                    <div className="my-3">
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                    </div>
                </Card.Text>


                <Card.Text as="h3">
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card> */}

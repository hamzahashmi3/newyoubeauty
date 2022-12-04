import React, { Component } from 'react'


function Latestproducts({ latestproducts }) {

return (

<div>
        <div className="latest-product__slider owl-carousel">
            <div className="latest-prdouct__slider__item">
                <a href="#" className="latest-product__item">
                    <div className="latest-product__item__pic">
                        <img src={latestproducts.image} alt={latestproducts.name} />
                    </div>
                    <div className="latest-product__item__text">
                        <h6>{latestproducts.name}</h6>
                        <span>${latestproducts.price}</span>
                    </div>
                </a>
            </div>
            
        </div>
</div>
        )
    }

export default Latestproducts;

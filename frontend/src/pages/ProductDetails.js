// import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ProductCard from '../components/ProductCard'
import ProductCategoryCard from '../components/ProductCategoryCard'


class ProductDetails extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <ProductCategoryCard />
                    {
                        [1].map((item) => {
                            console.log("i am here at=>", item);
                            return (
                                < ProductCard key={item} />
                            );
                        })
                    }


                </div>
            </div>
        )
    }
}



export default ProductDetails
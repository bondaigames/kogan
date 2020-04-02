import React, { Fragment } from 'react'
import ProductItem from "../product/product-item/product-item.component"

const Product = ({collection}) => {
    const objects = Object.keys(collection).length > 0 ? collection: [];
    const products = objects.map((item, index) => {
        return <ProductItem item={item} key={index} />
     })
    return (
        <Fragment>
            {products}
        </Fragment>
    )
}

export default Product;
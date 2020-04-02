import React, { Fragment, useEffect, useState } from 'react'
import Product from '../../components/product/product.component';

const BASE_URL = `http://cors-anywhere.herokuapp.com/http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com`;

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const [currentPage, setCurrentPage] = useState("/api/products/1")

    useEffect(() => {
        // console.log(currentPage);
        loadData(currentPage);
    },[])

    const loadData = (path) => {
        fetch(`${BASE_URL}${path}`)
        .then(res => res.json())
        .then(res => {
            const productList = [...products, ...res.objects];
            setProducts(productList);
            setCurrentPage(res.next);
        }).catch(() => setError(true));
    }

    const loadMoreClicked = (e) => {
        e.preventDefault();
        console.log(currentPage);
        if (currentPage !== null)
            loadData(currentPage)
    }

    const loadPageElement = <div className="text-center">
                                <button className="btn btn-secondary btn-lg" 
                                        type="button" 
                                        onClick={loadMoreClicked}>Load more
                                </button>
                            </div>

    const hasNextPage = currentPage && loadPageElement

    return error ? "There are some errors." : (
        <Fragment>
            <Product collection={products}></Product>
            {hasNextPage}
        </Fragment>
    )
}

export default HomePage;
import React, { Component } from 'react';

import ProductInformation from './ProductInformation';



class AllProducts extends Component {

    constructor(props) {
        super(props);
        this.state = { productList: [] }

    }

    componentDidMount() {

        fetch("http://localhost:3004/api/products").then(respuesta => {
            return respuesta.json()
        }).then(products => {

            console.log(products);
            this.setState({ productList: products.data })

        })
            .catch(error => console.log(error))
    }


    render() {
        return (
            <>
                <div className=" aligns-items-center container-fluid ">
                <div className="row">
                {this.state.productList.map((product, index) => {
                    return <ProductInformation  {...product} key={index} />
                })
            }
                </div>
                </div>
                </>
        )
    }
}

export default AllProducts;

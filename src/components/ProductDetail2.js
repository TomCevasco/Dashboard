import React, { Component } from 'react';
/* import imagenFondo from '../assets/images/mandalorian.jpg'; */
import LastProductInDb from './LastProductInDb';


class ProductDetail2 extends Component {

    constructor(props) {
        super(props);
        this.state = { productList: [] }

    }

    componentDidMount() {

        fetch("http://localhost:3004/api/products/productDetail/2").then(respuesta => {
            return respuesta.json()
        }).then(product => {

console.log("Holaaaaa------------------------------------------");
            console.log(product.data);
            this.setState({ productList: product.data })

        })
            .catch(error => console.log(error))
    }

    render(){ 
        return (
    
       <React.Fragment>
   
   <div className="col-lg-6 mb-4">
            {
										 <LastProductInDb  {...this.state.productList} key={this.state.productList.id} />
									
								}

 </div>
       </React.Fragment>
   
    

              )  

}
}

export default ProductDetail2;
 
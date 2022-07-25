// import { render } from '@testing-library/react';
import React, { Component } from 'react';
/* import { useState, useEffect } from "react" */

import Marca from './Marca';


/* import noPoster from '../assets/images/no-poster.jpg'; */

class Marcas extends Component {

	constructor(props) {
		super(props);
		this.state = { Marcas: [] }

	}

	componentDidMount() {

		fetch("http://localhost:3004/api/products/marcas/listado").then(respuesta => {
			return respuesta.json()
		}).then(marcas => {

			console.log(marcas);
			this.setState({ Marcas: marcas.Marcas })

		})
			.catch(error => console.log(error))
	}
    render(){ 

  /*   {  marcas.map((marca, index) => { */
    return (
<React.Fragment>
            {/*<!-- Categories in DB -->*/}
            <div className="col-lg-6 mb-4">
            {
									this.state.Marcas.map((marca, index) => {
										return <Marca  {...marca} key={index} />
									})
								}

 </div>
            
        </React.Fragment>
     )}
/*     ) */
/* } */
/* 
} */
}

export default Marcas;
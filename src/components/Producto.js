import React, { Component } from 'react';
import ProductList from './ProductList';
// import MovieList from './MovieList';

class Producto extends Component {

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
			<React.Fragment>
				{/*<!-- PRODUCTS LIST -->*/}
				<div className="card shadow mb-1">
				<h1 className="h2 mb-1 text-gray-800">Listado de Productos</h1> </div>
			
				

				{/*<!-- DataTales Example -->*/}
				<div className="card shadow mb-4">
					<div className="card-body">
						<div className="table-responsive">
							<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
								<thead>
									<tr>
										<th>Id</th>
										<th>Marca</th>
										<th>Modelo</th>
										<th>Precio</th>
										<th>Almacenamiento</th>
										<th>Memoria</th>
									</tr>
								</thead>
								{
									this.state.productList.map((product, index) => {
										return <ProductList  {...product} key={index} />
									})
								}

							</table>
						</div>
					</div>	
				</div>
			</React.Fragment>
		)
	}
}
export default Producto;
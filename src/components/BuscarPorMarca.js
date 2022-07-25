
import { useState, useEffect, useRef } from "react"



function BuscarPorMarca() {


	let [marca, setMarca] = useState([])
	let [search, setSearch] = useState("Samsung")

	const inputSearch = useRef();
	console.log(inputSearch);

	useEffect(() => {

		fetch(`http://localhost:3004/api/products/${search}`)
			.then(response => response.json())
			.then((data) => {

				if (data.data) { setMarca([...data.data])
					console.log(search)
					console.log(marca)}
				else { setMarca([]) }
			
			}
			)
			.catch(error => console.log("error"));

	}, [search]);

const apiKey = search

	const searchBrand = (e) => {
		e.preventDefault();
		const value = inputSearch.current.value;
		setSearch(value);
		inputSearch.current.value = ""
	}





	return (
		<div className="container-fluid">
				{
				apiKey !== '' ?
					<>
						<div className="row my-4">
							<div className="col-12 col-md-6">
								{/* Buscador */}
								<form method="GET" onSubmit={searchBrand}>
									<div className="form-group">
										<label htmlFor="">Buscar por Marca:</label>
										<input
											ref={inputSearch}
											type="text"
											className="form-control"
										/>
									</div>
									<button className="btn btn-info">Search</button>
								</form>

							</div>
						</div>
						<div className="row">
							<div className="col-12">
								<h2>Productos para la palabra: {search} </h2>
							</div>
							{/* Listado de Marcas */}
							{
								marca.length > 0 && marca.map((product, i) => {
									return (
										<div className="col-sm-6 col-md-3 my-4" key={i}>
											<div className="card shadow mb-4">
												<div className="card-header py-3">
													<h5 className="m-0 font-weight-bold text-gray-800">{product.nombre}</h5>
												</div>
												<div className="card-body">
													<div className="text-center">
														<img
															className="img-fluid px-3 px-sm-4 mt-3 mb-4"
															src={product.product_variants.imageURL}
															alt={product.nombre}
															style={{ width: '90%', height: '400px', objectFit: 'cover' }}
														/>
													</div>
													<p>{product.product_variants.descripcion}</p>
												</div>
											</div>
										</div>
									)
								})
							}
						</div>
			
			
						{marca.length === 0 && <div className="alert alert-warning text-center">No se encontraron productos</div>}
					</>
					:
					<div className="alert alert-danger text-center my-4 fs-2"></div>
			}
					
			
		</div>
	)
}

export default BuscarPorMarca;

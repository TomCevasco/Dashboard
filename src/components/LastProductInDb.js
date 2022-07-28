import React from 'react';
import imagenFondo from '../assets/products/1657664584592-galaxyZ_violeta.jpg';

function LastProductInDb(product) {
    return (				
		<div class="col-md-4">    
                                   <div className="col-lg-10 mb-4">
                                       
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
											</div>	
                                    
                       
               
                                    
    )
}

export default LastProductInDb;

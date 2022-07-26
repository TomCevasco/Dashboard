import React from 'react';
/* import image from '../assets/products/1657664584592-galaxyZ_violeta.jpg';  */
import { Routes, Route, Link } from "react-router-dom";
import ProductDetail from './ProductDetail2';




function ProductInformation(props) {

/*     let id = Number(props.match.params.id) */

    return (

        <>
            <div className="col-lg-4 mb-2">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">{props.marcas.nombre_marca} {props.nombre}</h5>
                    </div>
                    <div className="card-body">   {/* {`category ${i}`} {props.product_variants.imagecolor1} */}
                        <div className="text-center">
                            <img className="img-fluid px-2 px-sm-3 mt-3 mb-2" style={{ width: '90%', height: '400px', objectFit: 'cover' }} alt={props.nombre} src={props.product_variants.imageURL}   />
                        </div>
                        <div class="col-lg-12 col-md-14 col-sm-10">
                        <table class="table table-striped table-product">
                        <tbody>
                                        <tr>
                                            <td width="300">Modelo</td>
                                            <td>{props.nombre}</td>
                                        </tr>
                                        <tr>
                                            <td>Memoria</td>
                                            <td>{props.product_variants.memoria}</td>
                                        </tr>
                                        <tr>
                                            <td>Almacenamiennto</td>
                                            <td>{props.product_variants.almacenamiento}</td>
                                        </tr>
                                     {/*    <tr>
                                            <td>Procesador</td>
                                            <td>{props.product_variants.procesador}</td>
                                        </tr> */}
                                        <tr>
                                            <td>Precio</td>
                                            <td>{props.product_variants.price}</td>
                                        </tr>
                                       {/*  <tr>
                                            <td>Resolución de pantalla</td>
                                            <td>{props.product_variants.pantallaResolucion}</td>
                                        </tr> */}
                                    {/*     <tr>
                                            <td>Bateria</td>
                                            <td>{props.product_variants.bateria}</td>
                                        </tr> */}
                                        
                                    </tbody>		
                                    </table>
 </div>
                        { <Link className="btn btn-danger" target="_blank" rel="nofollow" to={`/MovieDetail/${props.id}`}>Detalle Del Producto</Link> }
                    </div>
                </div>
            </div>
            <Routes>

             {/*    <Route path="/MovieDetail/:id" exact element={<ProductDetail/>} /> */}


            </Routes>

        </>


    )
}

export default ProductInformation;

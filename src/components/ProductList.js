import React from 'react'

const ProductList = (props) => {
    return (
        <> 
                        <tbody>
                            <tr>
                                <td>{props.id}</td>
                                <td>{props.marcas.nombre_marca}</td>
                                <td>{props.nombre}</td>
                                <td>{props.product_variants.price}</td>
                                <td>{props.product_variants.almacenamiento}</td>
                                <td>{props.product_variants.memoria}</td>
                            </tr>

                        </tbody>
               </>
    )
}

export default ProductList
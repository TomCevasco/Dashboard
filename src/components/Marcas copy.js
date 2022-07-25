// import { render } from '@testing-library/react';
import React from 'react';
import { useState, useEffect } from "react"

import Genre from './Marca';


/* import noPoster from '../assets/images/no-poster.jpg'; */

function Marcas() {


    const [marcas, setMarca] = useState([]);

    const apiMarcas = "http://localhost:3004/api/products/marcas/listado";

    useEffect(() => {

        fetch(apiMarcas)
            .then((response) => response.json())
            .then((data) => {
console.log(data)
console.log(data.Marcas)
                if (data.Marcas) {
                    setMarca([...data.Marcas])
                } else {
                    setMarca([])
                }

            }
            )
            .catch(error => console.log("error"));

    }, [])

  /*   {  marcas.map((marca, index) => { */
    return (
<React.Fragment>
            {/*<!-- Categories in DB -->*/}
           
                {/*<!-- Categories in DB -->*/}

            {/*     <Genre  {...marca} key={index} /> */}
            
        </React.Fragment>
     )}
/*     ) */
/* } */
/* 
} */

export default Marcas;
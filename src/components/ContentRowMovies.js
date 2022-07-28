import React from 'react';
import SmallCard from './SmallCard';





let productInDataBase = {
    color:   "primary",
    titulo: "Productos en Tienda",
    valor: 21,
    icono: "fad fa-mobile",
}

let amount ={
    color:   "primary",
    titulo: "Marcas disponibles",
    valor: 6,
    icono: "fas fa-registered",
}

let user = {
    color:   "primary",
    titulo: "Asuarios Registrados",
    valor: 20,
    icono: "fas fa-user",
}

let cardProps = [productInDataBase,amount,user];


function ContentRowTop(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;
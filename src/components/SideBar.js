import React from 'react';
import image from '../assets/images/Logo.png';
import { Link, Route, Routes } from "react-router-dom";
import Marcas from './Marcas';
import ContentWrapper from "./ContentWrapper"
import LastMovieInDb from './LastProductInDb';
import ContentRowMovies from './ContentRowMovies';
import Error404 from './Error404';
import Producto from './Producto';
import AllProducts from './AllProducts';
import BuscarPorMarca from './BuscarPorMarca'
import ProductDetail from './ProductDetail';
import User from './User';




function SideBar() {


    return (
        <React.Fragment>

            
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-negro sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
              <div className="sidebar-brand-icon navbar-title bg-negro">
                        <img src={image} alt="Digital House" />
						<div className='navbar-title-p'>
						<p>LlamaQueLlama</p>
						</div>
                </div>

                {/*<!-- Divider -->*/}
                

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider" />

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Tablas</div>

                {/*<!-- Nav Item - Pages -->*/}
                {/*     <li className="nav-item">
                    <a className="nav-link collapsed" href="/">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </a>
                </li> */}

                {/*<!-- Nav Item - Charts -->*/}
                {/*      <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></a>
                </li> */}

                {/*<!-- Nav Item - Tables -->*/}
                {/*      <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span></a>
                </li> */}
                {/*   <li className="nav-item">
                    <Link className="nav-link" to="/ContentRow" exact >
                        <i className="fas fa-fw fa-table"></i>
                        <span>Content Row</span>
                    </Link>
                </li> */}
                <li className="nav-item">
                    <Link className="nav-link" to="/ProductDetail" exact >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <span> Productos Destacado</span>
                    </Link>
                </li>

                 <li className="nav-item">
                    <Link className="nav-link" to="/User" exact >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                    </svg>
                    <span> Listado de Usuarios</span>
                    </Link>  </li> 
                <li className="nav-item">
                    <Link className="nav-link" to="/Producto" exact >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone-fill" viewBox="0 0 16 16">
                        <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/>
                    </svg>
                        <span> Listado de Productos</span>
                    </Link>  </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/AllProducts" exact >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shop" viewBox="0 0 16 16">
                        <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
                    </svg>
                        
                        <span> Tienda</span>
                    </Link>  </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/BuscarPorMarca" exact >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                        <span> Buscador de productos</span>
                    </Link>  </li>


                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
            {/*<!-- End of Sidebar -->*/}
            <Routes>
                <Route path="*" element={<Error404 />} />
                <Route path="/" element={<ContentWrapper />} />
                <Route path="/genres" exact element={<Marcas />} />
                <Route path="/lastMovie" exact element={<LastMovieInDb />} />
                <Route path="/ContentRow" exact element={<ContentRowMovies />} />
                <Route path="/Producto" exact element={<Producto />} />
                <Route path="/AllProducts" exact element={<AllProducts />} />
                <Route path="/BuscarPorMarca" exact element={<BuscarPorMarca />} />
                <Route path="/ProductDetail" exact element={<ProductDetail />} />
                <Route path="/User" exact element={<User />} />
                 


            </Routes>
        </React.Fragment>
    )
}
export default SideBar;
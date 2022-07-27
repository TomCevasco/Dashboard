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
              

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0" />

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
                        <i className="fas fa-fw fa-table"></i>
                        <span>Productos Destacado</span>
                    </Link>
                </li>

                 <li className="nav-item">
                    <Link className="nav-link" to="/User" exact >
                        <i className="fas fa-fw fa-table"></i>
                        <span>Listado de Usuarios</span>
                    </Link>  </li> 
                <li className="nav-item">
                    <Link className="nav-link" to="/Producto" exact >
                        <i className="fas fa-fw fa-table"></i>
                        <span>Listado de Productos</span>
                    </Link>  </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/AllProducts" exact >
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tienda</span>
                    </Link>  </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/BuscarPorMarca" exact >
                        <i className="fas fa-fw fa-table"></i>
                        <span>Buscador de productos</span>
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
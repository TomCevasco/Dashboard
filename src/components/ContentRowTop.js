import React from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';
import Marcas from './Marcas';
import LastProductInDb from './LastProductInDb';
import ContentRowMovies from './ContentRowMovies';
import ProductDetail from './ProductDetail';
function ContentRowTop() {
	return (
		<React.Fragment>
			{/*<!-- Content Row Top -->*/}
			<div className="container-fluid bg-gris">
				<div className="d-sm-flex aligns-items-center justify-content-between mb-10">
					<h1 className="h3 mb-0 text-light">Dashboard</h1>
				</div>

				{/*<!-- Content Row Movies-->*/}
				<ContentRowMovies />
				{/*<!-- End movies in Data Base -->*/}


				{/*<!-- Content Row Last Movie in Data Base -->*/}
				<div className='disp-flex'>
				<Marcas/> 
				</div>
					{/*<!-- Last Movie in DB -->*/}
					<ProductDetail />
					{/*<!-- End content row last movie in Data Base -->*/}

					{/*<!-- Genres in DB -->*/}
			

					{/*<!--End Genres In Db-->*/}
					{/* <ProductDetail/> */}
			
			</div>
			{/*<!--End Content Row Top-->*/}

		</React.Fragment>
	)

}
export default ContentRowTop;
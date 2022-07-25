 import { render } from '@testing-library/react';
 import { useState, useEffect, useRef } from "react"

//  import Genre from './Genre';


//  /* import noPoster from '../assets/images/no-poster.jpg'; */

//  function Marcas() {


//  	let [marcas, setMarcas] = useState([])
	



//  	useEffect(() => {
//  const apiMarcas = "http:localhost:3004/api/products/marcas/listado"
//  		fetch(apiMarcas)
//  			.then(response => response.json())
//  			.then((data) => {
//  				if (data.data) { setMarcas([...data.data]) }
//  				else { setMarcas([]) }
//  			}
//  			)
//  			.catch(error => console.log("error"));

//  	}, []);

//    {
//          return (
//              <React.Fragment>
//                  {/*<!-- Categories in DB -->*/}
//                  <div className="col-lg-6 mb-4">
//                      <div className="card shadow mb-4">
//                          <div className="card-header py-3">
//                              <h6  className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h6>
//                          </div>
//                          <div onMouseOver={this.fondGenres} onMouseOut={this.fondGenresOut} className="card-body" id="genres" >
//                              <div  className="row" id=''>
//                                  {
//                                      this.state.genresList.map((genre, index) => {
//                                          return <Genre  {...genre} key={index} />
//                                      })
//                                  }
//                              </div>
//                          </div>
//                      </div>
//                  </div>

//              </React.Fragment>

//  	}



//   let genres = [
//       { genre: 'Acción' },
//       { genre: 'Animación' },
//       { genre: 'Aventura' },
//       { genre: 'Ciencia Ficción' },
//       { genre: 'Comedia' },
//       { genre: 'Documental' },
//       { genre: 'Drama' },
//       { genre: 'Fantasia' },
//       { genre: 'Infantiles' },
//       { genre: 'Musical' }
//   ]

//  class GenresInDb extends Component {


//      constructor() {
//          super();
//          this.state = { genresList: [] }
//      };


//   fondGenres(){
//      document.querySelector("#genres").classList.add("bg-secondary")
//   }
//   fondGenresOut(){
//      document.querySelector("#genres").classList.remove("bg-secondary")
//   }

//  /*  fondCard(){
//      document.querySelector("#cards").classList.add("bg-light")
//   }
//   fondCardOut(){
//      document.querySelector("#cards").classList.remove("bg-light")
//   } */

//      componentDidMount() {

//          fetch("api/products/marcas/listado").then(respuesta => {
//              return respuesta.json()
//          }).then(genres => {

//               console.log(genres);
//              this.setState({ genresList: genres.data })

//          })
//              .catch(error => console.log(error))
//      }



//      render() {
//          return (
//              <React.Fragment>
//                  {/*<!-- Categories in DB -->*/}
//                  <div className="col-lg-6 mb-4">
//                      <div className="card shadow mb-4">
//                          <div className="card-header py-3">
//                              <h6  className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h6>
//                          </div>
//                          <div onMouseOver={this.fondGenres} onMouseOut={this.fondGenresOut} className="card-body" id="genres" >
//                              <div  className="row" id=''>
//                                  {
//                                      this.state.genresList.map((genre, index) => {
//                                          return <Genre  {...genre} key={index} />
//                                      })
//                                  }
//                              </div>
//                          </div>
//                      </div>
//                  </div>

//              </React.Fragment>
//          )
//      }
//  }
//  export default GenresInDb;
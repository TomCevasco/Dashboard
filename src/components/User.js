import React, { Component } from 'react';

import UsersList from './UsersList';
// import MovieList from './MovieList';

class User extends Component {

	constructor(props) {
		super(props);
		this.state = { usersList: [] }

	}

	componentDidMount() {

		fetch("http://localhost:3004/api/users").then(respuesta => {
			return respuesta.json()
		}).then(users => {

			console.log(users);
			this.setState({ usersList: users.data })

		})
			.catch(error => console.log(error))
	}



	render() {
		return (
			<React.Fragment>
				{/*<!-- PRODUCTS LIST -->*/}
				<div className="card shadow mb-1">
				<h1 className="h2 mb-1 text-gray-800">Listado de Productos</h1> </div>
			
				

				{/*<!-- DataTales Example -->*/}
				<div className="card shadow mb-4">
					<div className="card-body">
						<div className="table-responsive">
							<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
								<thead>
									<tr>
										<th>Id</th>
										<th>Nombre</th>
										<th>Apellido</th>
										<th>Email</th>
										<th>Perfil</th>
										
									</tr>
								</thead>
								{
									this.state.usersList.map((user, index) => {
										return <UsersList  {...user} key={index} />
									})
								}

							</table>
						</div>
					</div>	
				</div>
			</React.Fragment>
		)
	}
}
export default User;
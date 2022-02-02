
import React, { useState, useEffect } from 'react';

// import noPoster from '../assets/images/no-poster.jpg';

function SearchUsers(){

    const [users, setUsers] = useState([]); 	// Usuarios
	

	useEffect(() => {
		fetch(`http://localhost:3001/users/api`)
		.then(res => res.json())
		.then (data => 
            setUsers(data.data)
		
		)
	}, [])


	return(
		<div className="container-fluid">
			{
				
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
					</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Usuarios {}</h2>
						</div>
					
						{
							users.length > 0 && users.map((user, i) => {

								
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{user.name}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={`http://localhost:3001/images/users/${user.user_image}`} // Porque no fuuncionaaa
														alt={user.name} 
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>
												<p>ID: {user.id}</p>
												<p style={{"font-size": "2rem"}}> {user.email}</p>
											</div>
										</div>
									</div>
								)
							
						})
						}
					</div>
					{ users.length === 0 && <div className="alert alert-warning text-center">No se encontraron usuarios</div>}
				</>
			
			}
		</div>
	)
}

export default SearchUsers;

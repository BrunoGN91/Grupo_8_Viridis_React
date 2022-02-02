
import React, { useState, useEffect } from 'react';

// import noPoster from '../assets/images/no-poster.jpg';

function SearchProducts(){

	const [products, setProducts] = useState([]);
	const [imageKw, setImage] = useState([])
	// const [keyword, activeSearch] = useState('');


	useEffect(() => {
		fetch(`http://localhost:3001/products/api`)
		.then(res => res.json())
		.then (data => 
			setProducts(data.products)
			
		)
	}, [])



	return(
		<div className="container-fluid">
			{
				
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							{/* <form method="GET">
								<div className="form-group">
									<label htmlFor="">Buscar por título:</label>
									<input type="text" className="form-control" />
								</div>
								
							</form> */}
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Productos {}</h2>
						</div>
					
						{
							products.length > 0 && products.map((product, i) => {
								
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{product.name}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={`http://localhost:3001/images/products/${product.images[0].name}`} // Porque no fuuncionaaa
														alt={product.name} 
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>W
												<p>{product.description}</p>
												<p style={{"font-size": "2rem"}}>$ {product.price}</p>
											</div>
										</div>
									</div>
								)
							
						})
						}
					</div>
					{ products.length === 0 && <div className="alert alert-warning text-center">No se encontraron productos</div>}
				</>
			
			}
		</div>
	)
}

export default SearchProducts;

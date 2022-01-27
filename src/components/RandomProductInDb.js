import React, { useState, useEffect } from 'react';
import {Link, Route, Switch} from 'react-router-dom';


function RandomProductInDb(){


    const [products, setProducts] = useState([]);
	
	useEffect(() => {
		fetch(`http://localhost:3001/products/api`)
		.then(res => res.json())
		.then (data => 
			setProducts(data.products)
			
		)
	}, [])

    const asd = products[Math.floor(Math.random()*products.length)] // Porque no funciona
    console.log(products);
 
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Latest Product</h5>
                   
                </div>
                {
                    products.map((product, i) => {
                        let image = `http://localhost:3001/products/api/${product.id}/image`;
                        console.log(image);
                    return (
                <div className="card-body" key={i}>
                    <div className="text-center">
                        <Link to={image}>
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src='.png' alt={''}/>
                        </Link>
                        <p>{product.name}</p>
                    </div>
                    <p>{product.description}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View product Detail</a>
                </div>
                )})
                }
            </div>
        </div>
    )
}

export default RandomProductInDb;

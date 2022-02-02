import React, { useState, useEffect } from 'react';
import {Link, Route, Switch} from 'react-router-dom';


function RandomProductInDb(){


    const [products, setProducts] = useState([]);
    const [foto, setFotos] = useState([]);
	
	useEffect(() => {
		fetch(`http://localhost:3001/products/api`)
		.then(res => res.json())
		.then (data => 
			setProducts(data.products)
		
		)
	}, [])

    let lastProduct = products.slice(-1)
    
   
 
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Latest Product</h5>
                   
                </div>
                {
                    lastProduct.map((product, i) => {
                     
                    return (
                <div className="card-body" key={i}>
                    <div className="text-center">
                      
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={`http://localhost:3001/images/products/${product.images[0].name}`} alt={''}/>
                        
                        <p>{product.name}</p>
                    </div>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href={`http://localhost:3001/products/product/${product.id}`} >View product Detail</a>
                </div>
                )})
                }
            </div>
        </div>
    )
}

export default RandomProductInDb;

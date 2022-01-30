import React, { useState, useEffect } from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */


function ContentRowDatabase(){

    const [products, setProducts] = useState([]); // Problema con asincronismo, no llegan inmediatamente la data
    const [users, setUsers] = useState([]); 	// Usuarios
    const [categories, setCategories] = useState([]); 

	useEffect(() => {
		fetch(`http://localhost:3001/products/api`)
		.then(res => res.json())
		.then (data => 
			setProducts(data.products)
		
		)
	}, [])

    useEffect(() => {
		fetch(`http://localhost:3001/products/api`)
		.then(res => res.json())
		.then (data => 
			setCategories(data.allCategoryProducts)
		
		)
	}, [])

    console.log(products.length);

let productsInDB = {
    title: 'Productos',
    color: 'primary', 
    quantity: products.length,
    icon: 'fa-clipboard-list'
}


/* <!-- Total awards --> */

let totalCategories = {
    title:'Categorias', 
    color:'success', 
    quantity: categories.length,
    icon:'fa-award'
}

/* <!-- Usuarios quantity --> */

let actorsQuantity = {
    title:'Actors quantity' ,
    color:'warning',
    quantity:'49',
    icon:'fa-user-check'
}

let cartProps = [productsInDB, totalCategories, actorsQuantity];


    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowDatabase;
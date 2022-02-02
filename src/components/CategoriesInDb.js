import React, { useState, useEffect } from 'react';

function CategoriesInDb() {
  
  const [categories, setCategories] = useState([]);

  useEffect(() => {
		fetch(`http://localhost:3001/products/api`)
		.then(res => res.json())
		.then (data => 
			setCategories(data.allCategoryProducts)
			
		)
	}, [])

  

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categories in Data Base
          </h5>
        </div>
       {categories.map((category, i) => {

       return (
        <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">{category.name}</div>
              </div>
            </div>
             <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">{category.products.length}</div>
              </div>
            </div>
        </div>
            )})}


          </div>
        </div>
      
    
  );
}

export default CategoriesInDb;

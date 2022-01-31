import React, { useState, useEffect } from 'react';



function LastUser (){
    const [users, setUsers] = useState([]); 	// Usuarios

    useEffect(() => {
		fetch(`http://localhost:3001/users/api`)
		.then(res => res.json())
		.then (data => 
            setUsers(data.data)
		
		)
	}, [])

    return (
            <div className="card-body">
                <div className="text-center">
                  
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={`http://localhost:3001/images/users/${users[0].user_image}`} alt={''}/>
                    
                    <p>{users[0].name}</p>
                </div>
                <p>{users[0].email}</p>
            </div>
    )
            
    
}

export default LastUser;
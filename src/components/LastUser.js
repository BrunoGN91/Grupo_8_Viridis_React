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
        <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">Last user in Database</h5>
            </div>
            <div className="card-body">
                <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={`http://localhost:3001/images/users/${users[0].user_image}`} alt={''}/>
                </div>
                <p><b>User:</b> {users[0].name}</p>
                <p><b>Email:</b> {users[0].email}</p>
            </div>
        </div>
        </div>
        
            
    )

}

export default LastUser;
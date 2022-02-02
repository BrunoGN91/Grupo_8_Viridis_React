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
            {
                users.length>0?
                <div className="card-body">
                <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={`http://localhost:3001/images/users/${users[0].user_image??null}`} alt={''}/>
                </div>
                <p><b>ID:</b> {users[0].id} </p>
                <p><b>Username:</b> {users[0].name}</p>
                <p><b>Email:</b> {users[0].email}</p>
                <a className="btn btn-danger" target="_blank" rel="nofollow" href={`http://localhost:3001/users/profile/`} >View user Detail</a>
            </div>
            :null
            }
            
        </div>
        </div>
        
            
    )

}

export default LastUser;
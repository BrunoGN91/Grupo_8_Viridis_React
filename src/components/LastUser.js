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

    let lastUser = users.slice(-1)

    return (
        <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">Last user in Database</h5>
            </div>
            {
                lastUser.map((user, i) => {   

                return(
                    <div className="card-body" key={i}>

                <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={`http://localhost:3001/images/users/${user.user_image}`} alt={''}/>
                </div>
                <p><b>ID:</b> {user.id} </p>
                <p><b>Username:</b> {user.name}</p>
                <p><b>Email:</b> {user.email}</p>
                <a className="btn btn-danger" target="_blank" rel="nofollow" href={`http://localhost:3001/users/userDetail/${user.id}`} >View user Detail</a>
            </div>
                  )})
}
        
        
            
        </div>
        </div>
        
            
    )

}

export default LastUser;
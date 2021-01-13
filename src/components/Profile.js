import React from 'react'


const Profile = ({users}) => {
    console.log(users)
    return (
        <section className="profile_1 mt-4">
            <div className="container ">
                
                    {users.map((user, index)=> 
                    <div className="row" key ={index}>
                        <div className="col-md-2">
                        <img src={user.picture.thumbnail}alt="pic" className="img-fluid vector_2" />
                    </div>
                    <div className="col-md-10 profile_3 justify-content-start">
                        <div> <h4>{user.name.first} {user.name.last}</h4>
                            <p className="profile_3p ">{user.location.street.number}, {user.location.street.name}, {user.location.city}</p></div>
                        <div className="profile_2">
                            <p><i className="far fa-envelope"></i> <span>{user.email}</span></p>
                            <p className="profile_2p"><i className="fas fa-phone-alt"></i> <span>{user.phone}</span></p>
                           <div className="arrow"> <i className="fas fa-arrow-right"></i></div>
                        </div>
                    </div>
                    </div>
                    )}

            </div>
        </section>
    )
}

export default Profile

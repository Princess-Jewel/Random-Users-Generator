import React from 'react'


const Profile = () => {
    return (
        <section className="profile_1 mt-4">
            <div className="container ">
                <div className="row">
                    <div className="col-md-2">
                        <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1609306331/vector2_ktmhy6.jpg"} alt="pic" className="img-fluid vector_2" />
                    </div>
                    <div className="col-md-10 profile_3 justify-content-start">
                        <div> <h4>Shalom Chioma</h4>
                            <p className="profile_3p ">3452, Waterfront Avenue, Harare.</p></div>
                        <div className="profile_2">
                            <p><i className="far fa-envelope"></i> <span>Princessjewel80@gmail.com</span></p>
                            <p className="profile_2p"><i className="fas fa-phone-alt"></i> <span>234-456-9876</span></p>
                           <div className="arrow"> <i className="fas fa-arrow-right"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile

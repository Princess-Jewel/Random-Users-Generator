import React from 'react';
import LightHome from './LightHome';
import DarkHome from './DarkHome';
import {useState, useEffect} from 'react'
import Axios from 'axios'


const Home = () => {
    const [users, setUsers] = useState([]);

    const getAllUsers = () =>{
        Axios.get("https://randomuser.me/api/?results=10").then(
            (data) => {
                setUsers([...data.data.results]);
            }
        )
    }

    console.log(users)

    useEffect(()=>{
        getAllUsers();
    },[]);

    return (
        <div>
            <section  style={{background:"#262A41", width: "100%"}}>
               
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <DarkHome/>
                        </div>

                        <div className="col-md-6">
                            <LightHome users={users}/>
                            </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home

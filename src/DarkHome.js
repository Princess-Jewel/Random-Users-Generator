import React from 'react'
import SearchBar from './components/SearchBar'
import AllUsers from './components/AllUsers'
import MaleUsers from './components/MaleUsers'
import FemaleUsers from './components/FemaleUsers'

const DarkHome = () => {
    return (
        <section className="dark-home">
            <div>
                <h3>Hello,<span> Emerald </span></h3>
                <p>Welcome to your dashboard, kindly sort through the user base</p>
            </div>
           <div>
               <SearchBar />
           </div>
           <div className="users mt-5">
               <div class="pb-2"><h5>Show users</h5></div>
               <div className="profiles mt-3">
                   <AllUsers />
                   <MaleUsers />
                   <FemaleUsers />
                  
               </div>
           </div>

        </section>
    )
}

export default DarkHome

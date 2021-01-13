import React from 'react';
import LightHome from './LightHome';
import DarkHome from './DarkHome';

const Home = () => {
    return (
        <div>
            <section  style={{background:"#262A41", width: "100%"}}>
               
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <DarkHome/>
                        </div>

                        <div class="col-md-6">
                            <LightHome/>
                            </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home

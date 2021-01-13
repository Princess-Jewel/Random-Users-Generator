import React from 'react'
import SecondSearchBar from './components/SecondSearchBar'
import Profile from './components/Profile'

const LightHome = ({users}) => {
    return (
        <div className="light-home_1" style={{ background: "#F7F7FF" }}>
            <div className="light-home">
                <h3>All Users</h3>
                <p>Filter by</p>
            </div>
            <div>
                <SecondSearchBar users={users} />
            </div>

            <div>
                <Profile users={users} />
            </div>
            <div className="download">
                <div className="result pt-3">
                    <p className="text-white"><i className="fas fa-cloud-download-alt mr-2"></i><span>Download results</span></p>
                </div>

                <div class="pagination">
                    <a href="#"><i class="fas fa-chevron-left"></i></a>
                    <a href="#"><i class="fas fa-chevron-right"></i></a>
                </div>
                {/* <div>
                    <ul className="pagination">
                        <li className="page-item page-item_1">
                            <a className="page-link page-link_1" href="#" aria-label="Previous">
                                <span aria-hidden="true"><i class="fas fa-chevron-left"></i></span>

                            </a>
                        </li>
                        <li className="page-item page-item_2">
                            <a className="page-link page-link_2" href="#" aria-label="Next">
                                <span aria-hidden="true"><i class="fas fa-chevron-right"></i></span>

                            </a>
                        </li>
                    </ul>
                </div> */}
            </div>

        </div>

    )
}

export default LightHome

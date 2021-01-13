import React from 'react'


const SecondSearchBar = () => {
    return (
     
        <div className="search_1">

        {/* <div className="filter">
            <i className="fa fa-search filter__icon "></i>
            <input className="input-field filter__input" type="text" placeholder="Find in list" />
        </div> */}
            <div className="input-icons_1">
                <i className="fa fa-search icon icon-1"></i>
                <input className="input-field input_2 ml-4" size="15" type="text" placeholder="Find in list" />
            </div>

            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button"
                 id="dropdownMenuButton" 
                data-toggle="dropdown" aria-haspopup="true"
                 aria-expanded="false">
                   Country
                </button>
                
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            <div>
                <label><input type="radio" name="btn" />Show country</label>
            </div>
            
        </div>
    )
}

export default SecondSearchBar

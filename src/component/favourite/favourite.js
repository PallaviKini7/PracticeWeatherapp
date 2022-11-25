import React from 'react'
import './favourite.css'

const Favourite = () => {
  return (
    <div className='favourite'>
       <div className="nothing">
            <div className="nothingImg">
              <img
                src={require("../../assets/icon_nothing.png")}
                alt=""
                className="notImage"
              />
            </div>
            <div className="nothingText">No Favourites added</div>
          </div>
    </div>
  )
}

export default Favourite
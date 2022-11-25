import React,{useState} from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'
import Datetime from 'react-datetime'
import "react-datetime/css/react-datetime.css";

const Header = () => {

  const [value, onChange] = useState("");
  const [time, onChangeTime] = useState("");

  const date = new Date();
  setInterval(function () {

    today();

  }, 1000);
  setInterval(function () {

    todayTime();

  }, 1000);
  const today = () => {
    onChange(
      `${date.toLocaleString("en-us", {
        weekday: "short",
      })} ${date.getDate()}, ${date.toLocaleString("en-us", {

        month: "short",
      })} ${date.getFullYear()} `
    );
  };
  const todayTime = () => {
    onChangeTime(
      ` ${date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })}`
    );
  };

  return (
    <div className='header'>
      <div className="image-search">
       <img src={require('../../assets/logo_web.png')} alt=""  /></div>
        <div className='search-box'>
          <input type="text" placeholder='Search City' className='searchField'/>
          <i class="fa-solid fa-magnifying-glass" ></i>
        </div>
      
      {/* <div className='header-tab'>
        <div className='tabs'>
          <NavLink to={'/home'} className='home'> <div >HOME</div></NavLink>
          <NavLink to={'/favrt'} className='fav'><div >FAVOURITE</div></NavLink>
          <NavLink to={'/recent'} className='recent'><div >RECENT</div></NavLink>
        </div>
        <div className='datetime-display'>
         <Datetime />;
        </div>
      </div> */}
    </div>
  )
}

export default Header
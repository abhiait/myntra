import React,{useState} from "react";
import  "./Navbar.css";

import logo from "./myntra-930x620.png";
// import Men from "./scrollDown/men";


export default function Navbar(props) {

    const [Hover, setHover] = useState('false'
    );

const handleMouseEnter = (e)=>{
    if(Hover==true){
    e.target.style.background = 'red';
    setHover({display:"block"})
    }
    
}
const handleMouseLeave = ()=>{
    // e.target.style.background = '';
    

}
  return (
      <>
    <nav>
    <div className="category">
        <img style={{width:'60px', marginRight:'40px'}} src={logo} alt="myntra logo" />
   
      
        <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id="men">
          <a  href="/">
            <h3>MEN</h3>
          </a>
        </span>
        {/* {props.(<Men/>)} */}

        <span id="women" >
          <a href="/">
            <h3>WOMEN</h3>
          </a>
        </span>
        <span id="kids" >
          <a href="/">
            <h3>KIDS</h3>
          </a>
        </span>
        <span id="home" >
          <a href="/">
            <h3>HOME & LIVING</h3>
          </a>
        </span>
        <span id="beauty" >
          <a href="/">
            <h3>Beauty</h3>
          </a>
        </span>
        <span  id="studio" className="Studio">
          <a href="/">
            <h3>Studio </h3><sup>NEW</sup>
          </a>
        </span>
      </div>
      <div className="utility">
        <span className="searchBar">
        <i class="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search for products, brand and more"
          />
          </span>
        
        <a onMouseEnter={handleMouseEnter} id="profile" href="/">
          <span>
            <i className="fa-solid fa-user"></i>
            <p>Profile</p>
          </span>
        </a>
        <a href="/">
          <span>
            <i className="fa-solid fa-heart"></i>
            <p>Wishlist</p>
          </span>
        </a>
        <a href="/">
          <span>
            <i className="fa-solid fa-bag-shopping"></i>
            <p>Bag</p>
          </span>
        </a>
      </div>
    </nav>
    </>
  );
}

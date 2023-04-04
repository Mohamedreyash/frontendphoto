import React from "react"
import "./Header.css";
import { Link } from 'react-router-dom'
const Header=()=>{
   return(
    <>
    <nav className="header">
    <i class="fa fa-user" aria-hidden="true"></i>
    <h4>MY Unsplash</h4>
    <section className="icon">
           <Link to="/Postpage" className="link">Add a Photo</Link>
     </section>
    </nav>
     </>
   
)
}
export default Header;
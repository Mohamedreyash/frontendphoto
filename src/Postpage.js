import React from "react";
import {useNavigate} from "react-router-dom"
import "./postpage.css"
import { Link } from 'react-router-dom'
function Postpage(){
  const Navigate=useNavigate();
  const handle=async(e)=>{
    alert("Loading");
    e.preventDefault()
    let view=e.target
    console.log(view);
    let dataform=new FormData(view);
    console.log(dataform);
    await fetch('http://photoshare-yirc.onrender.com/Postdata',{
        method:'Post',
        body:dataform
    }).then(res=>res.json()).then((d)=>{
        alert("Posted")
        console.log(d);
    }).catch((e)=>{
        console.log(e.message);
    }).finally(()=>Navigate('/Postview'))
  }

    return(
        <>
        <div className="Container">
            <form onSubmit={(event)=>handle(event)}>
                <h1>Add a new photo</h1>
                <div className="break">
                <label htmlFor="name">Label</label>
                <input type="text" name="name" id="name" placeholder="Name" required/>
                </div>
                <div>
                <label htmlFor="img">Upload Photo From Your Local Storage</label>
                <input type="file" name="PostImage" accept="image/*" id="img" required/>
                </div>
                <Link to="/Postview" className="cancel">Cancel</Link>
                <button>Submit</button>
            </form>
        </div>
        </>
    )
}

export default Postpage
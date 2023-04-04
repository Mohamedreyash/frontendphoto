import { useEffect, useState } from "react";
import Card from "./Card";
import "./card.css"
import Header from "./Header";
const Postview=()=>{
    const[posts,setPosts]=useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(posts);

    useEffect(()=>{
        fetch("http://photoshare-yirc.onrender.com/getdata").then((res)=>res.json()).then((data)=>{
            data.reverse();
             setPosts(data)
        }).catch((err)=>{
           if(err){
               console.log(err);
           }
        })
    },[])
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
      }
      useEffect(() => {
        const results = posts.filter(post =>
          post.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(results);
      }, [searchTerm, posts]);
    
      
    return(
        <>
        <Header/>
        <div className="search">
        <i class="fa fa-search" aria-hidden="true"></i>
         <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search By Name" />
        </div>
        <div className="post-container">
             {filteredProducts.map((post,i)=>{
                 return(
                     <Card post={post} key={i}/>
                 )
             })}
        </div>
        </>
    )
}
export default Postview;
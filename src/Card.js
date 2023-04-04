import axios from "axios"
const Card=({post})=>{
    const deletePosts=(id)=>{
     axios.delete(`https://photoshare-yirc.onrender.com/deleteData/${id}`).then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    }
    
    return(
        <>
        
          <section className="card">
                <section className="card-image">
                    <img src={post.PostImage} alt="place"/>
                </section>
            <section className="card-header">
                    <div>
                        <div className="card-header__name">{post.name}</div>
                    </div>
                    <span className="dlt">
                     <button  onClick={() => { deletePosts(post._id);
                     document.location.reload()}} >Delete</button>
                    </span>
             </section>
             </section>
             
        </>
    )
}
export default Card;
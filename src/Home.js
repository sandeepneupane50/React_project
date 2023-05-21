import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import Usefetch from "./Usefetch";

const Homepage = () => {
   
    const { data: blogs , isPending, error} = Usefetch('http://localhost:8000/blogs');
    
    return (
        <div className="home">
            {/* blogs && <BlogList blogs={blogs} title="All Blogs !" handleDelete={handleDelete}/>} { */}
            {error && <div> { error } </div>}
            { isPending && <div>Loading....</div>}

            { blogs && <BlogList blogs={blogs} title="All Blogs !" />}

            {/* < BlogList blogs={blogs.filter((blog) => blog.author === 'shyam')} title='Filtered Blogs' handleDelete={handleDelete}/> */}
        </div>
    )

}

export default Homepage;
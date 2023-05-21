// import { useParams } from "react-router-dom";
// import Usefetch from "./Usefetch";
// import { useHistory } from "react-router-dom";
// const Blogdetails = () => {

//     const { id } = useParams();
//     const {data: blog, error, isPending } = Usefetch('http://localhost:8000/blogs/' + id);
//     const history = useHistory();
//     const handleClick = () => {
//         fetch('http://localhost:8000/blogs/' + blog.id, {
//             method: 'Delete'
//         }).then(() =>{
//             history.push('/');

//         })
//     }


//     return ( 
//         <div className="blog-details">
//             { isPending && <div>Loading....</div>}
//             {error && <div>{ error }</div>}
//             { blog && (
//                 <article className="blogdetail-article">
//                     <h2 className="blog-details-title">{ blog.title }</h2>
//                     <p className="blog-details-author">Written by { blog.author }</p>
//                     <div className="blogdetail-body">{ blog.body }</div>
//                     <button onClick={handleClick} className="blogdetail-button">Delete</button>
//                 </article>
//             )}

//         </div>
//      );
// }
 
// export default Blogdetails;




import { useParams, useHistory } from "react-router-dom";
import Usefetch from "./Usefetch";
import { Api } from "./util/Api";

const Blogdetails = () => {
    const { id } = useParams();
    const url = `${Api}/${id}`;
    const { data: blog, error, isPending } = Usefetch(url);
    const history = useHistory();

    const handleDelete = () => {
        fetch(url, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        });
    };

    return (
        <div className="blog-details">
            {isPending && <div>Loading....</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article className="blogdetail-article">
                    <h2 className="blog-details-title">{blog.title}</h2>
                    <p className="blog-details-author">Written by {blog.author}</p>
                    <div className="blogdetail-body">{blog.body}</div>
                    <button onClick={handleDelete} className="blogdetail-button">Delete</button>
                </article>
            )}
        </div>
    );
};
 
export default Blogdetails;

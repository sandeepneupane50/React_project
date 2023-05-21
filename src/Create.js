// import { useState } from "react";
// import { useHistory } from "react-router-dom";


// const Create = () => {

//     const [title, setTitle] = useState('');
//     const [body, setBody] = useState('');
//     const [author, setAuthor] = useState('');
//     const [isPending, setisPending] = useState(false);
//     const history = useHistory();
//     const [Error, setError] = useState(false);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const blog = { title, body, author};

//         setisPending(true);
        
//         fetch('http://localhost:8000/blogs', {
//             method: 'POST', 
//             headers: {"Content-Type": "application/json"},
//             body: JSON.stringify(blog)
//         }).then(() => {
//             console.log('new blog add');
//             setisPending(false);
//             // history.go(-1);
//             history.push('/');
//         })
        
//     }



//     return ( 
//         <div className="create">
//             <h2>Add New Blogs:</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>Blog title:</label>
//                 <input
//                     type="text"
//                     required
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                 />

//                 <label>Blog body:</label>
//                 <textarea
//                     required
//                     value={body}
//                     onChange={(e) => setBody(e.target.value)}
//                 />

//                 <label>Blog author:</label>
//                 <select 
//                     required
//                     value={author}
//                     onChange={(e) => setAuthor(e.target.value,)}
//                     >
//                         <option value='mario'>mario</option>
//                         <option value='biden'>biden</option>
//                 </select>
//                 { !isPending && <button>Add blog</button> }
//                 { isPending && <button disabled>Adding...</button> }
//             </form>
//         </div>
//      );
// }
 
// export default Create;




import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setisPending] = useState(false);
    const history = useHistory();
    const[error, setError]= useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author};

        // setisPending(true);


     if(title.length < 0 || body.length < 20 || author.length == 0 ) {
            setError(true);
            } else {
        
            fetch('http://localhost:8000/blogs', {
                method: 'POST', 
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(blog)
            }).then(() => {
                console.log('new blog add');
                // setisPending(false);
                // history.go(-1);
                history.push('/');
            })
            }
        
}



    return ( 
        <>
            <div className="create">
                <h2>Add New Blogs:</h2>
                <form onSubmit={handleSubmit}>
                    <label>Blog title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    {error&& title.length < 3?
                        <label className="create-error">it can't be less than 3 words</label>:""}

                    <label>Blog body:</label>
                    <textarea
                        value={body}
                        onChange={e => setBody(e.target.value)}
                    />
                    {error && body.length < 20 ? 
                        <label className="create-error">it can't be less than 20 words</label>:""}

                    <label>Blog author:</label>
                    <select 
                        className="create-select"
                        value={author}
                        onChange={e => setAuthor(e.target.value,)}
                        >
                            <option value=''>--select--</option>
                            <option value='mario'>mario</option>
                            <option value='biden'>biden</option>
                    </select>
                    {error && author.length == 0 ?
                    <label className="create-error">plz select author</label>:""}
                    {<button className="create-button">Add blog</button> }
                    {/* { !isPending && <button>Add blog</button> }
                    { isPending && <button disabled>Adding...</button> } */}
                </form>
            </div>
        </>

     );
}
 
export default Create;
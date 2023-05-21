import { useState, useEffect } from "react";



const Usefetch = (url) => {
    const [data, setData] = useState(null);

    const [isPending, setisPending] = useState(true);

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    const [error, setError] = useState(null);



    useEffect(() => {


    //     const abortCont = new AbortController();

    //     //  setTimeout(() => {

    //     //  })
    //     fetch(url, {signal: abortCont.signal })
    //         .then(res => {
    //            if(!res.ok) {
    //             throw Error('couldnot fetch the data for that resources');
    //            }
    //            return res.json();
    //         })
    //         .then(data => {
    //             setData(data);
    //             setisPending(false);
    //         })
    //         .catch(err => {
    //             if (err.name === 'AbortError') {
    //                 console.log('fetch aborted');
    //             } else {
    //                 setisPending(false);
    //                 setError(err.message);
    //             }
    //         })
    // }, []);


// setError(err.message);



    const fetchData = async () => {
        try {
          const res = await fetch(url);
          if (!res.ok) throw Error('could not fetch the data for that resource');
          const data = await res.json();
          setData(data);
        } catch (err) {
          console.log('failed to load');
        } finally {
          setisPending(false);
        }
      }
      fetchData();
    }, [url]);







    return {data, isPending, error}
}
 
export default Usefetch;
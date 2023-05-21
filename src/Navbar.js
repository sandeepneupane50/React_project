import { Link } from "react-router-dom";



const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="nav-heading">
                <h1 >The Dojo Blog</h1>
            </div>
            <div className="icon">
                <Link to="/" className="link">Home</Link>
                <Link to="/Create" className="link" >New Blog</Link>            
                </div>

        </div>
      );
}
 
export default Navbar; 

// style={{ color:"white", backgroundColor:"#f1356d", borderRadius:"8px" }} ---- inline css lekhne tarika

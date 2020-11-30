import { Link } from "react-router-dom";

const Navigation = () => {
    return ( 
        <nav>
            <ul id="navigation">
            <li>
              <Link to="/news" style={{color:"white" ,textDecoration: "none",}}>NEWS</Link>
            </li>
            <li>
              <Link to="/zeitung" style={{color:"white",textDecoration: "none"}}>ZEITUNG</Link>
            </li>
            <li>
              <Link to="/kontakt" style={{color:"white",textDecoration: "none"}}>KONTAKT</Link>
            </li>
            <li>
              <Link to="/coronanews" style={{color:"white",textDecoration: "none"}}>CORONANEWS</Link>
            </li>
           
                
            </ul>
        </nav>
     );
}
 
export default Navigation;
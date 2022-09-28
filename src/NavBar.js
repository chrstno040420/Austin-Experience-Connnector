import {NavLink} from "react-router-dom"


function NavBar(){


return(<>
        <h2> NavBar </h2>
        
        <NavLink to="/">
        <h3>HOME</h3>
        </NavLink>
        
        
        <NavLink to="/trails">
        <h4>Step Up To The Challenge</h4>   
        </NavLink>

        <NavLink to="/food">
        <h4>Foodies</h4>
        </NavLink>

</>)


}

export default NavBar
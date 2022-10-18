import { NavLink } from "react-router-dom";

export default function Navbar(){
    return(
        <div className="navbar">
            <img src="src/Images/BMW.svg.webp" alt="Bmw logo" />
            <div className="nav--links">
                <NavLink to="home"
                        style={({isActive})=>({color: isActive? "rgb(41, 85, 135)" : "black"})}>
                            Home</NavLink>
                <NavLink to="/models" 
                        style={({isActive})=>({color: isActive? "rgb(41, 85, 135)" : "black"})}>
                            Models</NavLink>
                <NavLink to="/history" 
                        style={({isActive})=>({color: isActive? "rgb(41, 85, 135)" : "black"})}>
                            History</NavLink>
            </div>
        </div>
    )
}

// style = { can take function as a parameter, function must return an object }
// style = { (object) => ({object}) } ...make destructuring from object ({isActive})
// style={ ({isActive}) => ({color: isActive? "rgb(41, 85, 135)" : "black"}) }

// className = { (isActive) => isActive? "anyClassName" : "" }  if we want to use css classes
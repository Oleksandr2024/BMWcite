import { Link } from "react-router-dom";


export default function Navbar(){
    return(
        <div className="navbar">
            <img src="src/Images/BMW.svg.webp" alt="Bmw logo" />
            <div className="nav--links">
                <Link to="/">Home</Link>
                <Link to="/models">Models</Link>
                <Link to="/history">History</Link>
            </div>
        </div>
    )
}

//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQPFWp9QP6QVZPxXkwnlMkDaEeO0xcDbNCohR8tHk1AFhs_sythTg9DgQ_gsisZSe19zY&usqp=CAU
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Model(props){
    const [color, setColor] = useState(props.color)

    const handleChange = (event) => {
            setColor(event.target.value)
    }

    const sourcePhoto = props.image[color]

    return(
        <Link to="/model-details" className="model-link">
        <div className="model">
            
            <h2>{props.make} {props.model}</h2>
            <br />
            <p>from {color=== "black" ?
              props.price :
              color === "white" ?
              props.price :
              props.price + 1000 } USD</p>
            <img className="model-image" src={sourcePhoto} alt="image" />
          <form > 
          <label>
           color:
           <select className="color-select" value={color} onChange={handleChange}>   
             <option value="black">Black</option>
             <option value="white">White</option>
             <option value="blue">Blue</option>
             <option value="red">Red</option>
           </select>
         </label>
       </form>
       <br />
            <p className="model-down-p">Click for more information and configure...</p>

        </div>
        </Link>
    )
}


// handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('Your favorite flavor is: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Pick your favorite flavor:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">Grapefruit</option>
//             <option value="lime">Lime</option>
//             <option value="coconut">Coconut</option>
//             <option value="mango">Mango</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>


// key = {car.id}
// id = {car.id}
// make = {car.make}
// model = {car.model}
// color = {car.color}
// price = {car.price}
// image = {car.image}
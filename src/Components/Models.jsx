import { useState } from "react"
import Model from "./Model"
import { data } from "../State/state"


export default function Models(){

     const [carModels] = useState(data.cars)


    // useEffect(()=>{
    //     fetch("src/State/models.json")
    //         .then(res => res.json())
    //         .then(data => setCarModels(data.cars))

    // }, [])


    const models = carModels.map( car => {
        return <Model
            key = {car.id}
            id = {car.id}
            make = {car.make}
            model = {car.model}
            color = {car.color}
            price = {car.price}
            image = {car.image}

        />
    })

    return(
        <div className="models">
            {models}
        </div>
    )
}
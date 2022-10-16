import { useNavigate } from "react-router-dom"

export default function Home(){

    const navigate = useNavigate()

    return(
        <div className="home">
            <div className="home-left">
                <p>Bayerische Motoren Werke AG, abbreviated as BMW, is a German multinational
                   manufacturer of performance luxury vehicles and motorcycles headquartered in Munich, Bavaria, Germany.
                </p>
                <p>The global BMW Headquarters in Munich represents the cylinder head of a 4-cylinder engine.
                    It was designed by Karl Schwanzer and was completed in 1972. The building has become a European
                    icon and was declared a protected historic building in 1999.
                    The main tower consists of four vertical cylinders standing next to and across
                    from each other. Each cylinder is divided horizontally in its center by a mold in the facade.
                    Notably, these cylinders do not stand on the ground; they are suspended on a central support tower.
                    BMW Museum is a futuristic cauldron-shaped building, which was also designed by Karl Schwanzer and 
                    opened in 1972. The interior has a spiral theme and the roof is a 40-metre diameter BMW logo.
                </p>
                <button className="home-button" 
                onClick={ ()=> navigate("/models") }>
                    See our models</button>
            </div>
            <div className="second-div"></div>
        </div>
    )
}
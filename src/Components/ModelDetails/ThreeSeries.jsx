import { Route, Routes } from "react-router-dom"
import ModelDetails from "./ModelDetails"
import History from "../History"
import { TestElement } from "./TestElement"
import { useParams } from "react-router-dom"

export default function ThreeSeries(props) {

    console.log("props 3 "+props)
    const {id} = useParams()

    return(
        <div>
            3 series model details
            here 3 series 
            <TestElement/>
          <Routes>
              <Route path="details" element={<ModelDetails />} />
              <Route path="history" element={<History />} />
          </Routes>

        </div>
    )
}
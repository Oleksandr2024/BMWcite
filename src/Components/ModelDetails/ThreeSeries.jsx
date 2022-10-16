import { Route, Routes } from "react-router-dom"
import ModelDetails from "./ModelDetails"
import History from "../History"

export default function ThreeSeries(props) {

    console.log("props 3 "+props)

    return(
        <div>
            3 series model details
          <Routes>
              <Route path="details" element={<ModelDetails />} />
              <Route path="history" element={<History />} />
          </Routes>

        </div>
    )
}
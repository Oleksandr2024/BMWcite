import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './Components/Home'
import History from './Components/History'
import Models from './Components/Models'
import NotFound from './Components/NotFound'
// import ModelDetails from './Components/ModelDetails/ModelDetails'
import ThreeSeries from "./Components/ModelDetails/ThreeSeries"
import { Layout } from './Components/Layout'

function App() {

  return (
      <Router>
      <div className="App">
          <div className="content">
          <Routes>
            <Route path = "/" element = {<Layout/>}>  {/* component that describes our layout. Parent route with closing tag */}
                <Route path = "/home" element = {<Home/>} /> {/* "/home" instead of index =>link is always active..? */}
                <Route path = "/models/*" element = {<Models />} /> {/* "*"-means it can be any following path */}
                <Route path = "/history" element = {<History />} />
                <Route path = "*" element = {<NotFound />} />   {/* not working  ??? */}
                <Route path = "models/model-details-3/*" element = {<ThreeSeries/>}/>
            </Route>    
        </Routes>
       </div>
      </div>
    </Router>
  )
}

export default App

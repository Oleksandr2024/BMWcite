import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import History from './Components/History'
import Models from './Components/Models'
import NotFound from './Components/NotFound'
import Footer from './Components/Footer'
// import ModelDetails from './Components/ModelDetails/ModelDetails'
import ThreeSeries from "./Components/ModelDetails/ThreeSeries"

function App() {

  return (
      <Router>
      <div className="App">
          <Navbar/>
          <div className="content">
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/models/*" element={<Models />} /> {/* *means it can be any following path */}
                {/* <Route path="/model-details" element={<ModelDetails />} /> */}
                <Route path="/history" element={<History />} />
                <Route path="*" element={<NotFound />} />   {/* not working  ??? */}
                <Route path="/models/model-details-3/*" element={<ThreeSeries/>}/>
              </Routes>
          </div>
          <Footer/>
      </div>
    </Router>
  )
}

export default App

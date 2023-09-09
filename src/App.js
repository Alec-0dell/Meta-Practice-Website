import './App.css';
import Homepage from './Components/Homepage';
import AboutMe from './Components/AboutMe';
import Calc from './Components/Calc';
import { Routes , Route, Link} from 'react-router-dom'


function App() {
  return (
    <div> 
      <nav>
        <Link to="/" style={{padding: "10px"}}> Homepage </Link>
        <Link to="/about-me" style={{padding: "10px"}}> About me </Link>
        <Link to="/calc" style={{padding: "10px"}}>Caclulator</Link>
      </nav>
      <Routes>
        <Route path="/" element={ <Homepage/> }/>
        <Route path="/about-me" element={ <AboutMe/> }/>
        <Route path='/calc' element={<Calc/>}/>
      </Routes>
    </div>
  )
}

function Heading(){
  let title = "some shit"
  return (
    <h1>{title}</h1>
  )
}

export default App;

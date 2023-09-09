import Footer from './Footer'; 
import Nav from './Nav';
import Promo from './Promo';
import Btn from './Btn';
import Rand from './Rand';


function Homepage() {
  return (
    <div> 
      <Heading/> 
      <Btn/> 
      <Nav title = "New Home"/> 
      <Promo/>  
      <Rand/> 
      <Footer/> 
    </div>
  )
}

function Heading(){
  let title = "some shit"
  return (
    <h1>{title}</h1>
  )
}

export default Homepage
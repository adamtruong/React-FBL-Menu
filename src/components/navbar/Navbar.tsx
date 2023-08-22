import { Link } from "react-router-dom"
import "./navbar.scss"


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
         <Link to="/"><img src="./logo.svg" alt="" /></Link>
        <span>Lazada</span>
      </div>
      <div className="icons">
        <img src="./icons/search.svg" alt="" className="icon" />
        <img src="./icons/notification.svg" alt="" className="icon" />  
        <div className="user">
          <img src="https://images.pexels.com/photos/511313/pexels-photo-511313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="icon" />
          <span>Adam</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
import { Link } from "react-router-dom"
import "./menu.scss"

const Menu = () => {
  return (
    <div className="menu">

      <div className="item">
        <span className="title">ADMIN</span>
        <Link to="/" className="listItem">  {/* to="/" is the url path */}
          <span className="listItemTitle">Home</span>
        </Link>

        <Link to="/users/1" className="listItem">
          <span className="listItemTitle">Profile</span>
        </Link>
      </div>


      <div className="item">
        <span className="title">MANAGEMENT</span>
        <Link to="/users" className="listItem">
          <span className="listItemTitle">User Management</span>
        </Link>

        <Link to="/products" className="listItem">
          <span className="listItemTitle">Product Category</span>
        </Link>

        <Link to="/seller" className="listItem">
          <span className="listItemTitle">Seller Approval</span>
        </Link>

        <div className="item">
          <span className="title">ACCOUNT</span>
          <Link to="/settings" className="listItem">
            <span className="listItemTitle">Settings</span>
          </Link>

          <Link to="/logout" className="listItem">
            <span className="listItemTitle">Logout</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Menu
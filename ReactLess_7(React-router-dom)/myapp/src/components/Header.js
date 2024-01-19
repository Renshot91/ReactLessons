import { Link, useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate()

    return (
      <div className="header_wrapper">
        <div className="logo"></div>
        <div className="menu_wrapper">
            <Link to={"/"}>
                <p>Home</p>
            </Link>
            <Link to={"/about"}>
                <p>About</p>
            </Link>
            <Link to={"/contacts"}>
                <p>Contacts</p>
            </Link>
        </div>
        <div>
            <button onClick={() => navigate(-1)}>Back</button>
            <button onClick={() => navigate(1)}>Next</button>
        </div>
      </div>
    );
  }
  
export default Header;
import "./navbar.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import profileImg from "../../../Assets/image 4.png";

const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <div className="navbar__searchbar">
          <form className="searchbar">
            <div className="form-details">
              <input type="text" placeholder="Search for anything" />
              <button>
                <AiOutlineSearch />
              </button>
            </div>
          </form>
        </div>
        <div className="navbar__links">
          <ul>
            <li>
              <p className="docs">Docs</p>
            </li>
            <li>
              <p className="bell">
                <IoIosNotificationsOutline />
              </p>
            </li>
            <li>
              {/* <div className="img__container"> */}
              <img
                className="img__container"
                src={profileImg}
                alt="profile img"
              />
              {/* </div> */}
              <p className="username">Adedeji</p>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

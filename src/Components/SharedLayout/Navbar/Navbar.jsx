import "./navbar.scss";


const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <div className="navbar__searchbar">
          <form className="searchbar">
            <div className="form-details">
              <input type="text" />
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

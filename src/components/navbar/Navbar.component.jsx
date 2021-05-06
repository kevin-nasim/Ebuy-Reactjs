import "./navbar.component.css";
import hamburgerMenu from "../../Svgs/hamburger menu.svg";
import cart from "../../Svgs/cart.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-component">
          <div className="navbar-menu">
            <img src={hamburgerMenu} alt="" />
          </div>

          <div className="logo">
            <h1>Ebuy</h1>
          </div>

          <div className="cart">
            <img src={cart} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

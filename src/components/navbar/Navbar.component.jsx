import "./navbar.component.css";
import hamburgerMenu from "../../Svgs/hamburger menu.svg";
import cart from "../../Svgs/cart.svg";

const Navbar = ({ invert }) => {
  console.log(invert);
  return (
    <div className="navbar">
      <div className="container">
        <div
          className="navbar-component"
          style={{
            filter: `invert(${invert})`,
          }}
        >
          <div className="navbar-menu">
            <img className="menu-mobile" src={hamburgerMenu} alt="" />
            <div className="menu-desktop">
              <p>Shop</p>
              <p>Contact</p>
              <p>Favorite</p>
            </div>
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

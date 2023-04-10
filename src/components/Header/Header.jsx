/* eslint-disable max-len */
import { NavLink } from "react-router-dom";
import "../../index.css";
import "./Header.css";
import { useSelector } from "react-redux";
import dog from "../../assets/dog.svg";
import basket from "../../assets/basket.svg";
import dogface from "../../assets/dog-face.svg";
import { getAllCartProductsSelector } from "../../redux/slices/cartSlice";

function Header() {
  const cartProducts = useSelector(getAllCartProductsSelector);
  return (
    <div className="p-3 header_footer bg-success text-white bg-opacity-75">
      <NavLink to="/">
        <div className="d-flex align-items-center">
          <img
            src={dogface}
            alt=""
            style={{ widows: "90px", height: "90px" }}
          />
          <a href=" ">
            <h1>Dog Food</h1>
          </a>
        </div>
      </NavLink>
      <div className="d-flex align-items-center justify-content-center">
        <NavLink
          to="/signin"
          className={({ isActive }) => (isActive ? "active_link" : undefined)}
        >
          <img src={dog} alt="" style={{ width: "70px", height: "70px" }} />
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? "active_link" : undefined)}
        >
          <img
            src={basket}
            alt=""
            style={{
              width: "70px",
              height: "70px",
              padding: "10px",
              position: "relative",
            }}
          />
          <span className="cart__number">{cartProducts.length}</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;

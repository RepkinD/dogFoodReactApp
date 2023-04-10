/* eslint-disable max-len */
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../../index.css";
import { clearCart } from "../../redux/slices/cartSlice";
import { getTokenSelector, logOut } from "../../redux/slices/userSlice";
import styleFooter from "./footer.module.css";

function Footer() {
  const userToken = useSelector(getTokenSelector);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
    dispatch(clearCart());
  };
  return (
    <>
      <div className={styleFooter.pos}>
        <div className="p-3 header_footer bg-success text-white bg-opacity-75">
          <div className="d-flex justify-content-around">
            <div className={styleFooter.contacts}>
              <h4>Наши контакты</h4>
              <div className="d-flex flex-column">
                <a href="tel:74959999999">+7 (495) 999-99-99</a>
                <a href="email:dogfood@gmail.com">dogfood@gmail.com</a>
              </div>
            </div>
            <div className={styleFooter.clients}>
              <h4>Покупателям</h4>
              <div className="d-flex flex-column">
                <a href="#Акции">Акции</a>
                <a href="#Бонусные карты">Бонусные карты</a>
                <a href="#Доставка">Доставка</a>
                <a href="#Условия возврата">Условия возврата</a>
              </div>
            </div>
          </div>
          <div className={styleFooter.copyright}>DogFood © 2023</div>
          <span>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "btn mx-1 btn-info" : "btn mx-1 btn-primary"
              }
            >
              Каталог
            </NavLink>
            <button
              className={userToken ? "btn btn-info mx-2" : "btn btn-light mx-2"}
              type="button"
              onClick={handleLogOut}
            >
              Выйти
            </button>
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;

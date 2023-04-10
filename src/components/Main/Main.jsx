import { Link } from "react-router-dom";
import "./Main.css";
import Footer from "../Footer/Footer";

function Main() {
  return (
    <>
      <div className="picture ">
        <div className="opacity">
          <h1>Лакомства для собак</h1>
          <Link to="/products">
            <button type="button" className="btn btn-primary mt-4">
              перейти к покупкам
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Main;

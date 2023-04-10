import { Filters } from "../Filters/Filters";
import Footer from "../Footer/Footer";
import Products from "../Products/Products";
import Search from "../Search/Search";

function Cathalog() {
  return (
    <>
      <Search />
      <Filters />
      <Products />
      <Footer />
    </>
  );
}

export default Cathalog;

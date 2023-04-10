/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import ProductItem from "../ProductItem/ProductItem";
import withQuery from "../HOCs/withQuery";
import { DogFoodApiConst } from "../../api/DogFoodapi";
import { getSearchSelector } from "../../redux/slices/filterSlice";
import { getQuerySearchKey } from "./utils";
import { getTokenSelector } from "../../redux/slices/userSlice";
import { FILTER_QUERY_NAME, getFilteredProducts } from "../Filters/constants";

function ProductsInner({ data }) {
  const products = data;
  return (
    <div>
      {products[0] && (
        <ul className="d-flex p-2 flex-wrap align-items-center justify-content-around">
          {products.map((product) => (
            <ProductItem
              key={product._id}
              id={product._id}
              name={product.name}
              price={product.price}
              discount={product.discount}
              pictures={product.pictures}
            />
          ))}
        </ul>
      )}
      {!products[0] && products && (
        <h5 className="card-header">По вашему запросу ничего не найдено</h5>
      )}
    </div>
  );
}
const ProductsInnerWithQuery = withQuery(ProductsInner);

function Products() {
  const userToken = useSelector(getTokenSelector);
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const currentFilterNameFromQuery = searchParams.get(FILTER_QUERY_NAME);

  useEffect(() => {
    if (!userToken) {
      navigate("/signin");
    }
  });

  const search = useSelector(getSearchSelector);
  const {
    data = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: getQuerySearchKey(search),
    queryFn: () => DogFoodApiConst.getAllProducts(search, userToken),
    enabled: userToken !== undefined && userToken !== "",
  });

  let products = data;

  if (currentFilterNameFromQuery) {
    products = getFilteredProducts(data, currentFilterNameFromQuery);
  }

  return (
    <ProductsInnerWithQuery
      data={products}
      isLoading={isLoading}
      isError={isError}
      refetch={refetch}
      error={error}
    />
  );
}

export default Products;

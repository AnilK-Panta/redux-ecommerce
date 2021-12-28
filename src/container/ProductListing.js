import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductCoponent from "./ProductCoponent";
import { setProduct } from "../redux/action/productAction";

export default function ProductListing() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchFunction = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("error ", err);
      });
    dispatch(setProduct(response.data));
  };
  useEffect(() => {
    fetchFunction();
  }, []);
  return (
    <div className="ui grid container">
      <ProductCoponent />
    </div>
  );
}

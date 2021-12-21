import { render } from "@testing-library/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ProductCoponent() {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="ui image center">
                <img
                  src={image}
                  alt={title}
                  style={{ height: "200px", width: "auto" }}
                />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">{price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
}
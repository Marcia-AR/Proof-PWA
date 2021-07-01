import React from "react";
import { fetchAllProducts } from "../store/allProducts";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.loadProducts();
  }

  render() {
    const products = this.props.products || [];
    return (
      <div className="product-container">
        <h1>List of products</h1>
        {products.map((product) => {
          return (
            <div key={product.id} className="product">
              <img width={602} height={339} src={product.imageURL} />
              <div id="product-details">
                <Link to={`/products/${product.id}`}>
                  <h4>{product.name}</h4>
                </Link>
                <p>
                  {product.prepTime} {product.prepTime > 1 ? "hours" : "hour"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapState = (state) => {
  console.log("State", state);
  return {
    products: state.allProducts,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadProducts: () => dispatch(fetchAllProducts()),
  };
};

export default connect(mapState, mapDispatch)(AllProducts);

import React, { Component } from "react";
import "./App.css";
import Products from "./components/Products";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], filteredProducts: [], isLoading: false };
  }
  componentDidMount() {
    let url = "http://localhost:3000/products";
    fetch(url)
      .then(res => res.json())
      .then(json =>
        this.setState({
          isLoading: true,
          products: json,
          filteredProducts: json
        })
      );
  }
  render() {
    return (
      <div className="container">
        <h1>Ascii Faces shopping App</h1>
        <hr />
        <div className="row">
          <div className="col-md-8">
            <Products
              products={this.state.filteredProducts}
              handleAddToCart={this.state.handleAddToCart}
            />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}

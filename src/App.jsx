import React, { Component } from "react";
import "./App.css";
import Products from "./components/Products.jsx";
import Loading from "./components/Loading.jsx";

const ProductWithLoading = new Loading(Products);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], filteredProducts: [], isLoading: false };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    let url = "http://localhost:3000/products";
    fetch(url)
      .then(res => res.json())
      .then(data =>
        this.setState({
          isLoading: false,
          products: data,
          filteredProducts: data
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
            {/* <Products
              products={this.state.filteredProducts}
              handleAddToCart={this.state.handleAddToCart}
            /> */}
            <ProductWithLoading
              isLoading={this.state.isLoading}
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

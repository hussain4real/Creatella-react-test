import React, { Component } from "react";
// import fetch from "isomorphic-fetch";
import "./App.css";
// import Loading from "./components/Loading.jsx";
import ProductList from "./components/product-list/index.jsx";

// const ProductWithLoading = new Loading(ProductList);

export default class App extends Component {
  // onScroll = () => {
  //   window.addEventListener("scroll", () => {
  //     const {
  //       scrollTop,
  //       scrollHeight,
  //       clientHeight
  //     } = document.documentElement;
  //     // console.log({ scrollTop, scrollHeight, clientHeight });
  //     if (clientHeight + scrollTop >= scrollHeight) {
  //       console.log("at the bottom");
  //       this.loadProducts();
  //     }
  //   });
  // };

  // loadMore = () => {
  //   this.setState(
  //     prevState => ({
  //       page: prevState.page + 1,
  //       scrolling: true
  //     }),
  //     this.loadProducts
  //   );
  // };
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
            <ProductList
            // isLoading={this.state.isLoading}
            // products={this.state.filteredProducts}
            />
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
// import fetch from "isomorphic-fetch";
import "./App.css";
import Products from "./components/Products.jsx";
import Loading from "./components/Loading.jsx";

const ProductWithLoading = new Loading(Products);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filteredProducts: [],
      isLoading: false,
      limit: 25,
      page: 1,
      totalPages: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.scrollListener = window.addEventListener("scroll", e => {
      this.handleScroll(e);
    });
    this.loadProducts();
  }

  handleScroll = e => {
    const { scrolling, totalPages, page } = this.state;
    if (scrolling) return;
    if (totalPages <= page) return;
    const lastDivChild = document.getElementById("wrap");
    const contentHeight = lastDivChild.offsetHeight;
    const yOffset = window.pageYOffset;
    const y = yOffset + window.innerHeight;
    if (y >= contentHeight) this.loadMore();
    // const lastDivChildOffset =
    //   lastDivChild.offsetTop + lastDivChild.clientHeight;
    // const pageOffset = window.pageYOffset + window.innerHeight;
    // let bottomOffset = 20;
    // if (pageOffset > lastDivChildOffset - bottomOffset) this.loadMore();
  };

  loadProducts = () => {
    const { limit, page, products } = this.state;
    let url = `http://localhost:3000/products?_page=${page}&_limit=${limit}`;
    fetch(url)
      .then(res => res.json())
      .then(json =>
        this.setState({
          isLoading: false,
          products: [{ ...products, ...json.products }],

          filteredProducts: json
          // scrolling: false,
          // total_pages: json.total_pages
        })
      );
  };

  loadMore = () => {
    this.setState(
      prevState => ({
        page: (prevState.page += 1)
      }),
      this.loadProducts
    );
  };

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
      <div className="container" id="wrap">
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

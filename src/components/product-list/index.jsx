import React, { Component } from "react";
import Products from "./Products";

export default class ProductList extends Component {
  state = {
    products: [],
    filteredProducts: [],
    isLoading: false,
    limit: 25,
    page: 1,
    totalPages: false
  };

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
    const lastDivChild = document.querySelector("ul.products > li:lastchild");
    //  const contentHeight = lastDivChild.offsetHeight;
    //  const yOffset = window.pageYOffset;
    //  const y = yOffset + window.innerHeight;
    //  if (y >= contentHeight) this.loadMore();
    const lastDivChildOffset =
      lastDivChild.offsetTop + lastDivChild.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
    let bottomOffset = 20;
    if (pageOffset > lastDivChildOffset - bottomOffset) this.loadMore();
  };

  loadProducts = () => {
    const { limit, page, products } = this.state;
    let url = `http://localhost:3000/products?_page=${page}&_limit=${limit}`;
    fetch(url)
      .then(res => res.json())
      .then(json =>
        this.setState({
          isLoading: false,
          products: [...products, json.products],

          filteredProducts: json
          // scrolling: false,
          // total_pages: json.total_pages
        })
      );
    console.log(products);
  };

  loadMore = () => {
    this.setState(
      prevState => ({
        page: (prevState.page += 1)
      }),
      this.loadProducts
    );
  };

  render() {
    return (
      <ul className="products">
        {this.state.products.map((product, index) => (
          <li key={index}>
            <Products {...product} />
          </li>
        ))}
      </ul>
    );
  }
}

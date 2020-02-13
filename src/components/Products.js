import React, { Component } from "react";
import util from "../util";

export default class Products extends Component {
  render() {
    if (this.props.isLoading) {
      return <div>loading...</div>;
    } else {
      const productItems = this.props.products.map((product, index) => (
        <div className="col-md-4" key={index}>
          <div className="thumbnail text-center">
            <a href={`#${product.id}`} onClick={this.props.handleAddToCart}>
              <p>{product.face}</p>
            </a>
            <div>
              <b>{util.formatCurrency(product.price)}</b>
              <button
                className="btn btn-primary"
                onClick={e => this.props.handleAddToCart(e, product)}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ));
      return <div className="row">{productItems}</div>;
    }
  }
}

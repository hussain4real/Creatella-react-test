import React, { Component } from "react";
import util from "../util";

export default class Products extends Component {
  render() {
    if (!this.props.products) return null;
    if (!this.props.products.length) return <p>No repos, sorry</p>;

    return (
      <div className="row">
        <div className="col-md-4">
          <div>{product.face}</div>
          <div>{util.formatCurrency(product.price)}</div>
        </div>
      </div>
    );
  }
}

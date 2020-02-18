import React, { Component } from "react";
import PropTypes from "prop-types";
import Ad from "./Ads";
import Util from "./Utils";
import Loading from "./Loading";

class Product extends Component {

    // Render the products in a grid form.

  renderFaces() {
    const { products, isLoading } = this.props;

    if (products.length === 0 ) {
      return <Loading />;
    }
// logic for displaying dissimilar ads
    return products.map(face => {
      if (face.hasOwnProperty("ad")) {
        return (
          <div key={face.ad} className="ads col-lg-12 text-center">
            <Ad id={face.ad} />
          </div>
        );
      }

      return (
        <div key={face.id} className="col-lg-3 col-md-6 col-sm-12 text-center">
          <Util
            face={face.face}
            size={face.size}
            price={face.price}
            date={face.date}
          />
        </div>
      );
    });
  }

  render() {
    const { products, isLoading, totalProducts } = this.props;

    return (
      <div className="col-lg-12 faces">
        <div className="row">
          {this.renderFaces()}
          {totalProducts >= products.length ? (
            products.length >= 20 && <Loading show={isLoading} />
            ) : (
              <p className="m-auto">~ end of catalogue ~</p>

          )}
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  products: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  totalProducts: PropTypes.bool.isRequired
};

export default Product;

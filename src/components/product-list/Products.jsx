import React from "react";
// import util from "../../util";

// export default class Products extends Component {
//   render() {
//     if (!this.props.products) return null;
//     if (!this.props.products.length) return <p>No repos, sorry</p>;

//     return (
//       <div className="row product">
//         <div className="col-md-4">
//           <div>{product.face}</div>
//           <div>{util.formatCurrency(product.price)}</div>
//         </div>
//       </div>
//     );
//   }
// }

const Products = props => (
  <div className="product row">
    <div>{props.face}</div>
    <div>{props.price}</div>
  </div>
);

export default Products;

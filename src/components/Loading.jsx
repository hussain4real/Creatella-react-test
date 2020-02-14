// a higher order component to deal with loading in UIs and fades out  all those manual if-else statements in every single component

import React from "react";

function Loading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) {
      return <Component {...props} />;
    } else {
      return <p>Be Hold, fetching data may take some time </p>;
    }
  };
}
export default Loading;

// import React, { Component } from "react";

// export default class Loading extends Component {
//   render() {
//     const loadingComponent = ({ isLoading, ...props }) => {
//       if (!isLoading) {
//         return <Component {...props} />;
//       } else {
//         return <p>Be Hold, fetching data may take some time :)</p>;
//       }
//     };
//     return <div>{loadingComponent}</div>;
//   }
// }
// if (!isLoading) return <Component {...props} />;
// return <p>Be Hold, fetching data may take some time :)</p>;

import React, { Component } from "react";
import PropTypes from "prop-types";

class Loading extends Component {
  render() {
    const { show } = this.props;

    return (
      show && (
        <div className="text-center m-auto">
          <div className="loader"></div>
          <span className="medium badge badge-info font-weight-bold"  >Loading...<br/>Fetching more Faces :)</span>
        </div>
      )
    );
  }
}

Loading.propTypes = {
  show: PropTypes.bool
};

Loading.defaultProps = {
  show: true
};

export default Loading;

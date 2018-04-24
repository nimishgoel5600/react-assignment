import React, { Component } from "react";

class Validation extends Component {
  constructor() {
    super();
    this.minimumCharsAllowed = 5;
  }

  render() {
    let renderLong=(
        <h2>The Entered Text is Too Long. </h2>
    );
    let renderShort=(
        <h2>The Entered Text is Too Short. </h2>
    );
    return (
      <div className="validation">
        {this.props.charLength > this.minimumCharsAllowed ? renderLong : renderShort }
      </div>
    );
  }
}

export default Validation;

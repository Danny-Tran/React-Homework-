import React from "react";
import PropTypes from "prop-types";

// GALLERY COMPONENT
class Gallery extends React.Component {
  renderImage(imageUrl) {
    return (
      <div>
        <img src={imageUrl} />
      </div>
    );
  }

  render() {
    return (
      <div className="images">
        {this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}
      </div>
    );
  }
}

export default Gallery;
import React from "react";
import PropTypes from "prop-types";

// GALLERY COMPONENT
class Gallery extends React.Component {
  renderImage(imageUrl) {
    return (
      <span>
        <img src={imageUrl} />
      </span>
    );
  }

  render() {
    return (
      <div className="images" >
        {this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}
      </div>
    );
  }
}

export default Gallery;
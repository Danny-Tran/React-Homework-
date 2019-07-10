import React from 'react';

/**
 * A counter button: tap the button to increase the count.
 */
class Counter extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     count: 0,
  //   };
  // }

  // render() {
  //   return (
  //     <button
  //       onClick={() => {
  //         this.setState({ count: this.state.count + 1 });
  //       }}
  //     >
  //       Count: {this.state.count}
  //     </button>
  //   );
  // }

  
}

Gallery.propTypes = {
  imageUrls: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
};

export default Counter;

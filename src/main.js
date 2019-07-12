import React from "react";
import ReactDOM from "react-dom";
import axios from "axios"
import InfiniteScroll from "react-infinite-scroll-component"


// Single image function that load each image
const UnsplashImage = ({ url, key }) => (
  <div className="image-item" key={key} >
    <img src={url} />
  </div>
);
// Gallery component
let Gallery = () => {
  const [images, setImages] = React.useState([]);
  const [loaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = (count = 10) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = "a22f61e98da4efa25d8860e77a91a596867dd335ecdf7feb12e086943db9565a";

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
      .then(res => {
        setImages([...images, ...res.data]);
        setIsLoaded(true);
      });
  };

  return (
    <InfiniteScroll
      dataLength={images}
      next={() => fetchImages(5)}
      hasMore={true}
      loader={
        <img
          src="https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif"
          alt="loading"
        />
      }
    >
      <div>
        if (loaded){
          images.map((image, index) => (
            <UnsplashImage
            url={image.urls.regular}
            key={index}
            />
            ))
          } else {
             ""
          }
          
      </div>
    </InfiniteScroll>
  );
};


// Render the component to the DOM element with ID of mount
ReactDOM.render(<Gallery />, document.getElementById("mount"));
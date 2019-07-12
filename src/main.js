import React from "react";
import ReactDOM from "react-dom";
import axios from "axios"
import InfiniteScroll from "react-infinite-scroll-component"

const UnsplashImage = ({ url, key }) => (
  <div className="image-item" key={key} >
    <img src={url} />
  </div>
);

let Collage = () => {
  const [images, setImages] = React.useState([]);
  const [loaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = (count = 10) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey =
      "a22f61e98da4efa25d8860e77a91a596867dd335ecdf7feb12e086943db9565a";

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
      <div className="image-grid">
        {loaded
          ? images.map((image, index) => (
              <UnsplashImage
                url={image.urls.regular}
                key={index}
              />
            ))
          : ""}
      </div>
    </InfiniteScroll>
  );
};





// Render the component to the DOM element with ID of mount
ReactDOM.render(<Collage />, document.getElementById("mount"));
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios"
import InfiniteScroll from "react-infinite-scroll-component"


// Single image function that load each image
const UnsplashImage = ({ url, key }) => (
  <div key={key} >
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

  // fetch image function using API key and axios to fetch images from unsplash
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
    // using infinite-scroll from react component to give user a smoother ux
    // fetch 5 new images when scroll to the bottom
    // loop through all images and pass data into unsplashimage function
    <InfiniteScroll
      dataLength={images}
      next={() => fetchImages(5)}
      hasMore={true}
      loader={
        <img src="https://loading.io/spinners/blocks/index.rotating-squares-preloader-gif.gif" />
      }
    >
  
    <div>
        {images.map((image, index) => (
          <UnsplashImage url={image.urls.regular} key={index} />
          ))
        }
    </div>
    
    </InfiniteScroll>
  );
};


// Render the component to the DOM element with ID of mount
ReactDOM.render(<Gallery />, document.getElementById("mount"));
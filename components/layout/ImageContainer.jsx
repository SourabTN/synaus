import PropTypes from "prop-types";
import Image from "next/image";

const ImageContainer = ({
  imgSrc,
  height,
  zoomOnHover,
  childrenStyles,
  objectFit,
  children,
}) => {
  return (
    <div className={`relative w-full ${height}`}>
      <Image
        src={imgSrc}
        alt={"picsum"}
        layout={"fill"}
        objectPosition={"center"}
        objectFit={objectFit ?? "cover"}
        quality={100}
        className={
          zoomOnHover && "transition duration-700 group-hover:scale-110"
        }
      />
      {children && (
        <div className={`absolute top-0 w-full h-full ${childrenStyles}`}>
          {children}
        </div>
      )}
    </div>
  );
};

// PropTypes Validation
ImageContainer.propTypes = {
  imgSrc: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.node,
};

ImageContainer.defaultProps = {
  imgSrc: "/HomePage/us-bangla-banner-img-1.png",
  // imgSrc: '/img/homepage_banner.png',
  height: "h-[650px]",
  children: null,
};

export default ImageContainer;

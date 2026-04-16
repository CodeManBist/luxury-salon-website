import React from "react";

const ImageCard = ({
  src,
  alt,
  wrapperClassName = "",
  imageClassName = "",
  overlayClassName,
  title,
  titleClassName = "",
}) => {
  return (
    <div className={wrapperClassName}>
      <img src={src} alt={alt} className={imageClassName} />
      {overlayClassName ? <div className={overlayClassName}></div> : null}
      {title ? <p className={titleClassName}>{title}</p> : null}
    </div>
  );
};

export default ImageCard;

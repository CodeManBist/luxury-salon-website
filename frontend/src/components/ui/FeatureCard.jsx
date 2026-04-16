import React from "react";

const FeatureCard = ({
  icon,
  iconWrapperClassName = "",
  iconClassName = "",
  title,
  titleClassName = "",
  description,
  descriptionClassName = "",
  cardClassName = "",
}) => {
  const Icon = icon;

  return (
    <div className={cardClassName}>
      {Icon ? (
        <div className={iconWrapperClassName}>
          <Icon className={iconClassName} />
        </div>
      ) : null}
      <h3 className={titleClassName}>{title}</h3>
      <p className={descriptionClassName}>{description}</p>
    </div>
  );
};

export default FeatureCard;

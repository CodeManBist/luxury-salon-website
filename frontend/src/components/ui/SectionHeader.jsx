import React from "react";

const SectionHeader = ({
  align = "left",
  containerClassName = "",
  label,
  labelClassName = "",
  title,
  titleClassName = "",
  description,
  descriptionClassName = "",
  children,
}) => {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`${alignment} ${containerClassName}`.trim()}>
      {label ? <p className={labelClassName}>{label}</p> : null}
      {title ? <h2 className={titleClassName}>{title}</h2> : null}
      {description ? <p className={descriptionClassName}>{description}</p> : null}
      {children}
    </div>
  );
};

export default SectionHeader;

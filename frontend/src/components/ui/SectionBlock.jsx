import React from "react";

const SectionBlock = ({ className = "", children }) => {
  return <section className={className}>{children}</section>;
};

export default SectionBlock;

import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  // 🎨 Variants
  const variants = {
    primary:
      "bg-[linear-gradient(135deg,#735C00_0%,#D4AF37_100%)] text-white",
    secondary:
      "bg-[#E4E2DE] font-[14px] font-bold text-[#1B1C1A]",
    whatsapp:
      "bg-[#25D366] text-white",
  };

  // 📏 Sizes
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      className={`
        ${variants[variant]}
        ${sizes[size]}
        rounded-full
        font-medium
        transition-all duration-200
        hover:brightness-110
        active:scale-95 active:opacity-90
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
import React from "react";

type TProps = {
  size?: "small" | "medium" | "large";
  text?: string;
  onClick?: () => void;
  isButton?: boolean;
};
const Button = ({
  size = "small",
  text = "",
  onClick = () => null,
  isButton = false,
}: TProps) => {
  const smallSize = size === "small";
  const mediumSize = size === "medium";
  const largeSize = size === "large";
  if (isButton) {
    return <button onClick={onClick}>{text}</button>;
  }
  return (
    <div
      className={`flex content-center justify-center bg-amber-200 ${
        smallSize ? "px-4" : mediumSize ? "px-6" : "px-8"
      }
      ${smallSize ? "py-2" : mediumSize ? "py-3" : "py-4"} rounded-xl
      bg-gray-700
      `}
    >
      <p
        className={`${
          smallSize ? "text-xl" : mediumSize ? "text-xl" : "text-2xl"
        } 
          tracking-widest
          text-white
          font-cafe24
        `}
      >
        {text}
      </p>
    </div>
  );
};

export default Button;

import { useState } from "react";

const Button = ({ text, dBlock = "inline", width, handleClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const btnStyle = {
    padding: "1.5rem 3rem",
    background: isHovered ? "#2172e5" : "#0058f2",
    color: "#fff",
    fontWeight: "500",
    cursor: "pointer",
    width: `${width}px`,
    display: dBlock,
    marginTop: "1.5rem",
    border: "0",
    outline: "0",
    borderRadius: "1rem",
    fontSize: "1.7rem",
  };

  return (
    <button
      style={btnStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;

import React from "react";

type param = {
  title: string;
  themeColor?: string; //背景顏色
  fontColor?: string;
  startIcon?: React.ReactNode | string; //左邊圖示
  endIcon?: React.ReactNode | string; //右邊圖示
  handleClick?: () => void;
};

function Button({
  title,
  themeColor,
  fontColor,
  startIcon,
  endIcon,
  handleClick = () => {},
}: param) {
  return (
    <div className="button">
      <button
        className="primary"
        style={{ backgroundColor: themeColor, color: fontColor }}
        onClick={handleClick}
      >
        {startIcon && (
          <span className="icon start-icon">
            {typeof startIcon === "string" ? (
              <img src={startIcon} alt="icon" />
            ) : (
              startIcon
            )}
          </span>
        )}
        {title}
        {endIcon && (
          <span className="icon end-icon">
            {typeof endIcon === "string" ? (
              <img src={endIcon} alt="icon" />
            ) : (
              endIcon
            )}
          </span>
        )}
      </button>
    </div>
  );
}

export default Button;

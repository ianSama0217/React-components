import { ReactNode } from "react";
import { BaseButton, IconWrapper } from "./style.ts";

type ButtonProps = {
  variant?: "primary" | "secondary" | "success" | "danger" | "warning";
  startIcon?: string | ReactNode;
  endIcon?: string | ReactNode;
  title?: string;
  buttonId?: string;
  onClick?: () => void | Promise<any>;
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  startIcon,
  endIcon,
  title,
  buttonId,
  onClick,
}) => {
  return (
    <BaseButton $variant={variant} id={buttonId} onClick={onClick}>
      {startIcon && (
        <IconWrapper position="start">
          {typeof startIcon === "string" ? (
            <img src={startIcon} height="16" width="16" />
          ) : (
            startIcon
          )}
        </IconWrapper>
      )}
      {title}
      {endIcon && (
        <IconWrapper position="end">
          {typeof endIcon === "string" ? (
            <img src={endIcon} height="16" width="16" />
          ) : (
            endIcon
          )}
        </IconWrapper>
      )}
    </BaseButton>
  );
};

export default Button;

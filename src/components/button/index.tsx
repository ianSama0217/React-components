import { BaseButton } from "./style.ts";

type ButtonProps = {
  variant?: "primary" | "secondary" | "success" | "danger" | "warning";
  title?: string;
  customStyle?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  title,
  customStyle,
  onClick,
}) => {
  return (
    <BaseButton $variant={variant} className={customStyle} onClick={onClick}>
      {title}
    </BaseButton>
  );
};

export default Button;

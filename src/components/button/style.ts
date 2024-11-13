import styled from "styled-components";
import PropTypes from "prop-types";

const buttonColors: any = {
  primary: "rgb(108, 115, 252)",
  secondary: "rgb(100, 100, 100)",
  success: "rgb(40, 167, 69)",
  danger: "rgb(220, 53, 69)",
  warning: "rgb(255, 193, 7)",
};

export const BaseButton = styled.button<{ $variant?: string }>`
  border: none;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  min-height: 1.75rem;
  margin: 0.25rem;
  background-color: ${(props) => buttonColors[props.$variant || "primary"]};
  color: white;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  /* 偽類 :hover */
  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.$variant === "primary"
        ? "darkblue"
        : props.$variant === "secondary"
        ? "darkgray"
        : props.$variant === "success"
        ? "darkgreen"
        : props.$variant === "danger"
        ? "darkred"
        : props.$variant === "warning"
        ? "darkorange"
        : "darkblue"};
  }

  /* 偽類 :active */
  &:active {
    background-color: ${(props) =>
      props.$variant === "primary"
        ? "blue"
        : props.$variant === "secondary"
        ? "gray"
        : props.$variant === "success"
        ? "green"
        : props.$variant === "danger"
        ? "red"
        : props.$variant === "warning"
        ? "orange"
        : "blue"};
  }

  /* 偽類 :focus */
  &:focus {
    outline: 2px solid #80bdff; /* 聚焦時的外框 */
  }
`;

import "./Button.styles.css";
import { ButtonProps } from "./Button.types";

export const Button = ({ onClick, disabled, children }: ButtonProps) => {
  return (
    <div className="btn-container">
      <button className="btn btn-pink" onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </div>
  );
};

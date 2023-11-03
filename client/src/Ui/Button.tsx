import { ReactNode } from "react";
import classes from "./Button.module.css";
import PropTypes from "prop-types";

Button.propTypes = {
  color: PropTypes.string,
  lefticon: PropTypes.string,
  righticon: PropTypes.string,
  width: PropTypes.string,
  textcolor: PropTypes.string,
};

interface propTypes {
  color?: string;
  textcolor?: string;
  lefticon?: ReactNode;
  righticon?: ReactNode;
  width?: string | number;
}
export default function Button({
  color,
  lefticon,
  righticon,
  width,
  textcolor,
}: propTypes) {
  const styleBtn = {
    width: `${width ? width : "100px"}`,
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: " 8px 16px",
    border: "none",
    borderRadius: "4px",
    color: `${textcolor ? textcolor : " var(--BlackishGreen)"}`,
    backgroundColor: `${color ? color : " var(--secondaryGreen)"}`,
  };
  return (
    <button style={styleBtn}>
      {lefticon && <div className={classes.iconContainer}>{lefticon}</div>}
      <div className={classes.btnText}>ButtonText</div>
      {righticon && <div className={classes.iconContainer}>{righticon}</div>}
    </button>
  );
}
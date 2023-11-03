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
  onclick: () => unknown;
  color?: string;
  textcolor?: string;
  lefticon?: ReactNode;
  righticon?: ReactNode;
  width?: string | number;
  height?: string | number;
  buttonText: string;
}
export default function Button({
  onclick,
  color,
  lefticon,
  righticon,
  width,
  height,
  textcolor,
  buttonText,
}: propTypes) {
  const styleBtn = {
    width: `${width ? width : "100px"}`,
    height: `${height ? width : "40px"}`,
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
      <div className={classes.btnText}>{buttonText}</div>
      {righticon && <div className={classes.iconContainer}>{righticon}</div>}
    </button>
  );
}

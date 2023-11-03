import React from "react";
import classes from "./InputField.module.css";
import SearchIcon from "../assets/icons/SearchIcon";
import ArrowDown from "../assets/icons/ArrowDown";
import Warning from "../assets/icons/Warning";
interface propTypes {
  setValue: () => unknown;
  status: "active" | "inactive" | "error" | "success" | "";
  type: "search" | "dropdown" | "dropdownsearch" | "";
  label: string;
  subtext: string;
  placeholder: string;
  width?: string | number;
}
//set value if the function that has to be passsed as props for setting the value
export default function InputField({
  setValue,
  status,
  type,
  label = "Label",
  subtext = "subtext",
  placeholder = "placeholder",
  width = 210,
}: propTypes) {
  const inputwrapper: React.CSSProperties = {
    position: "relative",
    width: width + "px",
  };
  return (
    <div style={inputwrapper}>
      {label && (
        <label className={`${classes[status]}  ${classes.noborder}`}>
          {label}
        </label>
      )}
      <div className={`${classes.inputcontainer} ${classes[status]}`}>
        {(type === "search" || type === "dropdownsearch") && (
          <div className={classes.icon}>
            <SearchIcon height={18} width={18} status={status} />
          </div>
        )}
        <input
          type="text"
          className={`${
            type === "search" || type === "dropdownsearch"
              ? classes.inputaddpadding
              : classes.inputnopadding
          } ${status === "inactive" ?? classes.inactive}`}
          placeholder={placeholder}
        />
        {(type === "dropdown" || type === "dropdownsearch") &&
          status !== "error" && (
            <div className={classes.icon}>
              <ArrowDown height={18} width={18} status={status} />
            </div>
          )}
        {status === "error" && (
          <div className={classes.icon}>
            <Warning />
          </div>
        )}
      </div>
      {subtext && (
        <span
          className={`${classes[status]}  ${classes.subtext} ${classes.noborder}`}
        >
          {subtext}
        </span>
      )}
    </div>
  );
}

import React from "react";
import { iconPropTypes } from "./ArrowDown";
export default function SearchIcon({ height, width, status }: iconPropTypes) {
  return (
    <svg
      width={`${width ? width : 20}px`}
      height={`${height ? height : 20}px`}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.76 10.27L17.49 16L16 17.49L10.27 11.76C9.2 12.53 7.91 13 6.5 13C2.91 13 0 10.09 0 6.5C0 2.91 2.91 0 6.5 0C10.09 0 13 2.91 13 6.5C13 7.91 12.53 9.2 11.76 10.27ZM6.5 2C4.01 2 2 4.01 2 6.5C2 8.99 4.01 11 6.5 11C8.99 11 11 8.99 11 6.5C11 4.01 8.99 2 6.5 2Z"
        fill={`${status === "inactive" ? "#d2d1d3" : "#49454F"}`}
      />
    </svg>
  );
}
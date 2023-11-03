import React from "react";
export interface iconPropTypes {
  height?: number;
  width?: number;
  status?: string;
}
export default function ArrowDown({ height, width, status }: iconPropTypes) {
  return (
    <svg
      width={`${width ? width : 20}px`}
      height={`${height ? height : 20}px`}
      viewBox="0 0 16 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.25 1L8 7.75L14.75 1"
        // stroke="black"
        stroke={`${status === "inactive" ? "#d2d1d3" : "#49454F"}`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

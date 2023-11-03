import { iconPropTypes } from "./IconPropTypes";

export default function AddIcon({ height, width, status }: iconPropTypes) {
  return (
    <svg
      width={`${width ? width : 20}px`}
      height={`${height ? height : 20}px`}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 3.5V12.5M12.5 8H3.5"
        // stroke="#112211"
        stroke={`${status === "inactive" ? "#d2d1d3" : "#49454F"}`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

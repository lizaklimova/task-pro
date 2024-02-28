const Filter = ({ width, height, fillColor, strokeColor }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill={fillColor || null}
      stroke={strokeColor || null}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.6668 2H1.3335L6.66683 8.30667V12.6667L9.3335 14V8.30667L14.6668 2Z"
        stroke-opacity="0.8"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Filter;

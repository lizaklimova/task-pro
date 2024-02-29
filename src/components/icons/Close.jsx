const Close = ({ width, height, fillColor, strokeColor }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill={fillColor || null}
      stroke={strokeColor || null}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 4.5L4.5 13.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 4.5L13.5 13.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Close;

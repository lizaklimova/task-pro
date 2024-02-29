const Status = ({ width, height, fillColor, strokeColor }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill={fillColor || null}
      stroke={strokeColor || null}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4566_2402)">
        <path
          d="M2.2251 4.66671C3.3778 2.67404 5.53228 1.33337 7.99988 1.33337C11.6818 1.33337 14.6666 4.31814 14.6666 8.00004C14.6666 11.6819 11.6818 14.6667 7.99988 14.6667C5.53228 14.6667 3.3778 13.326 2.2251 11.3334"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 10.6667L10.6667 8.00004L8 5.33337"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.3335 8L10.6668 8"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4566_2402">
          <rect width={width} height={height} fill={fillColor || null} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Status;

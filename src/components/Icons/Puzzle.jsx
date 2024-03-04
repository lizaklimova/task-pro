const Puzzle = ({ width, height, fillColor, strokeColor }) => {
  return (
    <svg
      width={width || '14px'}
      height={height || '14px'}
      viewBox="0 0 18 18"
      fill={fillColor || 'none'}
      stroke={strokeColor || null}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4566_2424)">
        <path
          d="M9 1.5L11.7 4.2C13.5 -0.525 18.525 4.5 13.8 6.3L16.5 9L13.8 11.7C12 6.975 6.975 12 11.7 13.8L9 16.5L6.3 13.8C4.5 18.525 -0.525 13.5 4.2 11.7L1.5 9L4.2 6.3C6 11.025 11.025 6 6.3 4.2L9 1.5Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4566_2424">
          <rect width={width} height={height} fill={fillColor || null} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Puzzle;

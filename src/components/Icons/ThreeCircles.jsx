const ThreeCircles = ({ width, height, fillColor, strokeColor }) => {
  return (
    <svg
      width={width || '14px'}
      height={height || '14px'}
      viewBox="0 0 18 18"
      stroke={strokeColor || 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4566_2430)">
        <path
          d="M8.99999 15.3542C9.79613 16.0667 10.8475 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.92481 15.0953 8.17769 13.1849 7.65763M4.81513 7.65762C2.9047 8.17768 1.5 9.9248 1.5 12C1.5 14.4853 3.51472 16.5 6 16.5C8.48528 16.5 10.5 14.4853 10.5 12C10.5 11.4146 10.3882 10.8554 10.1849 10.3424M13.5 6C13.5 8.48528 11.4853 10.5 9 10.5C6.51472 10.5 4.5 8.48528 4.5 6C4.5 3.51472 6.51472 1.5 9 1.5C11.4853 1.5 13.5 3.51472 13.5 6Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4566_2430">
          <rect width={width} height={height} fill={fillColor || null} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ThreeCircles;

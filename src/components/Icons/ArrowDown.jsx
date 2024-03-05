const ArrowDown = ({ width, height, fillColor, strokeColor }) => {
  return (
    <svg
      width={width || '14px'}
      height={height || '14px'}
      viewBox="0 0 16 17"
      fill={fillColor || 'none'}
      stroke={strokeColor || null}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6.5L8 10.5L12 6.5"
        strokeOpacity="0.8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowDown;

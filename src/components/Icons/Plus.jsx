const Plus = ({ width, height, fillColor, strokeColor }) => {
  return (
    <svg
      width={width || '14px'}
      height={height || '14px'}
      viewBox="0 0 20 20"
      fill={fillColor || 'none'}
      stroke={strokeColor || null}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 4.16663V15.8333"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.1665 10H15.8332"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Plus;

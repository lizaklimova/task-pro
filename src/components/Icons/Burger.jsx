const Burger = ({ width, height, fillColor, strokeColor }) => {
  return (
    <svg
      width={width || '14px'}
      height={height || '14px'}
      viewBox="0 0 32 32"
      fill={fillColor || 'none'}
      stroke={strokeColor || null}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 16H28"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 8H28"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 24H28"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Burger;

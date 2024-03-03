const EyeCrossed = ({ width, height, fillColor, strokeColor }) => {
  return (
    <svg
      width={width || '14px'}
      height={height || '14px'}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      ariaLabelledby="eyeCrossedIconTitle"
      fill={fillColor || 'none'}
      stroke={strokeColor || 'none'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      color="#000000"
    >
      <path d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z" />{' '}
      <circle cx="12" cy="12" r="3" /> <path d="M3 21L20 4" />{' '}
    </svg>
  );
};

export default EyeCrossed;

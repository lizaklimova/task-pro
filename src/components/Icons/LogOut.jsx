const LogOut = ({ width, height, fillColor, strokeColor }) => {
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
        d="M11.8667 10.0799C12.28 5.27995 14.7467 3.31995 20.1467 3.31995H20.32C26.28 3.31995 28.6667 5.70661 28.6667 11.6666V20.3599C28.6667 26.3199 26.28 28.7066 20.32 28.7066H20.1467C14.7867 28.7066 12.32 26.7733 11.88 22.0533"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.6665 16H19.8398"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.8667 11.5333L21.3334 16L16.8667 20.4667"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LogOut;

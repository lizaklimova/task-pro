const User = ({ width, height, fillColor, strokeColor }) => {
  return (
    <svg
      style={{ width: 68, height: 68 }}
      width={width || '14px'}
      height={height || '14px'}
      viewBox="0 0 68 68"
      fill={fillColor || 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_443_663)">
        <rect width={width} height={height} rx="8" fill={strokeColor || null} />
        <circle
          cx="34.3334"
          cy="31.3334"
          r="11.3334"
          fill={fillColor || 'none'}
        />
        <path
          d="M61.7529 69.8119C61.7529 66.1511 61.0319 62.5261 59.6309 59.144C58.23 55.7619 56.1766 52.6888 53.5881 50.1002C50.9995 47.5117 47.9264 45.4583 44.5443 44.0574C41.1622 42.6565 37.5372 41.9354 33.8764 41.9354C30.2157 41.9354 26.5907 42.6565 23.2086 44.0574C19.8265 45.4583 16.7534 47.5117 14.1648 50.1002C11.5763 52.6888 9.52289 55.7619 8.12197 59.144C6.72105 62.5261 6 66.1511 6 69.8119L33.8765 69.8119H61.7529Z"
          fill={fillColor || 'none'}
        />
      </g>
      <defs>
        <clipPath id="clip0_443_663">
          <rect
            width={width}
            height={height}
            rx="8"
            fill={fillColor || 'none'}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default User;

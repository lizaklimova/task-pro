const Status = ({ width, height, fillColor, strokeColor }) => {
  return (
    <svg
      width={width || '14px'}
      height={height || '14px'}
      viewBox="0 0 16 17"
      fill={fillColor || 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.22559 5.16665C3.37828 3.17398 5.53276 1.83331 8.00037 1.83331C11.6823 1.83331 14.667 4.81808 14.667 8.49998C14.667 12.1819 11.6823 15.1666 8.00037 15.1666C5.53276 15.1666 3.37828 13.826 2.22559 11.8333"
        stroke={strokeColor || null}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 11.1666L10.6667 8.49998L8 5.83331"
        stroke={strokeColor || null}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.33301 8.5L10.6663 8.5"
        stroke={strokeColor || null}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Status;

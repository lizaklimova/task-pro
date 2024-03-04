const Trash = ({ width, height, fillColor, strokeColor }) => {
  return (
    <svg
      width={width || '14px'}
      height={height || '14px'}
      viewBox="0 0 16 16"
      fill={fillColor || 'none'}
      stroke={strokeColor || null}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 2H10"
        stroke={strokeColor || null}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 4H14"
        stroke={strokeColor || null}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.3335 4L3.73409 10.0089C3.80846 11.1245 3.84565 11.6823 4.02795 12.1304C4.35894 12.9441 5.02988 13.5718 5.86373 13.8479C6.32301 14 6.88206 14 8.00016 14V14C9.11826 14 9.67731 14 10.1366 13.8479C10.9704 13.5718 11.6414 12.9441 11.9724 12.1304C12.1547 11.6823 12.1919 11.1245 12.2662 10.0089L12.6668 4"
        stroke={strokeColor || null}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Trash;

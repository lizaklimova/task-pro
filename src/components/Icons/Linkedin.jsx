const LinkedInIcon = ({ width, height, fillColor, strokeColor }) => {
  const iconSize = window.innerWidth > 768 ? '18px' : '24px';
  return (
    <svg
      className="icon"
      width={width || iconSize}
      height={height || iconSize}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#007fb5"
        style={{ fill: fillColor || '#007fb5' }}
        d="M5.6 0h20.8c3.093 0 5.6 2.507 5.6 5.6v20.8c0 3.093-2.507 5.6-5.6 5.6h-20.8c-3.093 0-5.6-2.507-5.6-5.6v-20.8c0-3.093 2.507-5.6 5.6-5.6z"
      />
      <path
        fill="#fff"
        style={{ fill: fillColor || '#fff' }}
        d="M4.495 11.77h4.515v16.36h-4.515v-16.36z"
      />
      <path
        fill="#fff"
        style={{ fill: fillColor || '#fff' }}
        d="M24.1 11.77c-3.33-1.27-5.74 0.88-6.77 2.080v-2.080h-4.5v16.36h4.5v-8.63c-0.001-0.029-0.001-0.064-0.001-0.099 0-1.105 0.424-2.111 1.119-2.864l-0.003 0.003c0.416-0.488 1.021-0.804 1.7-0.835l0.005-0c0.015-0 0.034-0.001 0.052-0.001 0.749 0 1.427 0.304 1.918 0.795l0 0c0.526 0.549 0.851 1.296 0.851 2.119 0 0.020-0 0.039-0.001 0.059l0-0.003v9.455h5.080v-10.13s0.565-4.54-3.95-6.23z"
      />
      <path
        fill="#fff"
        style={{ fill: fillColor || '#fff' }}
        d="M9.57 6.69c0 1.557-1.263 2.82-2.82 2.82s-2.82-1.263-2.82-2.82c0-1.557 1.263-2.82 2.82-2.82s2.82 1.263 2.82 2.82z"
      />
    </svg>
  );
};

export default LinkedInIcon;

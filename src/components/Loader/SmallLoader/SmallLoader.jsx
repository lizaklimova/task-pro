import { Oval } from 'react-loader-spinner';

const SmallLoader = ({ width = '30', height = '30', color = '#161616' }) => {
  return (
    <Oval
      visible={true}
      height={height}
      width={width}
      color={color}
      secondaryColor={color}
      ariaLabel="oval-loading"
    />
  );
};

export default SmallLoader;

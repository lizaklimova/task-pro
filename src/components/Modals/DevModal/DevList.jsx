import DevItem from './DevItem';
import { DevWrapper } from './DevList.styled';

const DevList = ({ developers }) => {
  console.log(developers);
  return (
    <DevWrapper>
      {developers.map(developer => (
        <DevItem key={developer.id} developer={developer} />
      ))}
    </DevWrapper>
  );
};

export default DevList;

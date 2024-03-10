import DevItem from './DevItem';
import { DevUl } from './DevList.styled';

const DevList = ({ developers }) => {
  return (
    <DevUl>
      {developers.map(developer => (
        <li key={developer.id}>
          <DevItem developer={developer} />
        </li>
      ))}
    </DevUl>
  );
};

export default DevList;

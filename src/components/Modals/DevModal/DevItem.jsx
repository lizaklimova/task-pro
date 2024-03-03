import LinkedInIcon from 'components/icons/Linkedin';
import {
  DevContainer,
  DevName,
  DevImage,
  DevLink,
  DevRole,
} from './DevItem.styled';
import defaltImage from './no-photo.png';

const DevItem = ({ developer }) => {
  const { name, photo, LinkedIn, GitHub, role } = developer;
  const photoURL = photo ? photo : defaltImage;

  return (
    <DevContainer>
      <DevName>{name}</DevName>
      <DevRole>{role}</DevRole>
      <DevImage src={photoURL} alt={name} />
      <DevLink href={LinkedIn}>
        <LinkedInIcon width={24} height={24} />
      </DevLink>
      <DevLink href={GitHub}>GitHub</DevLink>
    </DevContainer>
  );
};

export default DevItem;

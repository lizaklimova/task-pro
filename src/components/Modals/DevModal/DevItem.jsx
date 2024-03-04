import LinkedInIcon from 'components/icons/Linkedin';
import {
  DevContainer,
  DevName,
  DevImage,
  DevLink,
  DevRole,
  DevLinkContainer,
} from './DevItem.styled';
import GitHubIcon from 'components/icons/GitHub';
// import defaultImage from './no-photo.png';

const DevItem = ({ developer }) => {
  const { nameEn, photo, LinkedIn, GitHub, role } = developer;

  return (
    <DevContainer>
      <DevImage src={require(`${photo}`)} alt={nameEn} />
      <DevName>{nameEn}</DevName>
      <DevRole>{role}</DevRole>
      <DevLinkContainer>
        <DevLink href={LinkedIn}>
          <LinkedInIcon width={20} height={20} />
        </DevLink>
        <DevLink href={GitHub}>
          <GitHubIcon width={20} height={20} />
        </DevLink>
      </DevLinkContainer>
    </DevContainer>
  );
};

export default DevItem;

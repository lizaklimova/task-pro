import {
  DevContainer,
  DevName,
  DevImage,
  DevLink,
  DevRole,
  DevLinkContainer,
} from './DevItem.styled';

import LinkedInIcon from 'components/Icons/Linkedin';
import GitHubIcon from 'components/Icons/GitHub';

// import defaultImage from './no-photo.png';

const DevItem = ({ developer }) => {
  const { nameEn, photo, LinkedIn, GitHub, role } = developer;

  return (
    <DevContainer>
      <DevImage src={require(`${photo}`)} alt={nameEn} />
      <DevName>{nameEn}</DevName>
      <DevRole>{role}</DevRole>
      <DevLinkContainer>
        <DevLink href={LinkedIn} target="_blank">
          <LinkedInIcon width={20} height={20} />
        </DevLink>
        <DevLink href={GitHub} target="_blank">
          <GitHubIcon width={20} height={20} />
        </DevLink>
      </DevLinkContainer>
    </DevContainer>
  );
};

export default DevItem;

import { useTranslation } from 'react-i18next';
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

const DevItem = ({ developer }) => {
  const { i18n } = useTranslation();

  const { name, photo, LinkedIn, GitHub, role } = developer;

  const currentLanguage = i18n.language;

  const localizedName = name[currentLanguage];
  const localizedRole = role[currentLanguage];

  return (
    <DevContainer>
      <DevImage src={require(`${photo}`)} alt={name} />
      <DevName>{localizedName}</DevName>
      <DevRole>{localizedRole}</DevRole>
      <DevLinkContainer>
        <DevLink href={LinkedIn} target="_blank">
          <LinkedInIcon width={18} height={18} />
        </DevLink>
        <DevLink href={GitHub} target="_blank">
          <GitHubIcon width={18} height={18} fillColor="var(--text-color)" />
        </DevLink>
      </DevLinkContainer>
    </DevContainer>
  );
};

export default DevItem;

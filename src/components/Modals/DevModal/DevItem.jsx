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
  const { t } = useTranslation();

  const { nameEn, nameUk, photo, LinkedIn, GitHub, roleEn, roleUk } = developer;
  const name = t('name') === 'en' ? nameEn : nameUk;
  const role = t('role') === 'en' ? roleEn : roleUk;

  return (
    <DevContainer>
      <DevImage src={require(`${photo}`)} alt={name} />

      <DevName>{name}</DevName>
      <DevRole>{role}</DevRole>
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

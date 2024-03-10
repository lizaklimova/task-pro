import { useTranslation } from 'react-i18next';
import { Button, HeaderWrap } from './ScheduleHeader.styled';

const ScheduleHeader = ({ toggleCurrentMonth, currentMonth }) => {
  const { t } = useTranslation();

  return (
    <HeaderWrap>
      <h2>{t('schedule.header')}</h2>
      <Button type="button" onClick={toggleCurrentMonth}>
        {currentMonth ? t('schedule.next') : t('schedule.current')}
      </Button>
    </HeaderWrap>
  );
};

export default ScheduleHeader;

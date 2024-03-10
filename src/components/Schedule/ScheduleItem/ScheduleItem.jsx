import { useTranslation } from 'react-i18next';
import { Card } from './ScheduleItem.styled';
import { useSelector } from 'react-redux';
import { selectAllCards } from '../../../redux/board/boardSelectors';
import { compareDates } from 'helpers';
import { nanoid } from '@reduxjs/toolkit';
import TaskItem from '../TaskItem';

const ScheduleItem = ({ date }) => {
  const { t } = useTranslation();
  const allCards = useSelector(selectAllCards);

  const daysOfTheWeek = [
    t('schedule.sunday'),
    t('schedule.monday'),
    t('schedule.tuesday'),
    t('schedule.wednesday'),
    t('schedule.thursday'),
    t('schedule.friday'),
    t('schedule.saturday'),
  ];
  return (
    <Card>
      <p>
        {date.toLocaleDateString()} {daysOfTheWeek[date.getDay()]}
      </p>
      <ul>
        {allCards
          .filter(({ deadline }) => compareDates(deadline, date))
          .map(task => (
            <li key={nanoid()}>
              <TaskItem task={task} />
            </li>
          ))}
        {allCards.filter(({ deadline }) => compareDates(deadline, date))
          .length === 0 && (
          <li key={nanoid()} style={{ opacity: '0.5' }}>
            {t('schedule.noTasks')}
          </li>
        )}
      </ul>
    </Card>
  );
};

export default ScheduleItem;

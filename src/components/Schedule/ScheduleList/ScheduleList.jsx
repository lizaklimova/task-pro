import { nanoid } from '@reduxjs/toolkit';
import { getDaysInMonth } from 'helpers';
import ScheduleItem from '../ScheduleItem';
import { List } from './ScheduleList.styled';

const ScheduleList = ({ currentMonth }) => {
  const currentDate = new Date();
  let datesOfMonth;
  if (currentMonth) {
    datesOfMonth = getDaysInMonth(
      currentDate.getFullYear(),
      currentDate.getMonth()
    );
  } else {
    const firstDayOfNextMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );
    datesOfMonth = getDaysInMonth(
      firstDayOfNextMonth.getFullYear(),
      firstDayOfNextMonth.getMonth()
    );
  }

  return (
    <List>
      {datesOfMonth.map(date => (
        <li key={nanoid()}>
          <ScheduleItem date={date} />
        </li>
      ))}
    </List>
  );
};

export default ScheduleList;

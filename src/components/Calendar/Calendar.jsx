import React from 'react';
import i18next from 'i18next';
import ReactDatePicker, {
  registerLocale,
  setDefaultLocale,
} from 'react-datepicker';
import { uk } from 'date-fns/locale/uk';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';

const Calendar = React.forwardRef(
  ({ selectedDate, setDate, toggleCalendar }, ref) => {
    const minDate = new Date();
    setDefaultLocale('en');
    registerLocale('uk', uk);

    return (
      <ReactDatePicker
        ref={ref}
        locale={
          i18next.language === 'uk' || i18next.language === 'uk-UA'
            ? 'uk'
            : 'en'
        }
        selected={selectedDate}
        onChange={date => setDate(date)}
        minDate={minDate}
        calendarStartDay={1}
        dateFormat="EEEE, d"
        onCalendarOpen={() => toggleCalendar(true)}
        onCalendarClose={() => toggleCalendar(false)}
      />
    );
  }
);

export default Calendar;

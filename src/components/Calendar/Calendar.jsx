import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import { uk } from 'date-fns/locale/uk';
import i18next from 'i18next';

const Calendar = React.forwardRef(({ toggleCalendar }, ref) => {
  const [selectedDate, setSelectedDay] = useState(new Date());

  const minDate = new Date();
  setDefaultLocale('en');
  registerLocale('uk', uk);

  return (
    <DatePicker
      ref={ref}
      locale={
        i18next.language === 'uk' || i18next.language === 'uk-UA' ? 'uk' : 'en'
      }
      selected={selectedDate}
      onChange={date => setSelectedDay(date)}
      minDate={minDate}
      dateFormat="EEEE, d"
      onCalendarOpen={() => toggleCalendar(true)}
      onCalendarClose={() => toggleCalendar(false)}
    />
  );
});

export default Calendar;

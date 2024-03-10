function compareDates(date1, date2) {
  const withoutTime1 = new Date(date1);
  const withoutTime2 = new Date(date2);

  withoutTime1.setHours(0, 0, 0, 0);
  withoutTime2.setHours(0, 0, 0, 0);

  return withoutTime1.getTime() === withoutTime2.getTime();
}

export default compareDates;

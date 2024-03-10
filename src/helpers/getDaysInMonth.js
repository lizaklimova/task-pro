function getDaysInMonth(year, month) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  return Array.from(
    { length: daysInMonth },
    (_, index) => new Date(year, month, index + 1)
  );
}

export default getDaysInMonth;
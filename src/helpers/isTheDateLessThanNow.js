const isTheDateLessThanNow = date => {
  const currentDate = new Date();
  return (
    new Date(date.getFullYear(), date.getMonth(), date.getDate()) <
    new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate()
    )
  );
};

export default isTheDateLessThanNow;

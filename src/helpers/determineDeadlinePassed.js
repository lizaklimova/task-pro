const determineDeadlinePassed = date => {
  return date.getDate() < new Date().getDate();
};

export default determineDeadlinePassed;

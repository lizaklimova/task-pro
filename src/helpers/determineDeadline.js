import makeValidDate from './makeValidDate';

const determineDeadline = date => {
  return makeValidDate(date).getDate() === new Date().getDate();
};

export default determineDeadline;

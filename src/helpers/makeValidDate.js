import formatDate from './formatDate';

const makeValidDate = date => {
  return new Date(formatDate(date).split('/').reverse().join('/'));
};

export default makeValidDate;

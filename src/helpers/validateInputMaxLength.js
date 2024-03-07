const validateInputMaxLength = (event, setError, setClassName) => {
  const { value } = event.target;
  if (value.length >= 25) {
    setError('Maximum title length is 25 symbols');
    setClassName('invalid');
  } else {
    setError(null);
    setClassName('');
  }
};

export default validateInputMaxLength;

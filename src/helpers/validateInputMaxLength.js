const validateInputMaxLength = (event, setError, setClassName) => {
  const { value } = event.target;
  if (value.length >= 25) {
    setError(true);
    setClassName('invalid');
  } else {
    setError(false);
    setClassName('');
  }
};

export default validateInputMaxLength;

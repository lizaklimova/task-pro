import { MAX_DESCR_LENGTH } from 'constants';

const handleTextOverflow = text => {
  const shouldTextBeHidden = text.length >= MAX_DESCR_LENGTH;

  if (shouldTextBeHidden) {
    return `${text.slice(0, MAX_DESCR_LENGTH)}...`;
  } else {
    return text;
  }
};

export default handleTextOverflow;

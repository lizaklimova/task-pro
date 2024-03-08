const changePriorityLang = priority => {
  let result = '';

  switch (priority) {
    case 'without priority':
      result = 'без пріоритету';
      break;

    case 'high':
      result = 'високий';
      break;

    case 'medium':
      result = 'середній';
      break;

    default:
      result = 'низький';
  }

  return result;
};

export default changePriorityLang;

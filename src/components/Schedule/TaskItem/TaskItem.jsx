import { determineLabelColor } from 'helpers';
import { BoardLink } from './TaskItem.styled';

const TaskItem = ({ task }) => {
  return (
    <BoardLink
      to={`/home/board/${task.board}`}
      $label={determineLabelColor(task.priority)}
    >
      {task.title}
    </BoardLink>
  );
};

export default TaskItem;

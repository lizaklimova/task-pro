import Status from 'components/Icons/Status';
import { Popup } from './MovePopUp.styled';

const MovePopUp = ({ allColumns, columnId, moveCard }) => {
  return (
    <Popup id="move-popup">
      {allColumns
        .filter(column => column._id !== columnId)
        .map(column => {
          return (
            <button
              key={column._id}
              type="button"
              title={`${column.title}`}
              onClick={() => moveCard(column._id)}
            >
              <span> {column.title}</span>
              <Status
                width={16}
                height={16}
                strokeColor={'var(--icon-stroke-color)'}
              />
            </button>
          );
        })}
    </Popup>
  );
};

export default MovePopUp;

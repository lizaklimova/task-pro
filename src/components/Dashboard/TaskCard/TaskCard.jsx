import { useState } from 'react';
import {
  formatDate,
  makeValidDate,
  handleTextOverflow,
  determineDeadline,
} from 'helpers';
import Status from 'components/Icons/Status';
import Pencil from 'components/Icons/Pencil';
import Trash from 'components/Icons/Trash';
import Bell from 'components/Icons/Bell';
import {
  CardItem,
  CardTitle,
  CardDescr,
  InfoWrap,
  BtnsList,
  CardActionButton,
} from './TaskCard.styled';

const TaskCard = ({ card, openCardModal }) => {
  const [showFullText, setShowFullText] = useState(false);

  const handleClick = () => {
    setShowFullText(!showFullText);
  };

  return (
    <CardItem>
      <CardTitle>{card.title}</CardTitle>
      <CardDescr onClick={handleClick}>
        {showFullText ? card.description : handleTextOverflow(card.description)}
      </CardDescr>
      <hr />

      <div>
        <InfoWrap>
          <div>
            <h5>Priority</h5>
            <p>{card.priority}</p>
          </div>

          <div>
            <h5>Deadline</h5>
            <span>{formatDate(makeValidDate(card.deadline))}</span>
          </div>
        </InfoWrap>

        <BtnsList>
          {determineDeadline(card.deadline) && (
            <li>
              <CardActionButton type="button" aria-label="Deadline is today">
                <Bell
                  width={16}
                  height={16}
                  strokeColor={'var(--icon-stroke-color)'}
                />
              </CardActionButton>
            </li>
          )}
          <li>
            <CardActionButton type="button" aria-label="Move card">
              <Status
                width={16}
                height={16}
                strokeColor={'var(--icon-stroke-color)'}
              />
            </CardActionButton>
          </li>
          <li>
            <CardActionButton
              type="button"
              aria-label="Edit card"
              onClick={openCardModal}
            >
              <Pencil
                width={16}
                height={16}
                strokeColor={'var(--icon-stroke-color)'}
              />
            </CardActionButton>
          </li>
          <li>
            <CardActionButton type="button" aria-label="Delete card">
              <Trash
                width={16}
                height={16}
                strokeColor={'var(--icon-stroke-color)'}
              />
            </CardActionButton>
          </li>
        </BtnsList>
      </div>
    </CardItem>
  );
};

export default TaskCard;

import { useState } from 'react';
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
  const text =
    'Create a visually stunning and eye-catching watch dial design that embodies our brands essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.';

  const handleClick = () => {
    setShowFullText(!showFullText);
  };

  return (
    <CardItem>
      <CardTitle>The Watch Spot Design</CardTitle>
      <CardDescr onClick={handleClick}>
        {showFullText ? text : `${text.slice(0, 86)}...`}
      </CardDescr>
      <hr />

      <div>
        <InfoWrap>
          <div>
            <h5>Priority</h5>
            <p>Low</p>
          </div>

          <div>
            <h5>Deadline</h5>
            <span>12/05/2023</span>
          </div>
        </InfoWrap>

        <BtnsList>
          <li>
            <CardActionButton type="button" aria-label="Deadline is today">
              <Bell
                width={16}
                height={16}
                strokeColor={'var(--icon-stroke-color)'}
              />
            </CardActionButton>
          </li>
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

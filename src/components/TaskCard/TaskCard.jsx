import Status from 'components/icons/Status';
import Pencil from 'components/icons/Pencil';
import Trash from 'components/icons/Trash';
import Bell from 'components/icons/Bell';
import {
  CardItem,
  CardTitle,
  CardDescr,
  InfoWrap,
  BtnsList,
} from './TaskCard.styled';

const TaskCard = () => {
  return (
    <CardItem>
      <Status width={16} height={16} />
      <CardTitle>The Watch Spot Design</CardTitle>
      <CardDescr>
        Create a visually stunning and eye-catching watch dial design that
        embodies our brand's essence of sleek aesthetics and modern elegance.
        Your design should be unique, innovative, and reflective of the latest
        trends in watch design.
      </CardDescr>
      <hr />
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
          <button type="button">
            <Bell width={16} height={16} strokeColor={'white'} />
          </button>
        </li>
        <li>
          <button type="button">
            <Status width={16} height={16} strokeColor={'white'} />
          </button>
        </li>
        <li>
          <button type="button">
            <Pencil width={16} height={16} strokeColor={'white'} />
          </button>
        </li>
        <li>
          <button type="button">
            <Trash width={16} height={16} strokeColor={'white'} />
          </button>
        </li>
      </BtnsList>
    </CardItem>
  );
};

export default TaskCard;

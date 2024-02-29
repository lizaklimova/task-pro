import Status from 'components/icons/Status';

const TaskCard = () => {
  return (
    <li>
      <Status width={16} height={16} />
      <h4>The Watch Spot Design</h4>
      <p>
        Create a visually stunning and eye-catching watch dial design that
        embodies our brand's essence of sleek aesthetics and modern elegance.
        Your design should be unique, innovative, and reflective of the latest
        trends in watch design.
      </p>
      <hr />
      <div>
        <div>
          <p>Priority</p>
          <span>Low</span>
        </div>

        <div>
          <p>Deadline</p>
          <span>12/05/2023</span>
        </div>
      </div>

      <ul>
        <li>
          <button type="button">
            <Status width={16} height={16} strokeColor={'white'} />
          </button>
        </li>
        <li>
          <button type="button">
            <Status width={16} height={16} strokeColor={'white'} />
          </button>
        </li>
        <li>
          <button type="button">
            <Status width={16} height={16} strokeColor={'white'} />
          </button>
        </li>
        <li>
          <button type="button">
            <Status width={16} height={16} strokeColor={'white'} />
          </button>
        </li>
      </ul>
    </li>
  );
};

export default TaskCard;

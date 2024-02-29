import FourCircles from 'components/icons/FourCircles';
import Star from 'components/icons/Star';
import Loading from 'components/icons/Loading';
import Puzzle from 'components/icons/Puzzle';
import Lightning from 'components/icons/Lightning';
import ThreeCircles from 'components/icons/ThreeCircles';
import Hexagon from 'components/icons/Hexagon';

export const BoardCreateModalChildren = () => {
  return (
    <>
      <h3 style={{ color: 'white' }}>New board</h3>
      <input type="text" placeholder="Title" />
      <p>Icons</p>
    </>
  );
};

import FourCircles from 'components/icons/FourCircles';
import Star from 'components/icons/Star';
import Loading from 'components/icons/Loading';
import Puzzle from 'components/icons/Puzzle';
import Box from 'components/icons/Box';
import Lightning from 'components/icons/Lightning';
import ThreeCircles from 'components/icons/ThreeCircles';
import Hexagon from 'components/icons/Hexagon';

export const IconsList = () => {
  return (
    <ul>
      <li>
        <FourCircles
          width={28}
          height={28}
          fillColor={'#850606'}
          strokeColor={'yellow'}
        />
      </li>
      <li>
        <Star
          width={28}
          height={28}
          fillColor={'#850606'}
          strokeColor={'yellow'}
        />
      </li>
      <li>
        <Loading
          width={28}
          height={28}
          fillColor={'#850606'}
          strokeColor={'yellow'}
        />
      </li>
      <li>
        <Puzzle
          width={28}
          height={28}
          fillColor={'#850606'}
          strokeColor={'yellow'}
        />
      </li>
      <li>
        <Box
          width={28}
          height={28}
          fillColor={'#850606'}
          strokeColor={'yellow'}
        />
      </li>
      <li>
        <Lightning
          width={28}
          height={28}
          fillColor={'#850606'}
          strokeColor={'yellow'}
        />
      </li>
      <li>
        <ThreeCircles
          width={28}
          height={28}
          fillColor={'#850606'}
          strokeColor={'yellow'}
        />
      </li>
      <li>
        <Hexagon
          width={28}
          height={28}
          fillColor={'#850606'}
          strokeColor={'yellow'}
        />
      </li>
    </ul>
  );
};

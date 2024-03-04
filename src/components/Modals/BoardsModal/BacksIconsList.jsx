import defaultImg from 'images/backs-small/1x/default-dark.jpg';

export const BacksIconsList = () => {
  console.log(defaultImg);
  return (
    <ul>
      <li>
        <img
          srcset="images/backs-small/1x/default-dark.jpg 1x, images/backs-small/2x/default-dark-2x.jpg 2x"
          src="images/backs-small/1x/default-dark.jpg"
          alt="default"
          width="28"
          height="28"
        />
      </li>
    </ul>
  );
};

import DevItem from './DevItem';

const DevList = ({ developers }) => {
  return (
    <>
      {developers.map(developer => (
        <DevItem key={developer.id} developer={developer} />
      ))}
    </>
  );
};

export default DevList;

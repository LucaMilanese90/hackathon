import { useHistory } from 'react-router-dom';

const Start = () => {
  const history = useHistory();

  return (
    <div onClick={() => history.push('/questions')}>
      <h1>I'm the first page</h1>
    </div>
  );
};

export default Start;

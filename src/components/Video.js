import { useHistory } from 'react-router-dom';

const Video = () => {
  const history = useHistory();

  return (
    <div onClick={() => history.push('/start')}>
      <h1>I'm a video</h1>
    </div>
  );
};

export default Video;

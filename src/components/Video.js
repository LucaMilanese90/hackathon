import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

const Video = () => {
  const history = useHistory();

  useEffect(() => {
    const interval = setInterval(() => {
      history.push('/start');
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div onClick={() => history.push('/start')}>
      <h1>I'm a video</h1>
    </div>
  );
};

export default Video;

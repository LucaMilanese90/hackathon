import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import './Video.css';

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
   
      <div className = "gif-container">
        <div className = "gif-title">
    <h1>Pathfinders</h1>
    </div>
      </div>
     
    </div>
  );
};

export default Video;

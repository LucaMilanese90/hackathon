import './App.css';
import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Modal from 'react-modal';
import axios from 'axios';
import Questions from './components/Questions';
import Grid from './components/Grid';
import WinPage from './components/WinPage';
import Video from './components/Video';
import Start from './components/Start';
import Result from './components/Result';

const modalText = [
  'Mars has two moons. They’re named Phobos, meaning fear, and Deimos, which is Greek for panic.',
  'Rusted iron particles in Mar’s rocks give the planet red hue. ',
  'Earth and Mars follow different orbit around the sun, so space explorers must wait until the two planets are closer together to blast off. Even then, the trip would take a minimum of about eight months',
  'Scientists think Mars once had rivers, lakes, and maybe even oceans. Today small amount of water trickle down crater walls.',
  'Orbiting about 247,84 million km from the sun, Mars is the fourth planet after Mercury, Venus and Earth',
  'Carbon dioxide is a gas that we exhale—and too much can be toxic. To live on Mars we’d need a constant supply of breathable oxygen.',
  'Olympus Mons is the largest known volcano in the solar system. Stands almost three times as tall as Mount Everest.',
  'With a diameter of around 6,700km it is half the size of Earth and about one-tenth its mass. It is the second smallest planet in our solar system after Mercury.',
  'Sojourner was the first NASA rover to land on Mars on July 4, 1997. It was part of the Mars Pathfinder mission.',
  'Sol (borrowed from the Latin word for sun) is a solar day on Mars. A sol is slightly longer than an Earth day. It is approximately 24 hours, 39 minutes, 35 seconds long.',
];

const apiLinks = [
  'https://images-api.nasa.gov/search?nasa_id=PIA23208',
  'https://images-api.nasa.gov/search?nasa_id=PIA19929',
  'https://images-api.nasa.gov/search?nasa_id=KSC-2009-3069',
  'https://images-api.nasa.gov/search?nasa_id=PIA20316',
  'https://images-api.nasa.gov/search?nasa_id=PIA23681',
  'https://images-api.nasa.gov/search?nasa_id=PIA24584',
  'https://images-api.nasa.gov/search?nasa_id=PIA00632',
  'https://images-api.nasa.gov/search?nasa_id=PIA20316',
  'https://images-api.nasa.gov/search?nasa_id=PIA19929',
  'https://images-api.nasa.gov/search?nasa_id=PIA23208',
];

const customStyles = {
  content: {
    height: '70vh',
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-53%',
    transform: 'translate(-53%, -50%)',
    padding: '0',
    borderRadius: '2em',
  },
};

Modal.setAppElement('#root');

function App() {
  const [position, setPosition] = useState([5, 3]);
  const [grid, setGrid] = useState([[]]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalData, setModalData] = useState([{}]);
  const [message, setMessage] = useState(true);
  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   setCurrentQuestion(currentQuestion + 1);
  // }

  useEffect(() => {
    axios
      .get(apiLinks[currentIndex])
      .then((response) => {
        console.log(response);
        setModalData({
          text: modalText[currentIndex],
          image: response.data.collection.items[0].links[0].href,
        });
        console.log(modalData);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [currentIndex]);

  function closeModal() {
    setIsOpen(false);
    setCurrentIndex(currentIndex + 1);
  }

  useEffect(() => {
    console.log(currentIndex);
  }, [currentIndex]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Video />
        </Route>
        <Route path="/start">
          <Start />
        </Route>
        <Route path="/wrong"></Route>
        <Route path="/results"></Route>
        <Route path="/questions">
          <Questions
            setGrid={setGrid}
            position={position}
            setPosition={setPosition}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            setIsOpen={setIsOpen}
            modalData={modalData}
            setMessage={setMessage}
            message={message}
          />
          <Grid position={position} grid={grid} />
          <Modal
            isOpen={modalIsOpen}
            /*   onAfterOpen={afterOpenModal} */
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <WinPage
              modalData={modalData}
              setIsOpen={setIsOpen}
              message={message}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          </Modal>
        </Route>
        <Route path={'/result'}>
          <Result message={message} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

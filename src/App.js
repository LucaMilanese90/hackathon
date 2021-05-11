import './App.css';
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Modal from 'react-modal';
import Questions from './components/Questions';
import Grid from './components/Grid';
import WinCard from './components/WinCard';
import Video from './components/Video';
import Start from './components/Start';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

function App() {
  const [position, setPosition] = useState([7, 2]);
  const [grid, setGrid] = useState([[]]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [modalIsOpen, setIsOpen] = useState(false);

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   setCurrentQuestion(currentQuestion + 1);
  // }

  function closeModal() {
    setIsOpen(false);
  }

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
          />
          <Grid position={position} grid={grid} />
          <Modal
            isOpen={modalIsOpen}
            /*   onAfterOpen={afterOpenModal} */
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <WinCard />
          </Modal>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

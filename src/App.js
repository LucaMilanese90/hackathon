import './App.css';
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Modal from 'react-modal';
import Questions from './components/Questions';
import Grid from './components/Grid';
import WinCard from './components/WinCard';

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

function App() {
  const [position, setPosition] = useState([7, 2]);
  const [mapA, setMapA] = useState([[]]);

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="App">
      <Questions
        setMapA={setMapA}
        position={position}
        setPosition={setPosition}
      />
      <Grid position={position} mapA={mapA} />
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        /* onAfterOpen={afterOpenModal} */
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <WinCard />
      </Modal>
    </div>
  );
}

export default App;

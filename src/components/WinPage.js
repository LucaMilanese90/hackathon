import styled from 'styled-components';
import Wincard from './WinCard';

const WinPage = ({
  modalData,
  setIsOpen,
  message,
  currentIndex,
  setCurrentIndex,
}) => {
  return (
    <Wincard
      modalData={modalData}
      setIsOpen={setIsOpen}
      message={message}
      currentIndex={currentIndex}
      setCurrentIndex={setCurrentIndex}
    />
  );
};
export default WinPage;

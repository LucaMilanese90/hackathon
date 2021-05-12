import styled from 'styled-components';
import Wincard from './WinCard';

const WinPage = ({ modalData, setIsOpen, message }) => {
  return (
    <Wincard modalData={modalData} setIsOpen={setIsOpen} message={message} />
  );
};
export default WinPage;

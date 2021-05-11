import styled from 'styled-components';
import Wincard from './WinCard';

const WinPage = ({ modalData, setIsOpen }) => {
  return <Wincard modalData={modalData} setIsOpen={setIsOpen} />;
};
export default WinPage;

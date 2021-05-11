const Answer = ({ message, setShowAnswer, setIsOpen, modalData }) => {
  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <h1>{message}</h1>
      <img src={modalData?.image} />
      <button
        onClick={() => {
          setShowAnswer(false);
          openModal();
        }}
      >
        I got it
      </button>
    </div>
  );
};

export default Answer;

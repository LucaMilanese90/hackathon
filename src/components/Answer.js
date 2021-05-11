const Answer = ({ message, setShowAnswer, setIsOpen }) => {
  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <h1>{message}</h1>
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

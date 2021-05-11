const Grid = ({ mapA, position }) => {
  return (
    <div className="grid">
      {mapA?.map((row, i) =>
        row?.map((cell, index) => (
          <div
            key={cell}
            className={
              i + 1 === position[0] && index + 1 === position[1]
                ? 'visible'
                : i === 1 && index === 6
                ? 'visible'
                : 'not-visible'
            }
          ></div>
        ))
      )}
    </div>
  );
};

export default Grid;

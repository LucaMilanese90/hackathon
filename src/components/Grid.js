const Grid = ({ grid, position }) => {
  return (
    <div className="grid">
      {grid?.map((row, i) =>
        row?.map((cell, index) => (
          <div
            key={cell}
            className={
              i + 1 === position[0] && index + 1 === position[1]
                ? 'visible-moving'
                : i === 2 && index === 0
                ? 'visible-fixed'
                : 'not-visible'
            }
          ></div>
        ))
      )}
    </div>
  );
};

export default Grid;

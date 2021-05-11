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
                : i === 1 && index === 6
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

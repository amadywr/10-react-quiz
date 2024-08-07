import React from 'react';

function FinishedScreen({ points, maxPointsPossible, highscore, dispatch }) {
  const percentage = (points / maxPointsPossible) * 100;
  let emoji;
  if (percentage >= 80) {
    emoji = 'You got a gold medal 🥇 for being the smartest dummy';
  } else if (percentage >= 60) {
    emoji = 'You got a average bitch score 👋';
  } else {
    emoji = 'Straight to ANZAC bridge 🌉';
  }
  return (
    <>
      <p className="highscore">{emoji}</p>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPointsPossible} (
        {Math.ceil(percentage)}%)
      </p>

      <p className="highscore">(Highscore: {highscore} points)</p>

      <button
        onClick={() => dispatch({ type: 'restart' })}
        className="btn btn-ui"
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishedScreen;

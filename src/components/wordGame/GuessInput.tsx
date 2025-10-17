import React from "react";

interface GuessInputProps {
  handleSubmitGuess: (guess: string) => void;
  gameStatus: string;
}

function GuessInput({ gameStatus, handleSubmitGuess }: GuessInputProps) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();

    if (tentativeGuess.length !== 5) {
      window.alert("please enter exactly 5 characters");
      return;
    }

    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter Guess:</label>
      <input
        id="guess-input"
        type="text"
        disabled={gameStatus !== "running"}
        required
        minLength={5}
        maxLength={5}
        value={tentativeGuess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
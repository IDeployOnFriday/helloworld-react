import GuessResults from "./GuessResults.tsx";
import GuessInput from "./GuessInput.tsx";
import React from "react";

    function Game(){

        const [guess, setGuess] = React.useState('')

    return (
        <>
            <h1>My Game</h1>
            <GuessResults/>
            <GuessInput
                guess={guess}
                setGuess={setGuess}
            />
        </>

    )
}

export default Game;


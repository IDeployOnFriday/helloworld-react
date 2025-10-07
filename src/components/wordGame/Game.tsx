import GuessResults from "./GuessResults.tsx";
import GuessInput from "./GuessInput.tsx";
import {useState} from "react";

    function Game(){



        const [guesses, setGuesses] = useState<string[]>([])

        function handleSubmitGuess(guess: string) {
            console.log("received guess")
            setGuesses(prevGuesses => [...prevGuesses, guess])
        }

    return (
        <>
            <h1>My Game</h1>
            <GuessResults
                guesses={guesses}
            />
            <GuessInput
                handelSubmitGuess={handleSubmitGuess}

            />
        </>

    )
}

export default Game;


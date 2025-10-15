import GuessResults from "./GuessResults.tsx";
import GuessInput from "./GuessInput.tsx";
import {useState} from "react";
import {sample} from "./utils.tsx";
import {WORDS} from "./data.tsx";

const answer = sample(WORDS)

    function Game(){

        const [guesses, setGuesses] = useState<string[]>([])

        function handleSubmitGuess(guess: string) {
            console.log("received guess")
            setGuesses(prevGuesses => [...prevGuesses, guess])
        }

    return (
        <>
            <GuessResults
                guesses={guesses}
                answer ={answer}
            />
            <GuessInput
                handelSubmitGuess={handleSubmitGuess}

            />
        </>

    )
}

export default Game;


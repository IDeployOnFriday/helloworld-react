import GuessResults from "./GuessResults.tsx";
import GuessInput from "./GuessInput.tsx";
import {useState} from "react";
import {sample} from "./utils.tsx";
import {WORDS} from "./data.tsx";
import {NUM_OF_GUESSES_ALLOWED} from "./constants.tsx";

const answer = sample(WORDS)

    function Game(){

        const [gameStatus, setGameStatus] = useState('running')
        const [guesses, setGuesses] = useState<string[]>([])

        function handleSubmitGuess(tentativeGuess: string) {

            const nextGuess =  [...guesses, tentativeGuess]
            setGuesses(nextGuess)


            if (tentativeGuess.toUpperCase() === answer.toUpperCase()){
                setGameStatus('won')
            }else if (nextGuess.length >= NUM_OF_GUESSES_ALLOWED){
                setGameStatus('lost')
            }
        }

    return (
        <>
            <GuessResults

                gameStatus={gameStatus}
                guesses={guesses}
                answer ={answer}
            />
            <GuessInput
                gameStatus = {gameStatus}
                handelSubmitGuess={handleSubmitGuess}

            />
        </>

    )
}

export default Game;


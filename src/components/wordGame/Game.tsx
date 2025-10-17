import GuessResults from "./GuessResults.tsx";
import GuessInput from "./GuessInput.tsx";
import React, {useState} from "react";
import {sample} from "./utils.tsx";
import {WORDS} from "./data.tsx";
import {NUM_OF_GUESSES_ALLOWED} from "./constants.tsx";
import WonBanner from "./WonBanner.tsx";
import LostBanner from "./LostBanner.tsx";
import {ResetButton} from "./ResetButton.tsx";



    function Game(){

        const [answer, setAnswer] = React.useState(() => sample(WORDS));

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

        function handleRestart() {
            const newAnswer = sample(WORDS);
            setAnswer(newAnswer);
            setGuesses([]);
            setGameStatus('running');
        }

    return (
        <>
            <GuessResults


                guesses={guesses}
                answer ={answer}
            />
            <GuessInput
                gameStatus={gameStatus}
                handleSubmitGuess={handleSubmitGuess}
            />
            {gameStatus === 'won' && (
                <WonBanner numberOfGuesses={guesses.length}/>
            )}
            {gameStatus === 'lost' && (
                <LostBanner answer={answer}/>
            )}
            <ResetButton handleRestart={handleRestart}/>
        </>

    )
}

export default Game;


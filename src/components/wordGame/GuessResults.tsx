import Guess from "./Guess.tsx";
import {range} from "./utils.tsx";
import {NUM_OF_GUESSES_ALLOWED} from "./constants.tsx";


function GuessResults({gameStatus, guesses, answer}: {gameStatus: string,guesses: string[], answer: string} ){

    return(
        <>
        <p>{gameStatus}</p>
        <div className="guess-results">
            {range(0, NUM_OF_GUESSES_ALLOWED).map((num) => (
                <Guess key={num} value={guesses[num]} answer={answer} />
            ))}
        </div>
        </>

    )
}
export default GuessResults;
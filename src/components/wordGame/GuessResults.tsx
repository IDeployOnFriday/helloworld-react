import Guess from "./Guess.tsx";
import {range} from "./utils.tsx";
import {NUM_OF_GUESSES_ALLOWED} from "./constants.tsx";


function GuessResults({guesses}: {guesses: string[]}){

    return(
        <div className="guess-results">
            {range(0, NUM_OF_GUESSES_ALLOWED).map((num) => (
                <Guess key={num} value={guesses[num]} />
            ))}
        </div>

    )
}
export default GuessResults;
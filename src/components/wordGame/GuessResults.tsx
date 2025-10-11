import Guess from "./Guess.tsx";


function GuessResults({guesses}: {guesses: string[]}){

    return(
        <div className="guess-results">
            {guesses.map((guess, index) => (
                <Guess
                    key={index}
                    value={guess}/>
            ))}

        </div>

    )
}
export default GuessResults;
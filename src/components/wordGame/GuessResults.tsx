


function GuessResults({guesses}: {guesses: string[]}){

    return(
        <div>
            <h3>My Guesses</h3>

            {guesses.map((guess, index) => (
                <p key={index} >
                    {guess}
                </p>
            ))}

        </div>

    )
}
export default GuessResults;
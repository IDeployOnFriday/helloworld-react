


function GuessResults({guess}: {guess: string}){

    return(
        <div>
            <p>result 1</p>
            <p>{guess}</p>
            {/*{guesses.map((guess, index) => (*/}
            {/*    <p key={index} >*/}
            {/*        {guess}*/}
            {/*    </p>*/}
            {/*))}*/}
            <p>My Guess</p>
        </div>

    )
}
export default GuessResults;
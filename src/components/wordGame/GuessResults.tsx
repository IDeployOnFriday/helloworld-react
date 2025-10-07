


function GuessResults({guesses}: {guesses: string[]}){

    return(
        <div>
            <p>result 1</p>
            <p>{guesses}</p>
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
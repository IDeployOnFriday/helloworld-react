
interface GuessInputProps {
    guess: string,
    setGuess: Function,
}

function GuessInput({guess, setGuess }: GuessInputProps) {



    function handleSubmit(event: { preventDefault: () => void; }){
        event.preventDefault();
        console.log(guess)

        if (guess.length !== 5){
            window.alert('please enter exactly 2 characters');
            return
        }


        setGuess('')
    }

    return (
    <form onSubmit={handleSubmit}>
        <label> Enter Guess :</label>
        <input
            required
            minLength={5}
            maxLength={5}
            value={guess}
            onChange={(event) => {
                const nextGuess = event.target.value.toUpperCase();
                setGuess(nextGuess);
            }}
            id="guess-inout"
            type={"text"}
        />
    </form>
    )

}

export default GuessInput;
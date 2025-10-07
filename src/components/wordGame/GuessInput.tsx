import React from "react";

interface GuessInputProps {
    handelSubmitGuess: Function,
}

function GuessInput({handelSubmitGuess }: GuessInputProps) {

    const [guess, setGuess] = React.useState('')

    function handleSubmit(event: { preventDefault: () => void; }){
        event.preventDefault();
        //console.log(guess)

        if (guess.length !== 5){
            window.alert('please enter exactly 5 characters');
            return
        }


        handelSubmitGuess(guess)
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
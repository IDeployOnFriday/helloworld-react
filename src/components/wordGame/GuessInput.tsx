import React from "react";

interface GuessInputProps {
    handelSubmitGuess: Function,
}

function GuessInput({handelSubmitGuess }: GuessInputProps) {

    const [tentativeGuess, setTentativeGuess] = React.useState('')

    function handleSubmit(event: { preventDefault: () => void; }){
        event.preventDefault();
        //console.log(tentativeGuess)

        if (tentativeGuess.length !== 5){
            window.alert('please enter exactly 5 characters');
            return
        }


        handelSubmitGuess(tentativeGuess)
        setTentativeGuess('');
    }

    return (
    <form onSubmit={handleSubmit}>
        <label> Enter Guess :</label>
        <input
            required
            minLength={5}
            maxLength={5}
            value={tentativeGuess}
            onChange={(event) => {
                const nextGuess = event.target.value.toUpperCase();
                setTentativeGuess(nextGuess);
            }}
            id="guess-inout"
            type={"text"}
        />
    </form>
    )

}

export default GuessInput;
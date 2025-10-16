import React from "react";

interface GuessInputProps {
    handelSubmitGuess: Function,
    gameStatus : string
}

function GuessInput({gameStatus, handelSubmitGuess }: GuessInputProps) {

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
            disabled={gameStatus !== 'running'}
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
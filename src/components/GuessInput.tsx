


export function InputGuess() {

    return (
    <form>
        <label> Enter Guess :</label>
        <input
            minLength={5}
            maxLength={5}
            id="guess-inout"
            type={"text"}
        />
    </form>
    )

}
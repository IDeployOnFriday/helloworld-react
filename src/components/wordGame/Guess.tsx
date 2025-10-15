import {range} from "./utils.tsx";
import {checkGuess} from "./game-helper.tsx";

interface Props {
    value: string;
    answer: string;
}

function Cell({ letter, status }: { letter?: string; status?: string }) {
    return (
        <span className={`cell ${status ?? ''}`}>{letter ?? ''}</span>
    );
}

function Guess({ value, answer }: Props) {
    const result = checkGuess(value, answer)
    console.log(result)
    return (
        <p className="guess">
            {range(0,5).map((num) => (
                <Cell
                    key={num}
                    letter={result ? result[num].letter : undefined}
                    status={result ? result[num].status : undefined}
                />
            ))}
        </p>
    );
}

export default Guess;
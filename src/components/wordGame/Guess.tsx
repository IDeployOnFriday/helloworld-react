import {range} from "./utils.tsx";
import {checkGuess} from "./game-helper.tsx";

interface Props {
    value: string;
    answer: string;
}

function Guess({ value, answer }: Props) {
    const result = checkGuess(value, answer)
    console.log(result)
    return (
        <p className="guess">
            {range(0,5).map((num) => (
                <span key={num} className="cell">
          {value ? value[num] : undefined}
        </span>
            ))}
        </p>
    );
}

export default Guess;
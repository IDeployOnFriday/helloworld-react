import {range} from "./utils.tsx";

interface Props {
    value: string;
}

function Guess({ value }: Props) {
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
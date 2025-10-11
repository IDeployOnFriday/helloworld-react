
interface Props {
    value: string;
}

function Guess({ value }: Props) {
    return (
        <p className="guess">
            {value.split('').map((letter) => (
                <span className="cell">{letter}</span>
                ))}
            {/*<span className="cell">I</span>*/}
            {/*<span className="cell">R</span>*/}
            {/*<span className="cell">S</span>*/}
            {/*<span className="cell">T</span>*/}
        </p>
    );
}

export default Guess;
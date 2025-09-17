

export function OnClickButton({items}) {
    function handleClick(type) {
        if (type === 'win') {
            alert('You win!');
        } else {
            alert('You lose :(');
        }
    }
    return (
        <>
        <button onClick={() => handleClick('win')} className="btn btn-primary">
        Click me for win
        </button>

        <button onClick={() => handleClick('lose')} className="btn btn-primary">
            Click And Lose
        </button>
        </>
    )
}





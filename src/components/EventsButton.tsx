

export function OnClickButton({name}) {
    function handleClick(type) {
        if (type === 'win') {
            alert('You win!');
        } else {
            alert('You lose :(');
        }
    }
    return (

        <button onClick={() => handleClick(name)} className="btn btn-primary">
        Click me for {name}
        </button>

    )
}





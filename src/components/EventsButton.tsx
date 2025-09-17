

export function OnClickButton({items}) {
    function handleClick(){
        window.alert("the button was clicked")
    }
    return (
        <button onClick={handleClick} className="btn btn-primary">
        Click me for event
        </button>
    )
}





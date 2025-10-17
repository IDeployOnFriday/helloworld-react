import { useCallback } from "react";

export function ResetButton() {
    const onButtonClick = useCallback(() => {
        // TODO: implement reset logic
    }, []);

    return (
        <button className="reset-button" onClick={onButtonClick} aria-label="Reset game">
            Reset game
        </button>
    );
}



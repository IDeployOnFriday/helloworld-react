import React from "react";


export function DropDownMenu() {
    const [selectedOption, setSelectedOption] = React.useState('red');

    return(
        <form>
            <fieldset>
                <legend>
                    what is your favourite colour?
                </legend>
            </fieldset>

            <select
            value={selectedOption}
            onChange={event => {
                setSelectedOption(event.target.value)
            }}
            >
                <option value ="red">
                    red
                </option>
                <option value ="green">
                    green
                </option>
                <option value ="blue">
                    blue
                </option>

            </select>

            <p> selected value :
            <br />
                {selectedOption}</p>
        </form>
    )
}
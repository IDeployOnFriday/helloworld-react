import React from 'react';

function ColorPicker() {
    const [colors, setColors] = React.useState([
        '#FFD500',
        '#FF0040',
    ]);

    const colorStops = colors.join(', ');
    const backgroundImage =
        `linear-gradient(${colorStops})`;

    function addColor() {
        if (colors.length >= 5) {
            window.alert('There is a maximum of 5 colors')
            return;
        }

        const nextColors = [...colors];
        nextColors.push('#FF0000');
        setColors(nextColors);
    }

    function removeColor() {
        if (colors.length <= 2) {
            window.alert('There is a minimum of 2 colors')
            return;
        }

        const nextColors = [...colors];
        nextColors.pop();
        setColors(nextColors);
    }

    return (
        <div className="wrapper">
            <div className="actions">
                <button onClick={removeColor}>
                    Remove color
                </button>
                <button onClick={addColor}>
                    Add color
                </button>
            </div>

            <div
                className="gradient-preview"
                style={{
                    backgroundImage,
                }}
            />

            <div className="colors">
                {colors.map((color, index) => {
                    const colorId = `color-${index}`;
                    return (
                        <div
                            key={colorId}
                            className="color-wrapper"
                        >
                            <label htmlFor={colorId}>
                                Color {index + 1}:
                            </label>
                            <div className="input-wrapper">
                                <input
                                    id={colorId}
                                    type="color"
                                    value={color}
                                    onChange={(event) => {
                                        const nextColors = [...colors];
                                        nextColors[index] = event.target.value;

                                        setColors(nextColors);
                                    }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

    )
}

export default ColorPicker;
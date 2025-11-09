import React from 'react';
import { SketchPicker } from 'react-color';

class MyColorPicker extends React.Component {
    state = {
        background: '#fff',
    };

    handleChangeComplete = (color: { hex: any; }) => {
        this.setState({ background: color.hex });
    };

    render() {
        return (
            <SketchPicker
                color={ this.state.background }
                onChangeComplete={ this.handleChangeComplete }
            />
        );
    }
}

export default MyColorPicker;
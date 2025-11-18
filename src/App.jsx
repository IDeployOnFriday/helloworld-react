import React from "react";
import ToastyApp from "./components/toasty/ToastyApp.tsx";
import WindowSize from "./components/resizeWindow/WindowSize.js";
import ColorPicker from "./components/ColorPicker.js";
import MyColorPicker from "./components/MyColorPicker.js";
import AnotherColorPicker from "./components/colorPickers/AnotherColorPicker.js";
import VideoApp from "./components/videoPlayer/VideoApp.js";
import Header from "./components/Header.js";

function App() {


    return (
        <>
            <div className="wrapper">
                <Header />
            </div>
            <VideoApp></VideoApp>
        </>

    )
}

export default App;


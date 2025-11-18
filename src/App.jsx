import React from "react";
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


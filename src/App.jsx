import React from "react";
import VideoApp from "./components/videoPlayer/VideoApp.js";
import Header from "./components/Header.js";
import DropdownMenu from "./components/dropdownMenu/DropdownMenu";
import ToastyApp from "./components/toasty/ToastyApp.js";

function App() {


    return (
        <>
            <div className="wrapper" style={{backgroundColor: 'lightblue', padding: '20px'}}>


            <ToastyApp></ToastyApp>
            </div>
        </>

    )
}

export default App;


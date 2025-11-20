import React from "react";
import VideoApp from "./components/videoPlayer/VideoApp.js";
import Header from "./components/Header.js";
import DropdownMenu from "./components/dropdownMenu/DropdownMenu";

function App() {


    return (
        <>
            <div className="wrapper" style={{backgroundColor: 'lightblue', padding: '20px'}}>


            <DropdownMenu></DropdownMenu>
            </div>
        </>

    )
}

export default App;


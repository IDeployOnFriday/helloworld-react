import Header from "./components/Header.tsx";
import React from "react";
import {ContextMenu} from "radix-ui";
import ContextMenuDemo from "./components/DropdownMenu.jsx";

function App() {
    const [menuStatus, setMenuStatus] = React.useState(false);

    return (
        <>
            <span
                data-state="closed"
                className="styles_Trigger__nxHkP"
                style={{
                    WebkitTouchCallout: "none",
                    display: "block",
                    border: "2px dashed #333",
                    color: "#333",
                    backgroundColor: "#f0f0f0",
                    borderRadius: 4,
                    fontSize: 15,
                    userSelect: "none",
                    padding: "45px 0",
                    width: 300,
                    textAlign: "center",
                    cursor: "pointer",
                }}
                onClick={() => {
                    setMenuStatus(true);
                }}
            >
                Right-click here.
            </span>
            {menuStatus && <ContextMenuDemo />}
        </>
    );
}

export default App;


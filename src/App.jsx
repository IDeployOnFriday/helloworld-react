import Game from "./components/wordGame/Game.js";
import Header from "./components/wordGame/Header.js";


function App() {
    return (
<>

        <div className="wrapper">
            <Header />

            <div className="game-wrapper">
                <Game />
            </div>
        </div>
</>
    );
}

export default App;
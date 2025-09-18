import {StarRadingsList} from "./components/StarRadingsList.jsx";
import {OnClickButton} from "./components/EventsButton.js";
import Counter from "./components/StateButton.js";
import Character from "./components/Character.js";


function App() {
    return (
        <>
        {/*<StarRadingsList/>*/}
        <OnClickButton name={'win'}/>
        <OnClickButton name={'lose'}/>
        <Counter/>
        <Character/>
        </>
    );
}

export default App;
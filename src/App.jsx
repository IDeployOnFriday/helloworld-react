import {StarRadingsList} from "./components/StarRadingsList.jsx";
import {OnClickButton} from "./components/EventsButton.js";
import Counter from "./components/StateButton.js";


function App() {
    return (
        <>
        {/*<StarRadingsList/>*/}
        <OnClickButton name={'win'}/>
        <OnClickButton name={'lose'}/>
        <Counter/>
        </>
    );
}

export default App;
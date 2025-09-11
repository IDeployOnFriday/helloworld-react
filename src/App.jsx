import Banner from './components/Banner'
import "./App.css"
import CrocList from './components/CrocList'
import ShoppingCart from "./components/ShoppingCart.jsx";

function App() {
  return (
    <>
      {/*<Banner><div>Welcome to the Jungle!</div></Banner>
      <CrocList />*/}
        <ShoppingCart></ShoppingCart>
    </>
  );
}

export default App;
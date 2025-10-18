import {Award, Coffee} from "react-feather";

function Header() {
  return (
    <header className="wordgame-header">
      <div className="side" aria-hidden="true" title="Word Game">
        <Award size={20} />
      </div>
      <h1 className="wordgame-title">Word Game</h1>
      <div className="side" title="Show icons">
          <Coffee size={20} />
      </div>
    </header>
  );
}

export default Header;
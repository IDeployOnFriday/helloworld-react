import * as React from "react";


export function Character() {
    const [strength, setStrength] = React.useState(6);
    const [dexterity, setDexterity] = React.useState(9);
    const [intelligence, setIntelligence] = React.useState(15);

    function triggerLevelUp() {
        let newStrength = strength + 1
        setStrength(newStrength);
        let newDexterity = dexterity + 2
        setDexterity(newDexterity);
        let newIntelligence = intelligence + 3
        setIntelligence(newIntelligence);

        window.alert(`
      Congratulations! Your hero now has the following stats:
      Str: ${strength}
      Dex: ${dexterity}
      Int: ${intelligence}
    `);
    }

    return (
        <div className="wrapper">
            <img
                alt="8-bit wizard character"
                src="https://sandpack-bundler.vercel.app/img/mage-sprite.gif"
            />
            <button onClick={triggerLevelUp}>
                Level Up
            </button>
        </div>
    );
}

export default Character;
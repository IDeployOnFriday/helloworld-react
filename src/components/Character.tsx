import * as React from "react";


// how to deal with asyncronous updates

export function Character() {
    const [strength, setStrength] = React.useState(6);
    const [dexterity, setDexterity] = React.useState(9);
    const [intelligence, setIntelligence] = React.useState(15);

    function triggerLevelUp() {
        const newStrength = strength + 1
        setStrength(newStrength);
        const newDexterity = dexterity + 2
        setDexterity(newDexterity);
        const newIntelligence = intelligence + 3
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
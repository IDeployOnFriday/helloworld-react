import React from 'react';
import BigCoin from "./BigCoint.tsx";



function CoinCounter() {
    const [numOfCoins, setNumOfCoins] = React.useState(0);

    return (
        <div className="wrapper">
            <main>
                <BigCoin
                    numOfCoins={numOfCoins}
                    setNumOfCoins={setNumOfCoins}
                />
            </main>
            <footer>
                Your coin balance:
                <strong>{numOfCoins}</strong>
            </footer>
        </div>
    );
}

export default CoinCounter;
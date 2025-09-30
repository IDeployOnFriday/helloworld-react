import React from 'react';

interface myProps{
    numOfCoins: number,
    setNumOfCoins: React.Dispatch<React.SetStateAction<number>>
}

function BigCoin({numOfCoins, setNumOfCoins}: myProps) {

    return (
        <div className="coin-wrapper">
            <button
                className="coin"
                onClick={() => setNumOfCoins(numOfCoins + 2)}
            >
        <span className="visually-hidden">
          Add 2 coins
        </span>
                <img
                    className="coin-image"
                    alt=""
                    src="https://sandpack-bundler.vercel.app/img/toonie.png"
                />
            </button>
        </div>
    );
}

export default BigCoin;
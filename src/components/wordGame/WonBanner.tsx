import Banner from "./Banner.tsx";


function WonBanner({numberOfGuesses}: {numberOfGuesses:number}){
    return (
        <Banner status={'happy'}>
            <p>
                Congrats you got it in <strong>{numberOfGuesses}</strong> guesses
            </p>
        </Banner>

    )

}
export default WonBanner
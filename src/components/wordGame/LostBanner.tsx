import Banner from "./Banner.tsx";


function LostBanner({answer}: {answer:string}){
    return (
        <Banner status={'sad'}>
            <p>
                sorry, the correct answer is <strong>{answer}</strong>
            </p>
        </Banner>

    )

}
export default LostBanner
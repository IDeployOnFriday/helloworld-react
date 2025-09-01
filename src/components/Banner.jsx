import logo from "../assets/crocodiles.jpg"

const Banner = () => {
    return (
        <header>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div>Best not to do swimming</div>
        </header>
    );
}

export default Banner;
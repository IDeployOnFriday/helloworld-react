import styled from "styled-components";

let Container = styled.div`
    height: 90vh;
    max-height: 90vh;
    width: 90vw;
    max-width: 90vw;
    overflow: hidden;
    position: fixed;
    top: 5vh;
    left: 5vw;

    background: white;
    border-radius: 8px;
    border: medium solid #282a36;

    display: flex;
    flex-direction: column;
    justify-content: stretch;
`

let Backdrop = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.30);
    z-index: 9999;
`

export const Banner = styled.div`
    width: 100%;
    height: 34px;
    background: #284b63;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    
    h3 {
        margin: 0;
        color: white;
        font-size: 14px;
    }
    
    button {
        background: #3c6e71;
        border: none;
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 12px;
        cursor: pointer;
        
        &:hover {
            background: #52958b;
        }
    }
`

export function MyVerticallyCenteredModal() {
    return (
        <Backdrop>
            <Container>
                <Banner>
                    <h3>My config</h3>
                    <button>my button</button>
                </Banner>

                <label>
                    Label Track
                    <textarea name="postContent" rows={4} cols={40} />
                </label>
                <button>Save Changes </button>

                <p>Other Stuff 1</p>
                <p>Other Stuff 2</p>
            </Container>
        </Backdrop>
    );
}

import Toasty from './Toasty.tsx';
import { useState } from 'react';
import styled from "styled-components";

function ToastyApp() {
    const [expanded, setExpanded] = useState(true);

    const sidebarStyle = {
        position: 'fixed' as const,
        left: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        marginLeft: '30px',
        width: expanded ? '200px' : '60px',
        background: '#f4f4f4',
        borderRight: '1px solid #ddd',
        padding: '20px',
        boxSizing: 'border-box' as const,
        overflowY: 'auto' as const,
        zIndex: 1000,
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column' as const,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center' as const,
        transition: 'width 0.2s ease',
    } as const;

    const mainStyle = {
        marginLeft: expanded ? '220px' : '120px',
        padding: '20px',
        boxSizing: 'border-box' as const,
        transition: 'margin-left 0.2s ease',
    } as const;

    return (
        <>
            <nav style={sidebarStyle} aria-label="Main menu">
                {/* Toggle button (positioned in the top-right corner of the sidebar) */}
                <button
                    onClick={() => setExpanded(e => !e)}
                    style={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        width: '15px',
                        height: '20px',
                        borderRadius: '6px',
                        border: '1px solid #ccc',
                        background: 'lightBlue',

                    }}
                >
                    {expanded ? '<' : '>'}
                </button>

                {expanded &&
                    <>
                    <h3 style={{ marginTop: 0, marginBottom: '12px' }}>Menu</h3>
                        <MyMenuButton>Add A</MyMenuButton>
                        <MyMenuButton>Add B</MyMenuButton>
                        <MyMenuButton>Add C</MyMenuButton>
                        <MyMenuButton>Add D</MyMenuButton></>
                }
            </nav>

            <main style={mainStyle}>
            <article>
                <h1>On the origins of Lorem Ipsum</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.
                </p>
                <p>
                    Lorem Ipsum has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem
                    Ipsum.
                </p>
                <h2>Where does it come from?</h2>
                <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It
                    has roots in a piece of classical Latin literature from 45 BC, making it
                    over 2000 years old. Richard McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one of the more obscure
                    Latin words, consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered the
                    undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
                    of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
                    Cicero, written in 45 BC. This book is a treatise on the theory of
                    ethics, very popular during the Renaissance. The first line of Lorem
                    Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
                    1.10.32.
                </p>
                <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced
                    below for those interested. Sections 1.10.32 and 1.10.33 from "de
                    Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
                    original form, accompanied by English versions from the 1914 translation
                    by H. Rackham.
                </p>
                <h1>On the origins of Lorem Ipsum</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.
                </p>
                <p>
                    Lorem Ipsum has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem
                    Ipsum.
                </p>
                <h2>Where does it come from?</h2>
                <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It
                    has roots in a piece of classical Latin literature from 45 BC, making it
                    over 2000 years old. Richard McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one of the more obscure
                    Latin words, consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered the
                    undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
                    of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
                    Cicero, written in 45 BC. This book is a treatise on the theory of
                    ethics, very popular during the Renaissance. The first line of Lorem
                    Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
                    1.10.32.
                </p>
                <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced
                    below for those interested. Sections 1.10.32 and 1.10.33 from "de
                    Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
                    original form, accompanied by English versions from the 1914 translation
                    by H. Rackham.
                </p>
                <h1>On the origins of Lorem Ipsum</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.
                </p>
                <p>
                    Lorem Ipsum has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem
                    Ipsum.
                </p>
                <h2>Where does it come from?</h2>
                <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It
                    has roots in a piece of classical Latin literature from 45 BC, making it
                    over 2000 years old. Richard McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one of the more obscure
                    Latin words, consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered the
                    undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
                    of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
                    Cicero, written in 45 BC. This book is a treatise on the theory of
                    ethics, very popular during the Renaissance. The first line of Lorem
                    Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
                    1.10.32.
                </p>
                <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced
                    below for those interested. Sections 1.10.32 and 1.10.33 from "de
                    Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
                    original form, accompanied by English versions from the 1914 translation
                    by H. Rackham.
                </p>
            </article>

            <Toasty />

            <a href="https://www.lipsum.com/">Read more on Lipsum.com</a>
        </main>
        </>
    );
}


const MyMenuButton = styled.button`
    border: medium solid darkblue;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    margin-bottom: 5px;
`

export default ToastyApp;
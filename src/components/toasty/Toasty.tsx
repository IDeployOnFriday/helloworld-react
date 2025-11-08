

import styles from './Toasty.module.css';
import React from "react";


function Toasty() {
    // Your goal is to update the `isShown` state variable,
    // based on the user's scroll position, using
    // IntersectionObserver.
    const [isShown, setIsShown] = React.useState(false);
    const wrapperRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;

            setIsShown(entry.isIntersecting)

        });

        if (wrapperRef.current != null){
            observer.observe(wrapperRef.current);
        }



    }, []);

    // This CSS value will control whether the ghost is
    // visible or not.
    const translateX = isShown
        ? '0%'
        : '100%';

    return (
        <div ref={wrapperRef} className={styles.wrapper}>
            <div
                className={styles.character}
                style={{
                    transform: `translateX(${translateX})`,
                }}
            >
                👻
            </div>
        </div>
    );
}

export default Toasty;
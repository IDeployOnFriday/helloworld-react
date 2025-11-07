import React, {useEffect} from 'react';

import styles from './Toasty.module.css';


function Toasty() {
    // Your goal is to update the `isShown` state variable,
    // based on the user's scroll position, using
    // IntersectionObserver.
    const [isShown, setIsShown] = React.useState(false);
    const wrapperRef = React.useRef<HTMLDivElement>(null)

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;

            console.log(entry.isIntersecting)

            if (entry.isIntersecting) {
                // Show character
            } else {
                // Hide character
            }
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
        <div className={styles.wrapper}>
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
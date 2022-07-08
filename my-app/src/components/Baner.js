import React from 'react';
import photo from "../image/banr4.jpg"
import styles from './Baner.module.css'

const Baner = () => {
    return (
        <div className={styles.container}>
            <img src={photo} alt='photo'/>
            <div className={styles.textContainer}>
                <h1>MohmadDurqi</h1>
                <p>
                    i'm learning <span>React.js</span>
                </p>

            </div>
        </div>
       
    );
};

export default Baner;
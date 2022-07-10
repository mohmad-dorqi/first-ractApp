import React from 'react';
import styles from './Logo.module.css'
import bently from '../image/BentleyLogo.png'
import bmw from '../image/BMW_logo.png'
import benz from '../image/benzLo.png'


const Logo = () => {
    return (
        <div className={styles.container}>
            <h3>Who Support Us</h3>
            <img src={bently} alt='bently'/>
            <img src={benz} alt='benz'/>
            <img src={bmw} alt='bmw'/>
        </div>
    );
};

export default Logo;
import React, { Component } from 'react';
import styles from './Cards.module.css'
import Card from './Card';
import benz1 from '../image/car2.png'
import car2 from '../image/car2.png'
import car3 from '../image/car3.png'

class Cards extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Card image={benz1} name='bently' cost='25.000 $'/>
                <Card image={car2} name='bently' cost='60.000 $'/>
                <Card image={car3} name='BMW' cost='45.000 $'/>
                
            </div>
        );
    }
}

export default Cards;
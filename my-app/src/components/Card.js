import React, { Component } from 'react';
import styles from './Card.module.css'
import arowDown from '../image/arow-d.svg'
import arowUp from '../image/arow-u.svg'

class Card extends Component {
    constructor (){
        super();
        this.state={
            counter:0

        }


       
    }
    upHandler = ()=> {
        this.setState(prevState =>({
            counter : prevState.counter + 1,
        }))
    }
    DownHandler=()=> {
        this.setState(prevState=>({
            counter: prevState.counter -1,
        }))
    }
    
    render() {
        const {image ,name,cost }=this.props
        const {counter}=this.state
        return (
            <div className={styles.container}>
                <img src={image} alt='car'/>
                <h3>{name}</h3>
                <p>{cost}</p>

                <div className={styles.counterContainer}>
                    <img src={arowDown}  className={!counter && styles.deActive} onClick={this.DownHandler} alt='arow'/>
                    <span>{counter}</span>
                    <img src={arowUp} onClick={this.upHandler} alt='arow'/>
                    
                </div>        
                
            </div>
        );
    }
}

export default Card;
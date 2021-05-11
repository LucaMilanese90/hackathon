import React from 'react';
import './WinCard.css';
import correct from './correct.png';

const WinCard = () =>  {
 return(
    <div className = 'card-container'>
        <div className = 'card-banner'>
            <img className ='card-icon' src = {correct} alt='Mars-Helicopter'/> 
        </div>
        <h2 className ='card-title'>Congrats!!!</h2>
             
            <p className = "card-paragraph">
                vhjsdvgöewogHVeögviheqGV OWEIFH FJKBVFQFEf VHB nvvbjv .
            </p>
            <button className = 'card-btn'>Go back to the Questions</button>
    </div>
 )
      }

export default WinCard
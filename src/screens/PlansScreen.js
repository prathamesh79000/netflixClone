import React from 'react'
import './PlansScreen.css'

function PlansScreen() {

    return (
        <div className='plansScreen'>
            <form className='plansScreen__premiumPlan' action="">
                <h3 >Premium</h3>
                <button type='button' className='plansScreen__Button' onClick={() => {
                    window.location.href = '/futurepage'
                }}> Subscribe</button>
            </form>

            <form className='plansScreen__standardPlan'>
                <h3 >Standard</h3>
                <button type='button' className='plansScreen__Button' onClick={() => {
                    window.location.href = '/futurepage'
                }}> Subscribe</button>
            </form>

            <form className='plansScreen__basicPlan'>
                <h3 >Basic</h3>
                <button type='button' className='plansScreen__Button' onClick={() => {
                    window.location.href = '/futurepage'
                }}> Subscribe</button>
            </form>


        </div>
    )
}

export default PlansScreen

import React from 'react'
import './ProfileScreen.css'
import Nav from '../Nav';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
import { auth } from '../firebase';
import PlansScreen from './PlansScreen';

function ProfileScreen() {
    const user = useSelector(selectUser);
    return (
        <div className='profileScreen'>
            <Nav />
            <div className="profileScreen__body">
                <h1>Choose the plan that's right for you!</h1>
                <div className="profileScreen__info">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
                        alt="" />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans</h3>
                            
                            <PlansScreen/>

                            <button onClick={() => auth.signOut()} className='profileScreen__signOut'>Sign Out</button>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default ProfileScreen;

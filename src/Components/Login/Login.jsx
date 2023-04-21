/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import app from '../../firbase/firebase.init';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";




const Login = () => {
    const [user, setUser] = useState();

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();




    const handleGoogleSignIN = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);

            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null)
            })
            .catch(error => {
                console.log(error);
            })

    }

    const handleGitgubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            setUser(loggedUser);
        } )
        .catch(error =>{
            console.log(error);
            
        })

    }

    return (
        <div>

            {/* user ? logout : sign in */}


            {
                user ?

                    <button onClick={handleSignOut}>Sign Out</button> :
                    <div>
                        <button onClick={handleGoogleSignIN}>Google LOG in</button>
                        <button onClick={handleGitgubSignIn}>Github login</button>
                    </div>




            }
            {user &&
                <div>
                    <h3>User:{user.displayName}</h3>
                    <p>Email:{user.email}</p>
                    <img src={user.photoURL} alt="" />


                </div>
            }
        </div>
    );
};

export default Login;
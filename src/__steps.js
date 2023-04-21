/**
             * --------------------------------
             *              INITIAL SETUP
             * ----------------------------------
 * 1.visit: console.firebase.google.com
 * 2.create project (skip google analytics)
 * 3.Register app(create config)
 * 4.install firebase
 * 5.add config file to your project
 * 6.Danger:Do not publish or make firebase config to public by pushing
 * those to git hub
 *          -----------------------------
 *              INTEGRATION
 *           ----------------------------------
 *          
 * 7. Visit: Go to docs > Build > Authentication > Get started >
 * 8.export app from the firebase .config.js file : export default app
 * 10.Login.jsx:import getAuth from firebase/auth
 * 11.create const auth = getAuth(app)
 *              ---------------------
 *                  PROVIDER
 *                ----------------------
 * 12.import googleAuthProvider and create a new provider 
 * 12.use sign in with popup and pass auth and provider
 * 13.activate sign in method (google, facebook,github,etc)
 * 14.[vite]:change 127.0.0.1 to localhost 
 * 
 *    ---------------------
 *                 MORE AUTH  PROVIDER
 *                ----------------------
 * 
 * 15.1.ACTIVATE THE  auth provider ( create app, provider redirect url 
 * client id ,client secret)
 * 
 * 
 * 
 *  
 */
/* 
------------------------
    INITIAL SETUP
------------------------
1. visit: firebase.google.com 
2. create a new project 
3. visit doc ( go to docs): Build > Authentication > Web < Getting started 
4. Register web app > firebase project home > click > give name and register
5. Install firebase for our project: npm install firebase
6. DANGEROUS: get firebase config and put it in firebase.init.js 
7. export app from firebase.init.js 
------------------------
    SETUP THE PROVIDER
------------------------
8. create auth using getAuth from firebase by using app from firebase.init.js
9. create a google auth provider. do not forget to use new GoogleAuthProvider(); 
10. go to firebase > build > Authentication > Sign In method 
11. Enable google sign in method 
12. Create a button for google sign in method with a click handler
13. inside the event handler, call signInWithPopup with auth, provider
14. after signInWithPopup .then result , error 
-------------------------
    DISPLAY DATA
-------------------------

*/
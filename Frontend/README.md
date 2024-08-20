# FSD-FE-URL
This React project consists of several components for user authentication, URL shortening, and password reset functionalities. Below is a brief overview of each component along with instructions on how to run the project.

Components
----------

1.  **Email Verification Page (`Emailverify.js`)**:
    
    *   This component is used for verifying user email addresses.
    *   It sends a verification email to the provided email address.
    *   It utilizes Formik and Yup for form handling and validation.
    *   Axios is used for making HTTP requests to the backend API.
    *   React Router is used for navigation.
2.  **Login Page (`Login.js`)**:
    
    *   This component allows users to log in to the application.
    *   It handles user authentication using Formik and Yup for form validation.
    *   Axios is used to send login requests to the backend.
    *   It includes links for password reset and user registration.
    *   React Router is used for navigation.
3.  **Navigation Bar (`NavBar.js`)**:
    
    *   This component provides navigation links for different pages of the application.
    *   It includes a logout button that sends a logout request to the backend.
    *   Axios is used for making HTTP requests.
    *   React Router is used for navigation.
4.  **Password Reset Page (`PasswordReset.js`)**:
    
    *   This component allows users to reset their passwords.
    *   Users receive a password reset link via email, and they can set a new password.
    *   Formik and Yup are used for form handling and validation.
    *   Axios is used to send password reset requests to the backend.
    *   React Router is used for navigation.
5.  **Registration Page (`Register.js`)**:
    
    *   This component allows users to register for a new account.
    *   It handles user registration using Formik and Yup for form validation.
    *   Axios is used to send registration requests to the backend.
    *   React Router is used for navigation.
6.  **URL Shortening Page (`Urlpage.js`)**:
    
    *   This component allows users to shorten long URLs.
    *   It validates input using Formik and Yup.
    *   Axios is used to send URL shortening requests to the backend.
    *   React Router is used for navigation.
7.  **URL Table Page (`Urltable.js`)**:
    
    *   This component displays a table of shortened URLs.
    *   It fetches URL data from the backend using Axios.
    *   Users can click on a button to redirect to the original URL.


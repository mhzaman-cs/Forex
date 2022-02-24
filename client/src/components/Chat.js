// Import React
import React from 'react';
// Firebase deps
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// Hooks
import { useAuthState } from '../hooks';
// Components
import Channel from '../components/Channel';
import Loader from '../components/Loader';


firebase.initializeApp({
  apiKey: "AIzaSyAnzsdTcWA5LO3sSY7iBi00AkCVO61VIqM",
  authDomain: "forex-chat-fee00.firebaseapp.com",
  databaseURL: "https://forex-chat-fee00-default-rtdb.firebaseio.com",
  projectId: "forex-chat-fee00",
  storageBucket: "forex-chat-fee00.appspot.com",
  messagingSenderId: "849151649848",
  appId: "1:849151649848:web:a25a52e63a6cc567935ecd",
  measurementId: "G-366466W4EV"
});

function Chat() {
  const { user, initializing } = useAuthState(firebase.auth());

  const signInWithGoogle = async () => {
    // Retrieve Google provider object
    const provider = new firebase.auth.GoogleAuthProvider();
    // Set language to the default browser preference
    firebase.auth().useDeviceLanguage();
    // Start sign in process
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.log(error.message);
    }
  };

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  const renderContent = () => {
    if (initializing) {
      return (
        <div className="flex items-center justify-center h-full add-margin">
          <Loader size="lg" />
        </div>
      );
    }

    if (user) return <Channel user={user} />;

    return (
      <div className="flex items-center justify-center shadow-md h-full">
        <div className="flex flex-col items-center justify-center max-w-xl w-full mx-4 p-8 rounded-md shadow-card bg-coolDark-600 transition-all add-margin">
          <h2 className="mb-2 text-3xl flex items-center">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment-dollar" className="chat-icon svg-inline--fa fa-comment-dollar fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32C114.62 32 0 125.12 0 240c0 49.56 21.41 95.01 57.02 130.74C44.46 421.05 2.7 465.97 2.2 466.5A7.995 7.995 0 0 0 8 480c66.26 0 115.99-31.75 140.6-51.38C181.29 440.93 217.59 448 256 448c141.38 0 256-93.12 256-208S397.38 32 256 32zm24 302.44V352c0 8.84-7.16 16-16 16h-16c-8.84 0-16-7.16-16-16v-17.73c-11.42-1.35-22.28-5.19-31.78-11.46-6.22-4.11-6.82-13.11-1.55-18.38l17.52-17.52c3.74-3.74 9.31-4.24 14.11-2.03 3.18 1.46 6.66 2.22 10.26 2.22h32.78c4.66 0 8.44-3.78 8.44-8.42 0-3.75-2.52-7.08-6.12-8.11l-50.07-14.3c-22.25-6.35-40.01-24.71-42.91-47.67-4.05-32.07 19.03-59.43 49.32-63.05V128c0-8.84 7.16-16 16-16h16c8.84 0 16 7.16 16 16v17.73c11.42 1.35 22.28 5.19 31.78 11.46 6.22 4.11 6.82 13.11 1.55 18.38l-17.52 17.52c-3.74 3.74-9.31 4.24-14.11 2.03a24.516 24.516 0 0 0-10.26-2.22h-32.78c-4.66 0-8.44 3.78-8.44 8.42 0 3.75 2.52 7.08 6.12 8.11l50.07 14.3c22.25 6.36 40.01 24.71 42.91 47.67 4.05 32.06-19.03 59.42-49.32 63.04z"></path></svg>
            Forex Chat
          </h2>
          <p className="mb-8 text-lg text-center">
            Remember to Post in the Format Mentioned Above in the Instructions.
          </p>
          <button
            onClick={signInWithGoogle}
            className="rounded shadow-button pl-6 pr-8 py-3 text-gray-600 font-medium flex items-center justify-center overflow-y-hidden focus:outline-none focus:ring focus:ring-primary-500 focus:ring-opacity-75 goog_button"
          >
            <svg
              viewBox="5 -5 30 30"
              enableBackground="new 5 -5 30 30"
              className="w-6 h-6 mr-4 flex-shrink-0"
            >
              <path
                fill="#000000"
                d="M15.3-4.2C11.6-3 8.4-.2 6.6 3.2 6 4.5 5.6 5.7 5.3 7c-.7 3.3-.2 6.7 1.3 9.7 1 1.9 2.4 3.7 4.2 5 1.6 1.3 3.5 2.2 5.6 2.7 2.6.7 5.3.7 7.8.1 2.3-.5 4.5-1.6 6.3-3.2 1.9-1.7 3.2-3.9 3.9-6.2.8-2.6.9-5.3.4-8-4.8 0-9.6 0-14.4 0 0 2 0 3.9 0 5.9 2.8 0 5.6 0 8.3 0-.3 1.9-1.5 3.6-3.1 4.6-1 .7-2.2 1.1-3.4 1.3-1.2.2-2.5.2-3.7 0-1.2-.2-2.4-.7-3.4-1.4-1.6-1.1-2.9-2.8-3.5-4.6-.7-1.9-.7-4 0-5.8.5-1.3 1.2-2.5 2.2-3.5 1.2-1.2 2.8-2.1 4.6-2.5 1.5-.3 3-.2 4.5.2 1.2.4 2.4 1 3.3 1.9.9-.9 1.9-1.8 2.8-2.8.5-.5 1-1 1.5-1.5-1.4-1.3-3.1-2.3-4.9-3-3.3-1.2-7-1.2-10.3-.1z"
              ></path>
              <path
                fill="#EA4335"
                d="M15.3-4.2c3.3-1.1 7-1.1 10.3.1 1.8.7 3.5 1.7 4.9 3-.5.5-1 1-1.5 1.5-.9.9-1.9 1.8-2.8 2.8-.9-.9-2.1-1.5-3.3-1.9-1.4-.4-3-.5-4.5-.2-1.7.4-3.3 1.2-4.6 2.5-1 1-1.8 2.2-2.2 3.5-1.7-1.3-3.3-2.5-5-3.8 1.8-3.5 5-6.2 8.7-7.5z"
              ></path>
              <path
                fill="#FBBC05"
                d="M5.3 7c.3-1.3.7-2.6 1.3-3.7 1.7 1.3 3.3 2.5 5 3.8-.7 1.9-.7 4 0 5.8-1.7 1.3-3.3 2.5-5 3.8-1.5-2.9-2-6.4-1.3-9.7z"
              ></path>
              <path
                fill="#4285F4"
                d="M20.3 7.2c4.8 0 9.6 0 14.4 0 .5 2.6.4 5.4-.4 8-.7 2.4-2 4.6-3.9 6.2-1.6-1.2-3.2-2.5-4.9-3.7 1.6-1.1 2.7-2.8 3.1-4.6-2.8 0-5.6 0-8.3 0 0-2 0-4 0-5.9z"
              ></path>
              <path
                fill="#34A853"
                d="M6.6 16.7c1.7-1.3 3.3-2.5 5-3.8.6 1.8 1.9 3.5 3.5 4.6 1 .7 2.2 1.2 3.4 1.4 1.2.2 2.4.2 3.7 0 1.2-.2 2.4-.6 3.4-1.3 1.6 1.2 3.2 2.5 4.9 3.7-1.8 1.6-3.9 2.7-6.3 3.2-2.6.6-5.3.6-7.8-.1-2-.5-3.9-1.5-5.6-2.7-1.7-1.3-3.2-3-4.2-5z"
              ></path>
            </svg>
            Sign in with Google
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="max-height-chat">
      <div className="flex flex-col h-full bg-coolDark-500 text-white transition-colors">
        <header
          className="flex-shrink-0 flex items-center justify-between px-4 sm:px-8 shadow-md navbar-chat"
          style={{ height: 'var(--topbar-height)' }}
        >
          <div className="flex right-corner">
            {user ? (
              <button
                onClick={signOut}
                className="uppercase text-sm font-medium text-white tracking-wide rounded py-2 px-4 mr-4 focus:outline-none  transition-all"
              >
                Sign out
              </button>
            ) : null}
          </div>
        </header>
        <main
          className="flex-1"
          style={{ maxHeight: 'calc(100% - var(--topbar-height))' }}
        >
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default Chat;

import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import firebaseConfig from './database/firebase.js';




  
firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        setError("");
        console.log(user);
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-4">
      <input
      className="border p-2"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
      className="border p-2"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button className="rounded-full bg-blue-800  font-semibold text-white ease-linear transform  transition duration-250 hover:scale-95 p-3 " type="submit"> Sign In </button>
      {error && <p>{error.message}</p>}
    </form>
  );
};

export default Login;

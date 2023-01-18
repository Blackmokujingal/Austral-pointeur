import React, { useContext } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import firebaseConfig from './database/firebase.js'



  
firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);

  const navitage = useNavigate()

  const {dispatch} = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault();

  

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({type:"LOGIN", payload:user})
        
        navitage("/")
      })
      .catch((error) => {
        setError(true);
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
      <button className="rounded-full bg-blue-800  font-semibold text-white ease-linear transform  transition duration-250 hover:scale-95 p-3 " type="submit"> Login </button>
      {error && <span className='font-semibold flex items-center text-red-600'>Wrong email or password. <br/> Please try again.</span>}
    </form>
  );
};

export default Login;



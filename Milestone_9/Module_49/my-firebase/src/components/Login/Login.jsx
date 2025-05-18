import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {auth} from '../../firebase/firebase.init'

const provider = new GoogleAuthProvider();

const handleClick = () => {
	console.log("hello sign");
	signInWithPopup(auth, provider)
		.then(result => {
		console.log(result);
		})
		.catch(error => {
		console.log(error);
	}
	)
};

const Login = () => {
	return (
		<div>
			<h2> Login Here...........</h2>
			<button onClick={handleClick}>Sign in With google</button>
		</div>
	);
};

export default Login;

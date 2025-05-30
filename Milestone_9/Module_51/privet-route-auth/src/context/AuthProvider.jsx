import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebse.init";

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const signUpUser = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			console.log("inside useEffect on current user");
			setUser(currentUser);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	const userInfo = {
		user,
		createUser,
		signUpUser,
	};

	return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;

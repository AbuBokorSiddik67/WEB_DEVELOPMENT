import React, { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
	const { createUser } = useContext(AuthContext);

	const handleRegister = (e) => {
		e.preventDefault();
		const name = e.target.name.value;
		const email = e.target.email.value;
		const password = e.target.password.value;
		console.log(name, email, password);
		
        createUser(email, password)
            .then(result => {
            console.log(result)
            })
            .catch(error => {
            console.log(error);
        })
	};

	return (
		<div className="card bg-base-100 mx-auto mt-25 w-full max-w-sm shrink-0 shadow-2xl">
			<h1 className="text-2xl mt-5 text-center font-bold">Register now!</h1>
			<div className="card-body">
				<form onSubmit={handleRegister} className="fieldset">
					<label className="label">Name</label>
					<input
						type="text"
						name="name"
						className="input"
						placeholder="Name"
						autoComplete="username"
					/>
					<label className="label">Email</label>
					<input
						type="email"
						name="email"
						className="input"
						placeholder="Email"
						autoComplete="email"
					/>
					<label className="label">Password</label>
					<input
						type="password"
						name="password"
						className="input"
						placeholder="Password"
						autoComplete="current-password"
					/>
					<button className="btn btn-neutral mt-4">Register</button>
				</form>
				<p>
					Already have an account? Please{" "}
					<NavLink className="underline text-blue-500" to="/login">
						Login
					</NavLink>
				</p>
			</div>
		</div>
	);
};

export default Register;

import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
	const {signUpUser} = use(AuthContext);

	const handleLoginUser = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;

		signUpUser(email, password)
			.then(result => {
			console.log(result);
		})
			.catch(error => {
			console.log(error);
		})
	}

	return (
		<div className="card bg-base-100 mx-auto mt-15 w-full max-w-sm shrink-0 shadow-2xl">
			<h1 className="text-2xl mt-5 text-center font-bold">Login now!</h1>
			<div className="card-body">
				<form onSubmit={handleLoginUser} className="fieldset">
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
					<div>
						<a className="link link-hover">Forgot password?</a>
					</div>
					<button className="btn btn-neutral mt-4">Login</button>
				</form>
				<p>
					New to this site? Please{" "}
					<NavLink className="underline text-blue-500" to="/register">
						Register
					</NavLink>
				</p>
			</div>
		</div>
	);
};

export default Login;

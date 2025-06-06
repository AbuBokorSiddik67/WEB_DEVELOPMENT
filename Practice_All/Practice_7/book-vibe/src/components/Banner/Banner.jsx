import React from "react";

const Banner = () => {
	return (
		<div className="hero bg-base-200 min-h-screen">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<img
					src="../../../assets/books.jpg"
					className="max-w-sm rounded-lg shadow-2xl"
				/>
				<div>
					<h1 className="text-5xl font-bold">Boi Poke Here</h1>
					<p className="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>
					<button className="btn btn-primary">Get Started</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;

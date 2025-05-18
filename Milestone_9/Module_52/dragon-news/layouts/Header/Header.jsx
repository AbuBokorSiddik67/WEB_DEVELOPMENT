import React from "react";
import logo from "../../src/assets/logo.png";
import { format } from "date-fns";
import Marquee from "react-fast-marquee";
import { NavLink } from "react-router";
import '../../src/index.css';

const Header = () => {
	const formattedDate = format(new Date(), "EEEE, MMMM dd yyyy");
	return (
		<div>
			<div className="flex flex-col items-center mt-8 gap-y-2">
				<div>
					<img className="w-[350px]" src={logo} alt="" />
				</div>
				<p className="text-secondary">Journalism Without Our Fear or Favour</p>
				<p className="text-secondary">{formattedDate}</p>
			</div>
			<div className="flex w-11/12 mx-auto bg-gray-100 py-4 px-4 mt-4 rounded" >
				<p className="btn btn-primary mr-5">Latest</p>
				<Marquee speed={50} pauseOnHover={true}>
					<p className="font-semibold">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
						natus autem dicta sunt rerum numquam dolores atque molestiae
						repellendus neque!
					</p>
				</Marquee>
			</div>
			<div className="flex justify-between items-center w-11/12 mx-auto mt-8">
				<div>{" "}</div>
				<div className="flex gap-5">
					<NavLink to='/'>Home</NavLink>
					<NavLink to='/about'>About</NavLink>
					<NavLink to='/career'>Career</NavLink>
				</div>
				<div className="flex gap-3">
					<img className="w-[40px]" src="../../src/assets/user.png" alt="" />
					<button className="btn btn-secondary">Login</button>
				</div>
			</div>
		</div>
	);
};

export default Header;

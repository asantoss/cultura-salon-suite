import React from 'react';
import NavLink from './NavLink';

export default function Navbar() {
	return (
		<div className="flex justify-between text-2xl text-primaryText pt-8 pb-6 border-b-secondary border-b-2 ">
			<NavLink activeClassName="active" href="/">
				<a>Home</a>
			</NavLink>
			<NavLink activeClassName="active" href="shop">
				<a>Shop</a>
			</NavLink>
			<NavLink activeClassName="active" href="/ourwork">
				<a>Our Work</a>
			</NavLink>
			<NavLink activeClassName="active" href="/testimonials">
				<a>Testimonial</a>
			</NavLink>
			<NavLink activeClassName="active" href="/booking">
				<a>Booking</a>
			</NavLink>
			<NavLink activeClassName="active" href="/contact">
				<a>Contact Us</a>
			</NavLink>
			<NavLink activeClassName="active" href="/about">
				<a>About</a>
			</NavLink>
		</div>
	);
}

import React from 'react';
import Layout from '../components/Layout';

export default function Contact() {
	return (
		<Layout>
			<div className="flex h-full">
				<div className="w-1/2 -ml-10 text-2xl">
					<h2 className="text-6xl  underline text-primary">Get In Touch</h2>
					<div className="text-primaryText mt-10 ">
						<span aria-label="Phone" className="underline block text-2xl">
							Phone:
						</span>
						<a href="tel:+17703695370">770.369.5370</a>
					</div>
					<div className="text-primaryText my-6">
						<span aria-label="Phone" className="underline block ">
							Email:
						</span>
						<a href="mailto:addysantosantana@gmail.com">
							addysantosantana@gmail.com
						</a>
					</div>
					<div className="text-primaryText mb-6">
						<span aria-label="Phone" className="underline block text-2xl">
							Salon Address:
						</span>
						<a href="geo:33.792630,-84.286640">
							2570 Blackmon Drive, Suite 440,<br></br> Decatur, Ga 30033. Loft
							15
						</a>
					</div>
				</div>
				<div className="w-1/2"></div>
			</div>
		</Layout>
	);
}

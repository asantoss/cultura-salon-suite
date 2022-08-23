import React from 'react';
import Layout from '../components/Layout';
import { sanityClient } from '../client';

export async function getStaticProps() {
	const businessUnit = await sanityClient.fetch(
		'*[_type == "businessUnit" && title == "Cultura Salon"][0]'
	);

	return {
		props: {
			businessUnit
		}
	};
}

export default function Contact({ businessUnit }: any) {
	const mailToLink = `mailto:${businessUnit.email}`;
	const phoneLink = `tel:${businessUnit.phone}`;
	return (
		<Layout>
			<div className="flex h-full">
				<div className="w-1/2 -ml-10 text-2xl">
					<h2 className="text-6xl  underline text-primary">Get In Touch</h2>
					<div className="text-primaryText mt-10 ">
						<span aria-label="Phone" className="underline block text-2xl">
							Phone:
						</span>
						<a href={phoneLink}>{businessUnit.phoneNumber}</a>
					</div>
					<div className="text-primaryText my-6">
						<span aria-label="Phone" className="underline block ">
							Email:
						</span>
						<a href={mailToLink}>{businessUnit.email}</a>
					</div>
					<div className="text-primaryText mb-6">
						<span aria-label="Phone" className="underline block text-2xl">
							Salon Address:
						</span>
						<a href="geo:33.792630,-84.286640">{businessUnit.address}</a>
					</div>
				</div>
				<div className="w-1/2"></div>
			</div>
		</Layout>
	);
}

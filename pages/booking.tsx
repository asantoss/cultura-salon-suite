import { PortableText } from '@portabletext/react';
import React from 'react';
import Layout from '../components/Layout';
import { sanityClient } from '../utils';
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

export default function Booking({ businessUnit }: any) {
	return (
		<Layout>
			<div className="flex justify-evenly pt-16">
				<div className="w-1/3 -m-10">
					<h2 className="text-primary  text-6xl">
						Book your <br></br>
						Appointment
					</h2>
				</div>
				<div className="w-2/3 justify-between flex pl-4 text-primaryText text-2xl">
					<div className="flex flex-col mt-6 w-1/2">
						<p>
							To see my most up-to-date availability, follow the link below to
							and it will take you straight to my booking site.
						</p>
						<a
							href={businessUnit.bookingSite}
							className="mt-10 rounded-2xl text-4xl font-medium hover:text-white bg-primary-light underline pb-2 text-primary self-center px-4">
							Book Now
						</a>
					</div>
					<div className="ml-10 w-1/2">
						<h3 className="underline">Cancellation Policy</h3>
						<PortableText value={businessUnit.cancellationPolicy} />
					</div>
				</div>
			</div>
		</Layout>
	);
}

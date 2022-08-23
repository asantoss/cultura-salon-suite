import type { NextPage } from 'next';
import { useNextSanityImage } from 'next-sanity-image';
import Head from 'next/head';
import Image from 'next/image';
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
const Home: NextPage = ({ businessUnit }: any) => {
	const heroProps: any = useNextSanityImage(
		sanityClient,
		businessUnit.heroImage
	);
	const logoProps: any = useNextSanityImage(sanityClient, businessUnit.logo);
	return (
		<Layout>
			<div className="flex">
				<div className="-ml-10 relative w-1/3 text-primaryText">
					<div className="">
						<Image
							{...logoProps}
							layout="responsive"
							height={400}
							width={400}
							alt="business-logo"></Image>
					</div>
					<p className="text-xl -mt-20">{businessUnit.description}</p>
					<div className="mt-10 flex items-center">
						<span className="w-1/3">
							<svg className="inline mx-0" stroke="#4a3121" fill="#4a3121">
								<g transform="scale(3) translate(0, 25)">
									<line
										x1="10"
										x2="40"
										strokeLinecap="round"
										fill="none"></line>
									<g transform="translate(40)">
										<path
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M -2.5,-1.5,-0.5,0,-2.5,1.5 "></path>
									</g>
								</g>
							</svg>
						</span>
						<a href="" className="text-2xl underline ">
							Discover More
						</a>
					</div>
				</div>
				<div className="w-3/5">
					<Image
						{...heroProps}
						layout="responsive"
						alt="business-suite"></Image>
				</div>
			</div>
		</Layout>
	);
};

export default Home;

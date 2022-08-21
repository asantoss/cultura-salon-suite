import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout';
import logoImage from '../public/pngLogo.webp';
import suite from '../public/suite.webp';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<Layout>
			<div className="flex">
				<div className="-ml-10 relative w-1/3 text-primaryText">
					<div className="">
						<Image
							layout="responsive"
							height={400}
							width={400}
							src={logoImage}></Image>
					</div>
					<p className="text-xl -mt-20">
						We create confidence with simplicity and authenticity.
					</p>
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
					<Image layout="responsive" src={suite}></Image>
				</div>
			</div>
		</Layout>
	);
};

export default Home

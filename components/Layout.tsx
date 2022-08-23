import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';

interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<Head>
				<title>Cultura Salon</title>
				<meta
					name="description"
					content="Cultura Salon is a salon located in the heart of the city of Decatur. We offer a full range of services and treatments to help you look and feel your best."
				/>
				<meta
					name="twitter:description"
					content="Cultura Salon is a salon located in the heart of the city of Decatur. We offer a full range of services and treatments to help you look and feel your best."
				/>
				<meta name="twitter:title" content="Cultura Salon" />
				<meta
					name="og:description"
					content="Cultura Salon is a salon located in the heart of the city of Decatur. We offer a full range of services and treatments to help you look and feel your best."
				/>
				<meta name="og:title" content="Cultura Salon" />
				<meta name="description" content="Bayleage specialist" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="bg-background max-w-screen-xl mx-auto ">
				<Navbar />
				<main
					id="partial-body-border"
					className=" border-r-secondary border-r-2  w-full  pt-16 pb-8">
					{children}
				</main>
				<Footer />
			</div>
		</>
	);
}

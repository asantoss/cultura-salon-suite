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
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
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

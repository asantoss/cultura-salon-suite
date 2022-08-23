import { NextPage } from 'next';
import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import profileImage from '../public/addyPic.webp';
import { createClient } from 'next-sanity';
import { PortableText } from '@portabletext/react';
import { useNextSanityImage } from 'next-sanity-image';
import { sanityClient } from '../client';
import { Author } from '../schema';
import { AuthorProfile } from '../components/AuthorProfile';

export async function getStaticProps() {
	const authors: Author[] = await sanityClient.fetch('*[_type == "author"]');

	return {
		props: {
			authors
		}
	};
}

const About: NextPage = ({ authors }: any) => {
	return (
		<Layout>
			{authors.map((author: Author) => (
				<AuthorProfile author={author} key={author.id} />
			))}
		</Layout>
	);
};

export default About;

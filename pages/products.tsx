import { PortableText } from '@portabletext/react';
import { NextPage } from 'next';
import { groq } from 'next-sanity';
import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Product from '../components/Product';
import { sanityClient } from '../client';
import Arrow from '../public/arrowLeft.svg';

type Props = {};

const Products: NextPage = ({ allProducts }: any) => {
	const [post, setPost] = useState(0);
	const [imageProps, setImageProps] = useState(null);
	const selectNext = () => {
		if (post < allProducts.length - 1) {
			setPost(post + 1);
		}
	};
	const selectPrevious = () => {
		if (post > 0) {
			setPost(post - 1);
		}
	};

	return (
		<Layout>
			<div className="">
				<div className="flex">
					<div className="ml-auto px-2 flex items-center">
						{post > 0 && (
							<button
								onClick={selectPrevious}
								title="Previous"
								className="bg-white mx-1 text-white p-1 border rounded-full">
								<Image src={Arrow} alt="Select previous" />
							</button>
						)}
						{post < allProducts.length - 1 && (
							<button
								onClick={selectNext}
								title="Next"
								className="bg-white text-white p-1 border rounded-full">
								<Image src={Arrow} alt="Select next" />
							</button>
						)}
					</div>
				</div>
				{allProducts[post] && <Product product={allProducts[post]} />}
			</div>
		</Layout>
	);
};

export async function getStaticProps() {
	const allProducts = await sanityClient.fetch(groq`*[_type == "product"]{
        title,body,productImage
    }`);
	return {
		props: {
			allProducts
		}
	};
}

export default Products;

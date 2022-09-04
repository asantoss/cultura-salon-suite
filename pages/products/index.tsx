import { NextPage } from 'next';
import { groq } from 'next-sanity';
import Image from 'next/image';
import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Product from '../../components/Product';
import { sanityClient } from '../../client';
import Arrow from '../../public/arrowLeft.svg';

const Products: NextPage = ({ allProducts }: any) => {
	const [post, setPost] = useState(0);

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
								&larr;
							</button>
						)}
						{post < allProducts.length - 1 && (
							<button
								onClick={selectNext}
								title="Next"
								className="bg-white text-white p-1 border rounded-full">
								&rarr;
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

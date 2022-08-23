import { PortableText } from '@portabletext/react';
import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import React from 'react';
import Layout from '../components/Layout';
import { sanityClient } from '../client';

type Props = {};

const Product = ({ product }: any) => {
	const imageProps: any = useNextSanityImage(
		sanityClient,
		product.productImage
	);
	const altText = `Image of ${product.title}`;

	return (
		<div className="flex ">
			<div className=" pt-16 pl-0 w-2/4 overflow-visible -ml-16">
				{imageProps && (
					<Image
						{...imageProps}
						layout="responsive"
						height={300}
						width={300}
						alt={altText}
					/>
				)}
			</div>
			<div className="w-3/4 p-16 pl-32">
				<h2 className="text-5xl mb-10 text-primary underline ">
					{product.title}
				</h2>
				<div className="text-lg leading-10 overflow-y-auto ">
					<PortableText value={product.body} />
				</div>
			</div>
		</div>
	);
};

export default Product;

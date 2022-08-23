import { PortableText } from '@portabletext/react';
import React from 'react';
import { Author } from '../schema';
import { sanityClient } from '../utils';
import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';

type AuthorProfileProps = {
	author: Author;
};

export const AuthorProfile = ({ author }: AuthorProfileProps) => {
	const imageProps: any = useNextSanityImage(sanityClient, author.image);

	return (
		<div key={author.id} className="flex ">
			<div className=" pt-16 pl-0 w-2/4 overflow-visible -ml-16">
				<Img {...imageProps} src={imageProps?.src} alt="Image of the author" />
			</div>
			<div className="w-3/4 p-16 pl-32">
				<h2 className="text-5xl mb-10 text-primary underline ">About Me</h2>
				<div className="text-lg leading-10 overflow-y-auto ">
					<PortableText value={author.bio} />
				</div>
			</div>
		</div>
	);
};

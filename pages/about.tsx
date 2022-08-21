import { NextPage } from 'next';
import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import profileImage from '../public/addyPic.webp';

type Props = {};

const About: NextPage = (props: Props) => {
	return (
		<Layout>
			<div className="flex ">
				<div className=" pt-16 pl-0 w-2/4 overflow-visible -ml-16">
					<Image src={profileImage} alt="Image of the author" />
				</div>
				<div className="w-3/4 p-16 pl-32">
					<h2 className="text-5xl mb-10 text-primary underline ">About Me</h2>
					<div className="text-lg leading-10 overflow-y-auto ">
						<p>
							Hi! My name is Adalys, but people call me Addy. I've been a
							licensed Cosmetologist since 2018. I'm a certified Bellami Hair
							extension Artist and Colorist. In March of 2020, I decided to
							branch out and open Cultura Salon. Cultura is the Spanish word for
							"Culture," being a Cuban-American hairstylist, I wanted to create
							a space to be my unapologetically Latina self. Some days you'll
							come to the salon, and I'll be playing a mix of salsa, merengue,
							and bachata music; other days, you'll hear 90's R&amp;B, Ragae, or
							House music.
						</p>
						<p>
							No matter where you come from, I wanted to create a space where
							anyone could feel welcomed. Who knows, you might leave speaking a
							little more Spanish than you did when you came in. Growing up,
							whenever we had guests, my grandma would greet them by making
							cafecito. With that custom instilled in me, I will greet you the
							same way- with respect, a warm smile, and a cup of coffee! I love
							working on all kinds of hair, but brunettes hold a special place
							in my heart. I specialize in giving my clients low-maintenance,
							lived-in color customized to their personality and lifestyle.
						</p>
						<p>
							Are you more outspoken? No worries, I got you covered! I love to
							have a break in routine and make your vivid hair dreams come true!
							Anyway, at this point, I feel like I'm writing my whole life
							story, so I'll end this here. I hope I have given you some insight
							into who I am and my vibe.
						</p>
						<span className="pl-6">Xoxo, Addy</span>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default About;

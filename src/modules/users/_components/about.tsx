import ReactPlayer from 'react-player';

const About = () => {
	return (
		<section
			id="about"
			className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto mt-8 px-3">
			<h1 className="text-3xl">About</h1>

			<div className="w-full p-4 md:p-8 my-10 rounded-3xl shadow-lg bg-black/50 bg-clip-padding backdrop-filter backdrop-blur-[1px] bg-opacity-0  space-y-3 md:space-y-0">
				<h3>
					Accra’s Boogie is an electrifying dance competition that grows bigger
					and better every year. Celebrated as the premier dance event in Ghana,
					it was honored with the title of Best Dance Event in 2023 by the Ghana
					Dance Awards.
				</h3>
				<p className="py-4">
					Dance groups from all over Accra showcase their talent across various
					dance genres, vying for the coveted Boogie King Trophy. This event not
					only highlights the rich dance culture of Accra but also fosters a
					spirit of healthy competition and community.
				</p>

				<h2 className="pt-6  text-xl font-semibold">Competition</h2>

				<p>
					The competition is structured into four thrilling rounds, with
					eliminations in each round, intensifying the excitement and stakes.
				</p>
				<p className="py-4">
					This season introduces a new twist: audience participation. Voting
					accounts for 30% of the final score, while the judges' expertise
					contributes the remaining 70%. This blend ensures a balanced and
					engaging competition.
				</p>

				<h2 className="pt-6  text-xl font-semibold">Judges</h2>

				<p>
					Each year, a panel of esteemed judges is selected, comprising seasoned
					celebrities and respected figures from various fields. These
					well-known personalities from Accra bring their unique perspectives
					and expertise to the judging process, ensuring a fair and dynamic
					evaluation of the contestants’ performances.
				</p>

				<h5 className="text-lg pt-7 pb-2">Watch Past Seasons of ABK </h5>
				<div className="md:grid grid-cols-2 gap-4 space-y-4 md:space-y-0 max-w-4xl mx-auto">
					<ReactPlayer
						width={'100%'}
						url="https://www.youtube.com/watch?v=bjZ0R6ShBI0"
					/>
					<ReactPlayer
						width={'100%'}
						url="https://www.youtube.com/watch?v=Ztq247joiVA"
					/>
				</div>
			</div>
		</section>
	);
};

export default About;

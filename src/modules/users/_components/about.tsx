import ReactPlayer from 'react-player';

const About = () => {
	return (
		<section
			id="about"
			className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto mt-8 px-3">
			<h1 className="text-3xl">About</h1>

			<div className="w-full p-4 md:p-8 my-10 rounded-3xl shadow-lg bg-black/50 bg-clip-padding backdrop-filter backdrop-blur-[1px] bg-opacity-0  space-y-3 md:space-y-0">
				<h3>
					Welcome to the official site to audition for Accra’s Boogie King..
				</h3>
				<p className="py-4">
					We enjoy all styles of dance, whether you are an amazing ballet, or
					can do the old skool pop & lock. We want to be shocked and amazed by
					what you can do in 90 seconds!
				</p>
				<p> So take a chance and show us your talent.</p>

				<h2 className="pt-6 pb-2 text-2xl">Audition Online</h2>

				<p>
					It is now easier than ever to audition by sending us a video of your
					act.
				</p>
				<p className="py-4">
					You can upload a video, send us a link to your video on YouTube or use
					your webcam to directly record a video on our site!
				</p>
				<p>
					Seriously it cannot get any more simple than that! You have no
					excuse.Submit a video audition for Accra’s Boogie King!
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

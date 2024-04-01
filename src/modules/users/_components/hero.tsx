/* eslint-disable @typescript-eslint/no-explicit-any */
import UserInformation from './user-information';

const HeroComponent = () => {
	return (
		<section id="home" className="relative  md:p-12 p-6">
			<div className="flex flex-col justify-center items-center">
				<img src="/text.svg" alt="" className="w-52 mt-5" />
				<div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto mt-5">
					<div className="w-full md:p-4 rounded-3xl shadow-lg bg-black/50 bg-clip-padding backdrop-filter backdrop-blur-[1px] bg-opacity-0 ">
						<UserInformation />
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroComponent;

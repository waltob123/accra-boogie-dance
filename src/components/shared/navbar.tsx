import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify-icon/react';
import ScrollIntoView from 'react-scroll-into-view';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	const [active, setActive] = useState(false);
	const [activeHash, setActiveHash] = useState('');

	const navigate = useNavigate();

	const home = () => {
		return (
			window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }), navigate('/')
		);
	};

	useEffect(() => {
		const scrollActive = () => {
			setActive(window.scrollY > 20);
			// Check which section is in view and update active state accordingly
			const sections = document.querySelectorAll('section');
			sections.forEach((section) => {
				const top = section.offsetTop;
				const height = section.offsetHeight;
				if (window.scrollY >= top && window.scrollY < top + height) {
					const id = section.getAttribute('id');
					setActiveHash(String('#' + id));
				}
			});
		};
		window.addEventListener('scroll', scrollActive);
		return () => window.removeEventListener('scroll', scrollActive);
	}, []);

	return (
		<div
			className={`${
				active ? 'shadow-lg bg-primary ' : 'bg-[#01010199]'
			} fixed  w-full h-16 top-0 left-0 z-50`}>
			<div className="font-[MYRIAD-LIGHT]">
				<div
					className={`${
						active ? ' h-16 transition-all duration-300' : ' h-16'
					}  font-[MYRIAD-REGULAR] max-w-[1440px] mx-auto py-4 flex items-center justify-between px-7`}>
					<motion.div
						whileTap={{ scale: 0.97 }}
						className="flex items-center gap-4">
						<Icon
							className="text-xl lg:hidden cursor-pointer"
							icon="line-md:close-to-menu-alt-transition"
							onClick={() => setToggle(true)}
						/>
						<div className="cursor-pointer" onClick={home}>
							<img src={'/logo.webp'} alt="" className="w-20" />
						</div>
					</motion.div>
					<div className="md:flex items-center text-[1.05rem]  hidden">
						<div className="flex gap-6">
							{NavLinks.map((navLink, index) => (
								<ScrollIntoView
									key={index}
									onClick={() => setActiveHash(navLink.link)}
									selector={navLink.link}
									className="relative">
									<li className="list-none cursor-pointer transition-all hover:scale-105 duration-300">
										{navLink.title}
									</li>
									<span
										className={`${
											activeHash === navLink.link
												? 'w-[80%] bg-gray-200 -translate-x-1/2 left-1/2 h-[3px] bottom-0 absolute transition-all duration-200 rounded-full'
												: 'w-0'
										}`}></span>
								</ScrollIntoView>
							))}
						</div>
					</div>

					{/* SOCIAL MEDIA LINKS */}
					{/* <div className="flex gap-2 text-xl md:text-3xl">
						<a href="" target="_blank" className="hover:opacity-80">
							<Icon icon="iconoir:instagram" />
						</a>
						<a href="" target="_blank" className="hover:opacity-80">
							<Icon icon="ant-design:facebook-outlined" />
						</a>
					</div> */}
					<button onClick={() => navigate('/login')}>Login</button>

					<AnimatePresence>
						{toggle && (
							<motion.div
								initial={{ x: -500, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: -500 }}
								transition={{ duration: 0.3 }}
								className="fixed h-screen w-full  md:hidden bg-primary top-0 left-0 z-20 bg-Teal  flex flex-col justify-center items-center shadow-lg gap-8 py-8">
								{NavLinks.map((navLink, index) => {
									return (
										<ScrollIntoView
											className="relative"
											onClick={() => {
												setToggle((prev) => !prev);
												setActiveHash(navLink.link);
											}}
											key={index}
											selector={navLink.link}>
											<li className="list-none cursor-pointer transition-all hover:scale-105 duration-300">
												{navLink.title}
											</li>
											<span
												className={`${
													activeHash === navLink.link
														? 'w-[80%] bg-gray-200 -translate-x-1/2 left-1/2 h-[3px] bottom-0 absolute transition-all duration-200 rounded-full'
														: 'w-0'
												}`}></span>
										</ScrollIntoView>
									);
								})}

								<Icon
									icon="line-md:menu-to-close-alt-transition"
									className="absolute right-4 top-6 text-xl cursor-pointer"
									onClick={(prev) => setToggle(!prev)}
								/>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

const NavLinks = [
	{
		title: 'Home',
		link: '#home',
	},
	{
		title: 'About',
		link: '#about',
	},
	{
		title: 'FAQ',
		link: '#faqs',
	},
];

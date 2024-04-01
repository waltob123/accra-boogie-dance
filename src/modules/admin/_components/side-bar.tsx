import { Icon } from '@iconify-icon/react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SideBarMenu = () => {
	const { pathname } = useLocation();

	return (
		<section className="flex w-full py-6">
			<div className="flex-1 flex flex-col items-center ">
				<Link
					to={'/dashboard/auditions'}
					className="hover:scale-[1.01] mt-2 duration-150">
					<img src="/text.svg" alt="" className="w-40 mt-5" />
				</Link>

				{/* USER */}
				<div className="my-14 flex flex-col justify-center items-center">
					<div className="w-[76px] h-[76px] border-[2.5px] border-white rounded-full bg-red-200"></div>
					<h1 className="font-semibold text-xl mt-3">Jane Doe</h1>
					<p className="font-light">Admin</p>
				</div>

				<div className="flex flex-col gap-3 ">
					{menuItems.map((menu, index) => {
						const isActive = pathname.startsWith(menu.pathname);

						return (
							<React.Fragment key={index}>
								<Link
									to={menu.pathname}
									className={`text-[#272727] ${
										isActive
											? 'bg-red-300 py-1 rounded-md shadow'
											: 'font-light hover:opacity-80'
									} px-9`}>
									<h1>{menu.name}</h1>
								</Link>
							</React.Fragment>
						);
					})}
				</div>

				<button className="mt-auto hover:opacity-80 flex items-center gap-1">
					<h1>Logout</h1>
					<Icon icon="solar:download-outline" size={23} rotate={3} />
				</button>
			</div>

			<div className="h-full w-[1px] bg-[#C9C7C7] rounded-full" />
		</section>
	);
};

export default SideBarMenu;

const menuItems = [
	{
		name: 'Auditions',
		pathname: '/dashboard/auditions',
	},
];

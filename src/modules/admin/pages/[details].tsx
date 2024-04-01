/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import { useLocation, useNavigate } from 'react-router-dom';

interface Data {
	[key: string]: any;
}

const DetailsPage = () => {
	const { state } = useLocation();
	const navigate = useNavigate();

	return (
		<div>
			<div className="space-y-2">
				<button
					onClick={() => navigate(-1)}
					className="flex items-center text-red-500 font-medium gap-x-1">
					<Icon icon="eva:arrow-back-outline" className="text-lg" />
					Back
				</button>
				<h2 className="text-2xl">Auditions</h2>
				<div className="flex items-center text-sm gap-x-2">
					<Icon icon="material-symbols:receipt-long" className="text-red-500" />
					{state.id}
				</div>
			</div>

			<div className=" w-full max-w-8xl mx-auto mt-12">
				<div className="flex gap-2 ">
					<button
						className={`border-x border-t-2  rounded-t-lg rounded-tr-[25px] px-6 py-1.5 border-red-400  bg-gradient-to-b from-[#f4333333] to-[#F4B23303]`}>
						{state.team}
					</button>
				</div>

				<div className="w-full md:p-5 rounded-lg rounded-tl-none flex flex-col shadow-lg bg-black/50 bg-clip-padding backdrop-filter backdrop-blur-[1px] bg-opacity-0 ">
					<div className="space-y-1">
						<h2 className="uppercase">Video Link</h2>
						<p className="opacity-70 text-sm">{state.videoLink} </p>
					</div>

					<h3 className="w-full border-b-[0.5px] mt-5">Auditionee Details</h3>
					<div className="w-full grid grid-cols-3 gap-6 p-3 ">
						{Object.entries(state as Data).map(([key, value]) => {
							if (!['videoLink', 'id']?.includes(key)) {
								const isValueEmpty =
									value === null || value === '' || value?.length === 0;

								if (isValueEmpty) return null;

								return (
									<ul key={key} className="flex flex-col gap-y-1">
										<li className="font-semibold uppercase ">
											{formatKey(key)}
										</li>
										<li className="text-sm whitespace-wrap opacity-80">
											{String(value).replace('_', ' ')}
										</li>
									</ul>
								);
							}
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailsPage;

function formatKey(key: string) {
	const words = key.split(/(?=[A-Z])|_/);
	const formattedKey = words
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');

	return formattedKey;
}

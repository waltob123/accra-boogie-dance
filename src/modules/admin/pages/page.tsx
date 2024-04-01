/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import { Pagination, Spinner } from '@nextui-org/react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
	const isActie = true;
	const isLoading = false;

	const navigate = useNavigate();

	return (
		<div>
			<h2 className="text-2xl">Auditions</h2>

			<div className=" w-full max-w-8xl mx-auto mt-16">
				<div className="flex gap-2 ">
					<button
						className={`border-x border-t-2 ${
							isActie
								? 'border-red-400  bg-gradient-to-b from-[#f4333333] to-[#F4B23303]'
								: 'font-light'
						} rounded-t-lg rounded-tr-[25px] px-6 py-1.5`}>
						New Submissions
					</button>
				</div>

				<div className="w-full md:p-5 rounded-lg rounded-tl-none h-[600px] flex flex-col shadow-lg bg-black/50 bg-clip-padding backdrop-filter backdrop-blur-[1px] bg-opacity-0 ">
					<table className="w-full">
						<thead className="rounded-md shadow-[rgba(556,_17,_26,_0.2)_0px_0px_16px] text-left uppercase text-xs  text-gray-400 font-light">
							<tr>
								<th className="py-[12px] pl-2">id</th>
								<th>Stage/team name</th>
								<th>Contact name</th>
								<th>Email address</th>
								<th>Phone number</th>
								<th>Category</th>
								<th>Created Date</th>
								<th className="w-[10ch]">Action</th>
							</tr>
						</thead>
						<tbody className="text-[15px] ">
							{isLoading ? (
								<tr>
									<td colSpan={7} className="text-center ">
										<Spinner color="current" className="mt-10" />
										<p className="text-center">Loading...</p>
									</td>
								</tr>
							) : (
								<>
									{Array.from(data ?? []).length > 0 ? (
										<>
											{Array.from(data).map((item: any, index) => (
												<tr
													className="border-b-[0.3px] border-gray-50/30"
													key={index}>
													<td className="pl-2">{item.id}</td>
													<td className="py-2.5">{item.team}</td>
													<td>{item?.contactName}</td>
													<td>{item.emailAddress}</td>
													<td>{item.phoneNumber}</td>
													<td>{item.category}</td>
													<td>
														{format(
															new Date(item?.date),
															'dd/MM/yyyy, hh:mm a',
														)}
													</td>
													<td>
														<button>
															<Icon
																onClick={() => {
																	navigate(`${item.id}`, {
																		state: item,
																	});
																}}
																icon="codicon:open-preview"
																size={20}
																className="hover:bg-gray-50/20 p-1.5 rounded-md h-fit w-fit"
															/>
														</button>
													</td>
												</tr>
											))}
										</>
									) : (
										<tr>
											<td colSpan={7} className="text-center pt-10">
												No data found
											</td>
										</tr>
									)}
								</>
							)}
						</tbody>
					</table>

					<Pagination
						showControls
						total={10}
						color="danger"
						className="mt-auto ml-auto"
						initialPage={1}
					/>
				</div>
			</div>
		</div>
	);
};

export default AdminPage;

const data = [
	{
		id: 'ABK-001',
		team: 'Powers',
		contactName: 'John Doe',
		emailAddress: 'doej@example.com',
		phoneNumber: '000 000 0000',
		category: 'Individual',
		videoLink: 'youtube.com/jlkfk;djufhn',
		date: '2022-12-12',
		area: 'Kasoa',
		briefDescription:
			'bkjdnfldfjpsh bfkshdsfkb vlsodhflsh fljkslfhdo hofhjsl nfjkbsk bvkvbjkblb my worlfd I am sorry fjfg nsufv vnv vcjjvd dvjd',
	},
	{
		id: 'ABK-002',
		team: 'Spiders',
		contactName: 'John Doe',
		emailAddress: 'johndoej@example.com',
		phoneNumber: '000 000 0000',
		category: 'Group',
		videoLink: 'youtube.com/jlkfdjbdhhdhn',
		date: '2022-01-22',
		area: 'East Legon',
		briefDescription:
			'bkjdnfldfjpshbfkshdsfkbvlsodhflshfljkslfhdoshofhjslnfjkbskbvkvbjkblb ',
	},
];

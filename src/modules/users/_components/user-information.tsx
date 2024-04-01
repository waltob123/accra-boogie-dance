/* eslint-disable no-mixed-spaces-and-tabs */
import { Form, FormField } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
	CustomRadixInput,
	CustomRadixSelect,
} from '@/components/shared/custom-component';
import { countryOptions } from '@/utils/constant';
import { primaryContactSchema } from '@/utils/schema';
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';

interface GroupedFields {
	[key: string]: {
		placeholder: string;
		name: string;
		type: string;
		options?: string[];
		identifier: string;
		subText?: string;
	}[];
}

const UserInformation = () => {
	const form = useForm<z.infer<typeof primaryContactSchema>>({
		resolver: zodResolver(primaryContactSchema),
		defaultValues: {
			category: 'Individual',
		},
	});

	form.watch();

	function onSubmit(data: z.infer<typeof primaryContactSchema>) {
		console.log(data);
	}

	const groupedFields: GroupedFields = formDetails(
		form.watch('category'),
	).reduce((acc: GroupedFields, curr) => {
		if (!acc[curr.identifier]) {
			acc[curr.identifier] = [];
		}
		acc[curr.identifier].push(curr);
		return acc;
	}, {});

	return (
		<div className="md:p-3 p-3 ">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="w-full ">
					<div className="md:grid grid-cols-2 gap-x-3 space-y-3 md:space-y-0">
						{Object.entries(groupedFields).map(
							([identifier, fields], index) => {
								return (
									<div
										key={index}
										className={`${
											index !== 1 &&
											'md:border-r border-b md:border-b-0 pb-3 md:pb-0 border-dotted md:pr-3'
										}`}>
										<h2 className="text-sm mb-2">{identifier}</h2>
										<div className="md:grid grid-cols-2 gap-4 space-y-3 md:space-y-0">
											{fields.map((item, index) => {
												const name = item.name as keyof z.infer<
													typeof primaryContactSchema
												>;
												return (
													<div
														key={index}
														className={
															['area', 'city', 'country', 'postCode'].includes(
																name,
															)
																? 'col-span-1'
																: 'col-span-2'
														}>
														{item.type === 'select' ? (
															<FormField
																control={form.control}
																name={name}
																render={({ field }) => (
																	<CustomRadixSelect
																		onValueChange={field.onChange}
																		defaultValue={field.value as string}
																		placeholder={item.placeholder}
																		options={item.options as string[]}
																	/>
																)}
															/>
														) : (
															<>
																<FormField
																	control={form.control}
																	name={name}
																	render={({ field }) => (
																		<CustomRadixInput
																			placeholder={item.placeholder}
																			field={field}
																			type={item.type}
																			subText={item.subText}
																		/>
																	)}
																/>
															</>
														)}
													</div>
												);
											})}
										</div>

										{identifier === 'Audition Details' && (
											<Button
												className="ml-auto w-full flex md:w-[200px] mt-5"
												variant={'destructive'}>
												Submit
											</Button>
										)}
										{identifier === 'Primary Contact' && (
											<div className="mt-1">
												{form.getValues('category') === 'Individual' && (
													<p className="col-span-2 text-xs text-red-500 flex items-center gap-1">
														<Icon className="text-lg" icon="ph:info-duotone" />
														Compete as a soloist for the Boogie King Title
													</p>
												)}

												{form.getValues('category') === 'Group' && (
													<p className="col-span-2 text-xs text-red-500 flex items-center gap-1">
														<Icon className="text-lg" icon="ph:info-duotone" />
														Minimum number for a group is 12 people
													</p>
												)}
											</div>
										)}
									</div>
								);
							},
						)}
					</div>
				</form>
			</Form>
		</div>
	);
};

export default UserInformation;

const formDetails = (selectedCategory: string) => [
	{
		placeholder: 'Full Name',
		type: 'text',
		name: 'fullName',
		identifier: 'Primary Contact',
	},
	{
		placeholder: 'Phone Number',
		type: 'number',
		name: 'phoneNumber',
		identifier: 'Primary Contact',
	},
	{
		placeholder: 'Email',
		type: 'text',
		name: 'email',
		identifier: 'Primary Contact',
	},
	{
		placeholder: 'Area',
		type: 'text',
		name: 'area',
		identifier: 'Primary Contact',
	},
	{
		placeholder: 'City',
		type: 'text',
		name: 'city',
		identifier: 'Primary Contact',
	},
	{
		placeholder: 'Country',
		type: 'select',
		name: 'country',
		options: countryOptions,
		identifier: 'Primary Contact',
	},
	{
		placeholder: 'Post Code',
		type: 'text',
		name: 'postCode',
		identifier: 'Primary Contact',
	},
	{
		placeholder: 'Category',
		type: 'select',
		name: 'category',
		options: ['Individual', 'Group'],
		identifier: 'Primary Contact',
	},
	...(selectedCategory === 'Group'
		? [
				{
					placeholder: 'Team Name',
					type: 'text',
					name: 'name',
					identifier: 'Audition Details',
				},
				{
					placeholder: 'Age Range',
					type: 'number',
					name: 'age',
					identifier: 'Audition Details',
				},
				{
					placeholder: 'Group Number',
					type: 'number',
					name: 'groupNumber',
					identifier: 'Audition Details',
				},
		  ]
		: [
				{
					placeholder: 'Stage Name',
					type: 'text',
					name: 'name',
					identifier: 'Audition Details',
				},
				{
					placeholder: 'Age',
					type: 'number',
					name: 'age',
					identifier: 'Audition Details',
				},
		  ]),

	{
		placeholder: 'Video Link',
		type: 'text',
		name: 'videoLink',
		identifier: 'Audition Details',
		subText: 'Add either a youtube or google drive link of your Audition video',
	},
	{
		placeholder: 'Brief Description',
		type: 'text',
		name: 'briefDescription',
		identifier: 'Audition Details',
	},
];

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from '@iconify-icon/react';
import { cn } from '@nextui-org/react';
import React, { FC, RefCallback } from 'react';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

interface CustomSelectFieldProps {
	label?: string;
	placeholder?: string;
	error?: string;
	labelPlacement?: 'outside' | 'outside-left' | 'inside';
	className?: string;
	value?: string;
	options: Array<{ label: string; value: any } | string>;
	required?: boolean;
	selectionMode?: 'single' | 'multiple';
	inputProps?: {
		onChange?: (e: string) => void;
		onBlur?: (e: any) => unknown;
		ref?: RefCallback<HTMLSelectElement>;
		name?: string;
		required?: boolean;
		disabled?: boolean;
		isDisabled?: boolean;
		selectedKeys?: Array<any>;
	};
	isLoading?: boolean;
}

export const CustomSelectField: FC<CustomSelectFieldProps> = ({
	label = '',
	options,
	error,
	inputProps,
	value,
	placeholder,
	className,
	required = false,
	isLoading = false,
}) => {
	console.log({ value });
	return (
		<div>
			<div className="relative flex flex-col">
				<Select value={value} {...(inputProps ?? {})}>
					<SelectTrigger>
						<SelectValue
							placeholder={required ? `${placeholder} *` : placeholder}
						/>
					</SelectTrigger>
					<SelectContent>
						{options?.map((option: any) => (
							<SelectItem key={option} value={option?.value || option}>
								{option?.value || option}
							</SelectItem>
						))}
					</SelectContent>
				</Select>

				{/* <Select
					variant={'faded'}
					size="md"
					aria-label="*"
					value={value}
					label={required ? `${label} *` : label}
					placeholder={placeholder}
					labelPlacement={labelPlacement}
					selectionMode={selectionMode}
					selectedKeys={value ? [value] : []}
					radius="sm"
					isLoading={isLoading}
					{...(inputProps ?? {})}
					classNames={{
						trigger: cn(
							`data-[hover=true]:shadow-none shadow-none  bg-transparent dark:bg-[#252525] text-xs h-11`,
							className,
						),
						label: 'dark:text-gray-300 focus:text-gray-300 text-xs uppercase',
						popoverContent: 'rounded-md',
					}}>
					{options?.map((option: any) => (
						<SelectItem
							classNames={{
								base: 'rounded-md',
							}}
							key={option?.value || option}
							value={option?.value || option}>
							{option?.label || option}
						</SelectItem>
					))}
				</Select> */}
			</div>

			<span className="text-red-400 text-xs">{error}</span>
		</div>
	);
};

// CUSTOM INPUT
interface CustomInputTextFieldProps {
	type?: 'text' | 'number' | 'date' | 'password' | 'email';
	onChange?: (e: any) => unknown;
	placeholder?: string;
	error?: string;
	height?: string;
	value?: string;
	labelPlacement?: 'outside' | 'outside-left' | 'inside';
	label?: string;
	isLoading?: boolean;
	disabled?: boolean;
	className?: string;
	inputProps?: {
		onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
		onBlur?: (e: any) => unknown;
		ref?: RefCallback<HTMLInputElement>;
		name?: string;
		min?: string | number;
		max?: string | number;
		maxLength?: number;
		minLength?: number;
		pattern?: string;
		required?: boolean;
		disabled?: boolean;
	} & Record<string, any>;
	startContent?: React.ReactNode;
	isClearabe?: boolean;
	onClear?: () => void;
}

export const CustomInputTextField = (props: CustomInputTextFieldProps) => {
	const {
		type = 'text',
		label,
		placeholder,
		inputProps,
		error,
		isLoading = false,
		disabled,
		value,
		height = 'min-h-[40px]',
		className,
	} = props;

	return (
		<div>
			<div className="relative">
				{isLoading && (
					<Icon
						icon="eos-icons:loading"
						className={` absolute z-10 top-1/2 -translate-y-1/2 right-0 bottom-6 text-[25px] mr-2 mb-1`}
					/>
				)}

				<div className="flex flex-col w-full relative">
					<label
						id={inputProps?.name}
						className="text-xs uppercase text-black/50">
						{label}
					</label>
					<input
						type={type}
						disabled={disabled}
						placeholder={
							inputProps?.required ? `${placeholder} *` : placeholder
						}
						{...(inputProps ?? {})}
						value={value}
						className={cn(
							'border-b border-[#578BC8] outline-none focus:border-b bg-transparent rounded-md px-2 text-sm placeholder:text-[#929292]',
							className,
							height,
						)}
					/>
				</div>
			</div>

			<span className="text-red-400 text-xs">{error}</span>
		</div>
	);
};

interface CustomTextareaFieldProps {
	error?: string;
	placeholder: string;
	label?: string;
	inputProps?: {
		onChange?: (e: any) => unknown;
		onBlur?: (e: any) => unknown;
		ref?: RefCallback<HTMLTextAreaElement>;
		name?: string;
		value?: string;
		min?: string | number;
		max?: string | number;
		maxLength?: number;
		minLength?: number;
		pattern?: string;
		required?: boolean;
		disabled?: boolean;
	};
}

export const CustomTextareaField = ({
	placeholder,
	error,
	inputProps,
	label,
}: CustomTextareaFieldProps) => {
	return (
		<div className="flex flex-col w-full">
			<label className="px-1 text-black/80 dark:text-gray-300 text-sm uppercase">
				{label}
			</label>
			<div className="w-full border flex flex-col rounded-md text-sm justify-center">
				<textarea
					className="bg-transparent h-[100px] w-full px-2 py-1 outline-none focus:border-none"
					{...(inputProps ?? {})}
					placeholder={placeholder}></textarea>
			</div>
			{error ? <span className="text-red-400 text-xs">{error}</span> : null}
		</div>
	);
};

import React from 'react';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { FormItem, FormControl, FormMessage, FormLabel } from '../ui/form';
import { Input, InputProps } from '../ui/input';
import { Icon } from '@iconify-icon/react';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';

interface CustomSelectProps {
	label?: string;
	onValueChange: (value: string) => void;
	defaultValue: string;
	placeholder: string;
	options: string[];
}

export const CustomRadixSelect: React.FC<CustomSelectProps> = ({
	onValueChange,
	defaultValue,
	placeholder,
	options,
	label,
}) => (
	<div>
		<FormItem>
			<FormLabel>{label}</FormLabel>
			<FormControl>
				<Select onValueChange={onValueChange} defaultValue={defaultValue}>
					<SelectTrigger>
						<SelectValue placeholder={placeholder} />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							{options.map((option) => (
								<SelectItem key={option} value={option}>
									{option}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			</FormControl>
		</FormItem>
		<FormMessage />
	</div>
);

interface CustomInputProps {
	label?: string;
	placeholder: string;
	field: {
		value: string | (readonly string[] & string) | undefined;
		onChange: (value: string | number) => void;
	};
	subText?: string;
}

export const CustomRadixInput: React.FC<CustomInputProps & InputProps> = ({
	placeholder,
	field,
	subText,
	label,
	...inputProps
}) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		field.onChange(event.target.value);
	};

	return (
		<div>
			<FormItem>
				<FormLabel>{label}</FormLabel>
				<FormControl>
					<div className="relative">
						<Input
							placeholder={placeholder}
							{...inputProps}
							value={field.value}
							onChange={handleChange}
						/>
						{subText && (
							<>
								<TooltipProvider delayDuration={0}>
									<Tooltip>
										<TooltipTrigger className="absolute right-2 top-1/2 -translate-y-1/2">
											<Icon icon="ph:info-bold" />
										</TooltipTrigger>
										<TooltipContent className="w-[250px] bg-black text-white">
											<p>{subText}</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							</>
						)}
					</div>
				</FormControl>
			</FormItem>
			<FormMessage />
		</div>
	);
};

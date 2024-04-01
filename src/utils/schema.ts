import { z } from 'zod';

export const primaryContactSchema = z.object({
	fullName: z.string(),
	phoneNumber: z
		.string()
		.refine(
			(value) => /^[0-9]{10}$/.test(value),
			'Phone number must be a 10-digit',
		),
	email: z.string().email('Invalid email address'),
	area: z.string(),
	city: z.string(),
	country: z.string(),
	postCode: z.string(),
	category: z.string(),
	name: z.string(),
	age: z.string(),
	groupNumber: z.string().optional(),
	videoLink: z.string(),
	briefDescription: z.string(),
});

export const auditionDetailschema = z.object({
	teamName: z.string(),
	ageRange: z.string(),
	groupNumber: z.string(),
	videoLink: z.string(),
	briefDescription: z.string(),
});

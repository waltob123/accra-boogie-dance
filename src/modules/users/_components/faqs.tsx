import CustomFAQs from '@/components/shared/custom-faq';

const FrequentlyAskedQuestions = () => {
	return (
		<section
			id="faqs"
			className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto mt-5 px-3">
			<h1 className="text-3xl">Frequently Asked Questions</h1>

			<div className="w-full p-4 md:p-8 my-10 rounded-3xl shadow-lg bg-black/50 bg-clip-padding  backdrop-filter backdrop-blur-[1px] bg-opacity-0  space-y-3 md:space-y-0">
				<div className="max-w-4xl mx-auto">
					<CustomFAQs options={faqQuestion} />
				</div>
			</div>
		</section>
	);
};

export default FrequentlyAskedQuestions;

const faqQuestion = [
	{
		header: 'Where is Accra Boogie King being held?',
		desc: ['First Love Center'],
	},
	{
		header: 'When is ABK 2024?',
		desc: ['28th July 2024'],
	},
	{
		header: 'What edition is ABK 2024?',
		desc: ['The 6th Edition'],
	},
	{
		header: 'How can I participate?',
		desc: ['Register for audition'],
	},
	{
		header: 'How can I attend?',
		desc: ['Free Entry'],
	},
];

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
		header:
			'Have you received the video I sent? When can I expect to receive feedback on it?',
		desc: [
			'Because of the high volume of submissions, we regret to inform you that we are unable to confirm receipt of individual videos submitted to the program. However, please be assured that each video received will be reviewed. If you are selected to participate in the program, a representative will contact you to arrange your appearance for the next round of the competition. Typically, this communication will occur approximately three days after the closing of auditions.',
		],
	},
	{
		header: 'Can I use the same video from last year?',
		desc: [
			'You need to resubmit your video each season to be eligible for consideration on the show.',
		],
	},
	{
		header: 'I keep having issues whilst trying to upload my video.',
		desc: [
			'Please note that video uploads are restricted to 50MB per video. Prior to uploading, kindly ensure that the file size meets this requirement. Accepted formats include popular video formats such as MP4, MOV, or AVI. Please verify that your videos are saved in one of these compatible formats.',
			'While any browser should suffice for uploading, in case you encounter any browser-related challenges, we recommend utilizing Google Chrome for optimal performance.',
		],
	},
];

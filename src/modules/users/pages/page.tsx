import About from '../_components/about';
import FrequentlyAskedQuestions from '../_components/faqs';
import HeroComponent from '../_components/hero';
import Navbar from '@/components/shared/navbar';

const UsersPage = () => {
	return (
		<div>
			<Navbar />
			<HeroComponent />
			<About />
			<FrequentlyAskedQuestions />
		</div>
	);
};

export default UsersPage;

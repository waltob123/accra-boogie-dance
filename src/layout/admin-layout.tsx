import SideBarMenu from '@/modules/admin/_components/side-bar';
import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
	return (
		<motion.div
			initial={{ opacity: 0.3 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0.2 }}
			transition={{ ease: 'easeIn', duration: 0.15 }}
			className="grid grid-cols-[17%,1fr]">
			<SideBarMenu />
			<div className="overflow-auto scrollbar-gray-medium h-screen">
				<div className="p-4">
					<Outlet />
				</div>
			</div>
		</motion.div>
	);
};

export default AdminLayout;

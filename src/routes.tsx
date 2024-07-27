import { Route, Routes } from 'react-router-dom';
import UsersPage from './modules/users/pages/page';
import LoginPage from './modules/authentication/login';
import AdminPage from './modules/admin/pages/page';
import AdminLayout from './layout/admin-layout';
import DetailsPage from './modules/admin/pages/[details]';
import VotePage from './modules/users/pages/vote_page';

export const ABKRoutes = (
	<>
		<Routes>
			<Route path="/" element={<UsersPage />} />
			<Route path="/vote" element={<VotePage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/dashboard/auditions" element={<AdminLayout />}>
				<Route index element={<AdminPage />} />
				<Route path=":id" element={<DetailsPage />} />
			</Route>
		</Routes>
	</>
);

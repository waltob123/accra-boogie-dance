import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
	const navigate = useNavigate();
	const [formState, setFormState] = useState({
		email: '',
		password: '',
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(formState);
		navigate('/dashboard/auditions');
	};

	return (
		<div className="flex flex-col gap-8 mt-10 items-center md:p-12 p-6">
			<img src="/text.svg" alt="" className="w-52 mt-5" />

			<h1 className="text-[24px] items-center font-semibold">Login</h1>

			<div className="flex flex-col items-center justify-center w-full max-w-md mx-auto">
				<div className="w-full md:p-4 p-3 rounded-3xl shadow-lg bg-black/50 bg-clip-padding backdrop-filter backdrop-blur-[1px] bg-opacity-0 ">
					<form
						onSubmit={handleSubmit}
						className="w-full flex flex-col gap-y-4">
						<div>
							<label htmlFor="email">Email Address</label>
							<Input
								id="email"
								name="email"
								type="email"
								placeholder="johndoe@gmail.com"
								value={formState.email}
								onChange={(e) =>
									setFormState({
										...formState,
										email: e.target.value,
									})
								}
							/>
						</div>
						<div>
							<label htmlFor="password">Password</label>
							<Input
								id="password"
								name="password"
								placeholder="1234556"
								value={formState.password}
								onChange={(e) =>
									setFormState({
										...formState,
										password: e.target.value,
									})
								}
							/>
						</div>

						<Button variant={'destructive'}>Login</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;

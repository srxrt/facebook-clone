import Image from 'next/image';
import { signIn } from 'next-auth/client';
const Login = () => {
	return (
		<div className='grid place-items-center mt-5'>
			<Image
				src='https://links.papareact.com/5me'
				height={400}
				width={400}
				objectFit='contain'
			/>
			<h1
				onClick={signIn}
				className='p-5 mt-10 bg-blue-500 rounded-full text-white text-center cursor-pointer'
			>
				Login with Facebook
			</h1>
		</div>
	);
};

export default Login;

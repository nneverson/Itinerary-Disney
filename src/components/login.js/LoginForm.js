import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions';
import FormSuccess from './FormSucess';

function LoginForm({ Login, error }) {
	const [details, setDetails] = useState({
		UserName: '',
		email: '',
		password: '',
	});
	const dispatch = useDispatch();
	const { isLogin } = useSelector((s) => s);
	const submitHandler = (e) => {
		e.preventDefault();
		if (
			details.UserName === 'admin' &&
			details.email === 'admin@admin.com' &&
			details.password === '123'
		) {
			dispatch(login());
		}
	};

	return (
		<form onSubmit={submitHandler}>
			<div className='form-inner'>
				{isLogin ? <FormSuccess /> : 'not logged in'}
				<h2>Login</h2>
				{error !== '' ? (
					<div className='error' style={{ color: 'red' }}>
						{' '}
						{error}
					</div>
				) : (
					''
				)}
				<div className='form-group'>
					<label htmlFor='name'>Name:</label>
					<input
						type='text'
						name='name'
						id='name'
						onChange={(e) => setDetails({ ...details, UserName: e.target.value })}
						value={details.name}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='email'>Email:</label>
					<input
						type='email'
						name='email'
						id='email'
						onChange={(e) => setDetails({ ...details, email: e.target.value })}
						value={details.email}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='password'>Password:</label>
					<input
						type='password'
						name='password'
						id='password'
						onChange={(e) =>
							setDetails({ ...details, password: e.target.value })
						}
						value={details.password}
					/>
				</div>
				<input type='submit' value='LOGIN' />
			</div>
		</form>
	);
}

export default LoginForm;

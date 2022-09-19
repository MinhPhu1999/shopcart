import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { toast } from 'react-toastify';

import LoadingBackdrop from 'components/LoadingBackdrop/LoadingBackdrop';
import MessageBox from 'components/MessageBox/MessageBox';

import { detailUser, updateUserProfile } from 'redux/actions/userActions';
import { USER_UPDATE_PROFILE_RESET } from 'redux/constants/userConstants';

import './Profile.css';

function Profile(props) {
	const dispatch = useDispatch();

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');

	const userLogin = useSelector(state => state.userLogin);
	const { userInfo } = userLogin;

	const { loading, user } = useSelector(state => state.userDetails);

	const userUpdateProfile = useSelector(state => state.userUpdateProfile);
	const { error: errorUpdate, success } = userUpdateProfile;

	const submitHandler = e => {
		e.preventDefault();

		dispatch(
			updateUserProfile(email, firstName, lastName, userInfo?.user?._id),
		);
	};

	const handleChangeEmail = e => {
		setEmail(e.target.value);
	};

	const handleChangeFirstName = e => {
		setFirstName(e.target.value);
	};

	const handleChangeLastName = e => {
		setLastName(e.target.value);
	};

	useEffect(() => {
		if (isEmpty(user)) {
			dispatch({ type: USER_UPDATE_PROFILE_RESET });
			dispatch(detailUser(userInfo?.user?._id));
		} else {
			setEmail(user?.email);
			setFirstName(user?.firstName);
			setLastName(user?.lastName);
		}
	}, [dispatch, userInfo?.user?._id, user]);

	useEffect(() => {
		if (success) {
			toast.success('Update Info Success');
		}
		if (errorUpdate) {
			toast.error('Update Info Failure');
		}

		return () => {
			//
		};
	}, [userInfo]);

	if (loading) {
		return (
			<>
				<LoadingBackdrop open={loading} />
				<div style={{ height: '350px' }}></div>
			</>
		);
	}

	return (
		<div>
			<form className="form-profile" onSubmit={submitHandler}>
				<div>
					<h1 className="title">User Profile</h1>
				</div>
				<>
					{errorUpdate && (
						<MessageBox variant="danger">{errorUpdate}</MessageBox>
					)}
					<div>
						<label htmlFor="name">First Name</label>
						<input
							id="name"
							type="text"
							placeholder="Enter name"
							minLength="4"
							maxLength="15"
							value={firstName}
							onChange={handleChangeFirstName}
						></input>
					</div>

					<div>
						<label htmlFor="name">Last Name</label>
						<input
							id="name"
							type="text"
							placeholder="Enter name"
							minLength="4"
							maxLength="15"
							value={lastName}
							onChange={handleChangeLastName}
						></input>
					</div>
					<div>
						<label htmlFor="email">Email</label>
						<input
							id="email"
							type="email"
							placeholder="Enter email"
							value={email}
							onChange={handleChangeEmail}
						></input>
					</div>
					<div>
						<label> </label>
						<button
							className="button primary update-profile"
							type="submit"
						>
							Update Info
						</button>
					</div>
				</>
			</form>
		</div>
	);
}

export default memo(Profile);

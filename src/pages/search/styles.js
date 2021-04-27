import styled from 'styled-components';

export const Form = styled.form`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin-bottom: 40px;

	& .simple-keyboard {
		max-width: 850px;
		font-size: 1.2rem;

		@media (max-width: 768px) {
			display: none;
		}
	}
`;

Form.Search = styled.div`
	display: flex;
	align-items: center;
`;

Form.Input = styled.input`
	width: 100%;
	max-width: 850px;
	height: 50px;
	border: 0;
	border-bottom: 2px solid ${({ theme }) => theme.colors.black};
	padding: 20px;
	font-size: 1.25rem;
	transition: all 0.3s ease-in-out;
	border-radius: 5px;
	background-color: ${({ theme }) => theme.colors.gray100};
	border-bottom-right-radius: 0;
	border-top-right-radius: 0;

	&:hover,
	&:focus {
		background-color: ${({ theme }) => theme.colors.purpleLight};
	}
`;

Form.Button = styled.button`
	display: block;
	align-items: center;
	justify-content: center;
	width: 80px;
	height: 50px;
	border: 0;
	border-bottom-right-radius: 5px;
	border-top-right-radius: 5px;
	background-color: ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.white};
	cursor: pointer;
	transition: all 0.3s linear;
	font-size: 0.875rem;

	&:hover,
	&:focus {
		opacity: 0.5;
	}
`;

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

Form.Input = styled.input`
	width: 100%;
	max-width: 850px;
	height: 50px;
	border: 0;
	border-bottom: 2px solid ${({ theme }) => theme.colors.black};
	padding: 20px;
	font-size: 1.25rem;
	transition: all 0.3s ease-in-out;

	&:hover,
	&:focus {
		background-color: ${({ theme }) => theme.colors.purpleLight};
	}
`;

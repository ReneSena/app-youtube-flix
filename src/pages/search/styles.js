import styled from 'styled-components';

export const Form = styled.form`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	& .simple-keyboard {
		max-width: 850px;
		font-size: 1.2rem;
	}
`;

Form.Input = styled.input`
	width: 850px;
	height: 60px;
	border: 0;
	border-bottom: 2px solid #222;
	padding: 20px;
	font-size: 20px;
	box-sizing: border-box;
`;

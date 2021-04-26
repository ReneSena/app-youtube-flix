import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	flex-direction: column;
	height: 100vh;
	flex: 1;
`;

export const Main = styled.main`
	margin: 100px 20px 40px 20px;
	width: calc(100% - 40px);

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

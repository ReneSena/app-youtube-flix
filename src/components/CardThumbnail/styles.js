import styled from 'styled-components';

export const CardContainer = styled.figure`
	max-width: 320px;
	display: inline-block;
	border-radius: 5px;
	color: ${({ theme }) => theme.colors.black};
	background-color: ${({ theme }) => theme.colors.purpleLight};
	box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
	position: relative;

	&::before {
		content: '▶';
		font-size: 40px;
		position: absolute;
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}

	&:hover::before,
	&:focus::before {
		opacity: 1;
	}
`;

CardContainer.List = styled.ul`
	display: grid;
	flex-direction: column;

	flex-wrap: wrap;
	grid-template-columns: 1fr;
	gap: 24px;

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
		gap: 24px;
	}

	@media (min-width: 1440px) {
		grid-template-columns: repeat(4, 1fr);
	}

	@media (min-width: 1650px) {
		grid-template-columns: repeat(5, 1fr);
	}
`;

CardContainer.Item = styled.li`
	list-style: none;
`;

CardContainer.Image = styled.img`
	border-radius: 5px;
	min-width: 320px;
`;

CardContainer.Legend = styled.figcaption`
	padding: 12px 16px;
	font-size: 0.75rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

CardContainer.Description = styled.p`
	margin-right: 10px;
	white-space: nowrap;
	max-width: 250px;
	display: inline-block;
	text-overflow: ellipsis;
	overflow: hidden;
`;

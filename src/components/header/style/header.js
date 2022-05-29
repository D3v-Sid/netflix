import styled from "styled-components/macro";

export const Container = styled.div`
	background-image: url("/images/misc/home-bg.jpg");
`;

export const Inner = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 1.5rem 3rem;
`;

export const Logo = styled.img`
	width: 134px;
	height: auto;
	@media (max-width: 1000px) {
		width: 88px;
	}
`;

export const Button = styled.button`
	border-radius: 2px;
	border: none;
	color: #fff;
	background-color: #e50914;
	box-shadow: 0 1px 0 rgb(0 0 0 / 45%);
	font-size: 16px;
	padding: 7px 17px;
	max-height: 30px;
	cursor: pointer;
	&:hover {
		background: #f40612;
	}
	&:active {
		background: #b4060f;
	}
	@media (max-width: 1000px) {
		height: 28px;
		font-size: 16px;
		padding: 4px 8px;
	}
`;

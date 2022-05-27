import styled from "styled-components/macro";

export const Container = styled.div`
	padding: 70px 45px;
	display: flex;
	flex-direction: column;
	color: #fff;
	justify-content: space-around;
	align-items: center;
	@media (max-width: 1000px) {
		padding: 70px 30px;
	}
`;

export const Inner = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	@media (max-width: 1000px) {
		flex-direction: column;
	}
`;

export const Input = styled.input`
	color: #8c8c8c;
	font-size: 14px;
	width: 100%;
	max-width: 450px;
	height: 60px;
	padding: 0.5rem;
	background: #fff;
	border-radius: 2px;
	border: 0;
	outline: none;
	@media (max-width: 1000px) {
		height: 40px;
	}
`;

export const Button = styled.button`
	border-radius: 2px;
	border: none;
	color: #fff;
	background-color: #e50914;
	box-shadow: 0 1px 0 rgb(0 0 0 / 45%);
	font-size: 1.625rem;
	padding: 0 26px;
	height: 60px;

	img {
		margin-left: 10px;
		filter: brightness(0) invert(1);
		width: 18px;
		@media (max-width: 1000px) {
			width: 12px;
		}
	}

	cursor: pointer;
	&:hover {
		background: #f40612;
	}
	&:active {
		background: #b4060f;
	}
	@media (max-width: 1000px) {
		height: 40px;
		font-size: 16px;
		padding: 0 16px;
		margin-top: 1rem;
	}
`;

export const Text = styled.p`
	text-align: center;
	font-size: 1.2rem;
	margin: 1rem;
	padding: 1rem 5rem;
	@media (max-width: 1000px) {
		padding: 1rem;
		font-size: 16px;
		line-height: 20px;
	} ;
`;

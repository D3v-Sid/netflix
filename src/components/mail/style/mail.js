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
	justify-content: center;
	@media (max-width: 1000px) {
		flex-direction: column;
	}
`;

export const Input = styled.input`
	color: #8c8c8c;
	padding: 10px;
	font-size: 14px;
	max-width: 450px;
	width: 100%;
	height: 60px;
	background: #fff;
	border-radius: 2px;
	border: none;
	@media (max-width: 1000px) {
		height: 40px;
	}
`;

export const Button = styled.button`
	margin: auto;
	border-radius: 2px;
	border: none;
	color: #fff;
	background-color: #e50914;
	box-shadow: 0 1px 0 rgb(0 0 0 / 45%);
	font-size: 1.625rem;
	padding: 0 26px;
	height: 60px;
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
	} ;
`;

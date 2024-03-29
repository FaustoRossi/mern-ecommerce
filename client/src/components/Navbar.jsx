import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
	height: 60px;
	${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;

const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
`;
const Input = styled.input`
	border: none;
	${mobile({ width: "50px" })}
`;

const Center = styled.div`
	flex: 1;
	text-align: center;
`;
const Logo = styled.h1`
	font-weight: bold;
	${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 25px;
	font-weight: 500;
	${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
	const quantity = useSelector((state) => state.cart.quantity);

	return (
		<Container>
			<Wrapper>
				<Left>
					<SearchContainer>
						<Input placeholder="search" />
						<Search style={{ color: "gray", fontSize: 16 }} />
					</SearchContainer>
				</Left>
				<Link to="/">
					<Center>
						<Logo>BRAND.</Logo>
					</Center>
				</Link>
				<Right>
					<MenuItem>REGISTER</MenuItem>
					<MenuItem>Sign In</MenuItem>
					<MenuItem>
						<Link to="/cart">
							<Badge badgeContent={quantity} color="primary">
								<ShoppingCartOutlined />
							</Badge>
						</Link>
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;

import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import Slider from "../components/Slider";


const Container = styled.div`
overflow: hidden`
const Home = () => {


	return (
		<Container >
			<Announcement />
			<Navbar />
			<Slider />
			<Categories/>
			<Products/>
			<NewsLetter/>
			<Footer/>
		</Container>
	);
};

export default Home;

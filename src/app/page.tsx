"use client";
import { Box, Divider, Flex } from "@chakra-ui/react";
import styles from "./page.module.css";
import { Header } from "./components/headers/headerMenu/Header";
import { EthereumPrice } from "./components/headers/ethPrice/EthereumPrice";
import { Search } from "./components/home/Search";
import BannerData from "./components/home/BannerData";
import LatestBlocks from "./components/home/LatestBlocks";
import LatestTransactions from "./components/home/LatestTransactions";
import Footer from "./components/footer/Footer";
import React, { useState, useEffect } from "react";
import { Spinner } from "@chakra-ui/react";

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(false);
	}, []);

	if (isLoading) {
		return (
			<Flex justify="center" align="center" height="100vh">
				<Spinner size="xl" />
			</Flex>
		);
	}
	return (
		<main className={styles.main}>
			<Box w={"100%"}>
				<EthereumPrice />
				<Divider orientation="horizontal" />
				<Header />
				<Search />
				<BannerData />
				<Flex
					direction={{ base: "column", md: "row" }}
					ml={{ base: 2, lg: 40 }}
					mr={{ base: 2, lg: 40 }}
				>
					<LatestBlocks />
					<LatestTransactions />
				</Flex>
				<Footer />
			</Box>
		</main>
	);
}

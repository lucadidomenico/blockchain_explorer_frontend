"use client";
import { Box, Flex } from "@chakra-ui/react";
import styles from "./page.module.css";
import { Search } from "./components/home/Search";
import BannerData from "./components/home/BannerData";
import LatestBlocks from "./components/home/LatestBlocks";
import LatestTransactions from "./components/home/LatestTransactions";
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
				<Search />
				<Box pl={{ base: 2, lg: 40 }} pr={{ base: 2, lg: 40 }}>
					<BannerData />
				</Box>
				<Flex
					direction={{ base: "column", md: "row" }}
					pl={{ base: 2, lg: 40 }}
					pr={{ base: 2, lg: 40 }}
				>
					<LatestBlocks />
					<LatestTransactions />
				</Flex>
			</Box>
		</main>
	);
}

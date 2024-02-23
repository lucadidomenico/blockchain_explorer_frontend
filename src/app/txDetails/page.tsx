"use client";
import { Box, Divider, Flex } from "@chakra-ui/react";
import styles from "@/app/page.module.css";
import { Header } from "@/app/components/headers/headerMenu/Header";
import { EthereumPrice } from "@/app/components/headers/ethPrice/EthereumPrice";
import Footer from "@/app/components/footer/Footer";
import React, { useState, useEffect } from "react";
import { Spinner } from "@chakra-ui/react";
import { TxDetailsPage } from "@/app/components/txDetails/txDetailsPage";

export default function Page() {
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
				<TxDetailsPage />
			</Box>
		</main>
	);
}

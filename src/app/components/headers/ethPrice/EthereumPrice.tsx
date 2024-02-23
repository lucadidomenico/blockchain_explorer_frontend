"use client";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useMediaQuery } from "@chakra-ui/react";

export const EthereumPrice = () => {
	const [price, setPrice] = useState<number>();
	const [isLargerThan64] = useMediaQuery("(min-width: 64em)");
	useEffect(() => {
		const fetchPrice = async () => {
			const res = await fetch("/api/ethprice/");
			const data: Price = await res.json();
			setPrice(data.usdPrice);
		};
		fetchPrice();
	}, []);
	return (
		<Flex
			position="fixed"
			top="0"
			left="0"
			right="0"
			w="full"
			zIndex="sticky"
			// py={2}
			pl={{ base: 2, lg: 40 }}
			pr={{ base: 2, lg: 40 }}
			justifyContent={"space-between"}
			bgColor="white"
			boxShadow="sm"
			height={{ base: "70px", md: "70px" }}
		>
			<Flex direction={{ base: "column", md: "row" }} align="center" py={2}>
				<Text color={"#6C757D"}>ETH Price: </Text>
				<Text
					as={"span"}
					color="#066A9C"
					fontWeight="bold"
					marginLeft={{ base: 0, md: 1 }}
				>
					{price ? `$${price}` : "Loading..."}
				</Text>
			</Flex>
			<Flex direction="row" align="center" gap={1}>
				<Input
					placeholder={
						isLargerThan64
							? "Search by Address or Transaction Hash"
							: "Address / Tx Hash"
					}
					w="auto"
					color="white"
					htmlSize={isLargerThan64 ? 50 : 15}
				/>
				<Button>
					<FaSearch />
				</Button>
			</Flex>
		</Flex>
	);
};

import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const EthereumPrice = () => {
	const [price, setPrice] = useState<number>();
	useEffect(() => {
		const fetchPrice = async () => {
			const res = await fetch("/api/ethprice/");
			const data: Price = await res.json();
			setPrice(data.usdPrice);
		};
		fetchPrice();
	}, []);
	return (
		<Flex w={"100%"} p={2}>
			ETH Price: ${price || "Loading..."}
		</Flex>
	);
};

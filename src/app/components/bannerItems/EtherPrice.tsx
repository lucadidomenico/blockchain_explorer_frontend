import { Box, Grid, Text } from "@chakra-ui/react";
import { FaEthereum } from "react-icons/fa";
import { useEffect, useState } from "react";

const EtherPrice = () => {
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
		<Grid
			templateRows="repeat(2, 1fr)"
			templateColumns="repeat(2, 1fr)"
			gap={1}
			h="20"
		>
			<Box
				gridColumnStart={1}
				gridColumnEnd={2}
				gridRowStart={1}
				gridRowEnd={3}
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				<FaEthereum size="2em" />
			</Box>
			<Text fontWeight="bold">ETH Price</Text>
			<Text>{price ? `$${price}` : "Loading..."}</Text>
		</Grid>
	);
};

export default EtherPrice;

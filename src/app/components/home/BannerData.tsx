"use client";
import {
	Grid,
	Box,
	useMediaQuery,
	Stack,
	Flex,
	Divider,
} from "@chakra-ui/react";
import EtherPrice from "../bannerItems/EtherPrice";
import MarketCap from "../bannerItems/MarketCap";
import Transactions from "../bannerItems/Transactions";
import LastBlock from "../bannerItems/LastBlock";
import AVGTransactionValue from "../bannerItems/AVGTransactionValue";

const BannerData = () => {
	const [isLargerThan48] = useMediaQuery("(min-width: 48em)");

	return isLargerThan48 ? (
		<Grid
			templateRows="repeat(2, 1fr)"
			templateColumns="repeat(3, 1fr)"
			gap={1}
			h="full"
			border="1px solid #E2E8F0"
			backgroundColor={"white"}
			mt={-4}
			ml={2}
			mr={2}
			pt={4}
			borderRadius="md"
		>
			<EtherPrice />
			<Transactions />
			<MarketCap />
			<LastBlock />
			<Box
				w="100%"
				h="full"
				gridColumnStart={3}
				gridColumnEnd={4}
				gridRowStart={1}
				gridRowEnd={3}
			>
				<AVGTransactionValue />
			</Box>
		</Grid>
	) : (
		<Flex
			direction={"column"}
			gap={2}
			justifyContent={"start"}
			border="1px solid #E2E8F0"
			backgroundColor={"white"}
			mt={-4}
			ml={2}
			mr={2}
			pt={4}
			borderRadius="md"
		>
			<EtherPrice />
			<Divider />
			<Transactions />
			<Divider />
			<MarketCap />
			<Divider />
			<LastBlock />
			<Divider />
			<AVGTransactionValue />
		</Flex>
	);
};

export default BannerData;

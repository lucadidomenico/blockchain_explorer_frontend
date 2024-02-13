import { Flex, Grid, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import { SiHiveBlockchain } from "react-icons/si";

const BlockInfo = () => {
	const [isMobile] = useMediaQuery("(max-width: 30em)");

	return isMobile ? (
		<>
			<Flex direction="column">
				<Heading as="h4" size="sm">
					#123456
				</Heading>
				<Text>Time</Text>
				<Heading as="h4" size="sm">
					Fee recipient $address
				</Heading>
				<Text>92 txs</Text>
				<Text>34573245.324 ETH</Text>
			</Flex>
		</>
	) : (
		<Grid templateColumns="0.5fr 1fr 2fr 1fr" gap={2} p={2}>
			<Flex align="center" justify="center">
				<SiHiveBlockchain size="1.5em" />
			</Flex>
			<Flex direction={"column"}>
				<Heading as="h4" size="sm">
					#123456
				</Heading>
				<Text>Time</Text>
			</Flex>
			<Flex direction={"column"}>
				<Heading as="h4" size="sm">
					Fee recipient $address
				</Heading>
				<Text>92 txs</Text>
			</Flex>
			<Flex direction={"column"} align="center" justify="center" h="100%">
				<Text>34573245.324 ETH</Text>
			</Flex>
		</Grid>
	);
};

export default BlockInfo;

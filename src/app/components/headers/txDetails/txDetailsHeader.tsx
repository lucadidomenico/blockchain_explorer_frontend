import { Flex, Heading, Text } from "@chakra-ui/react";

export const TxDetailsHeader = () => {
	return (
		<Flex w={"100%"} align="center" py={4}>
			<Heading as="h1" size="1xl" mr="2">
				Transaction Details
			</Heading>
		</Flex>
	);
};

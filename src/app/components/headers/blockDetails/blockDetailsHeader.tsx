import { Flex, Heading, Text } from "@chakra-ui/react";

export const BlockDetailsHeader = () => {
	return (
		<Flex w={"100%"} align="center" py={4}>
			<Heading as="h1" size="1xl" mr="2">
				Block
			</Heading>
			<Text>#19269182</Text>
		</Flex>
	);
};

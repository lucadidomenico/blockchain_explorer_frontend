import { Flex, Heading, Text } from "@chakra-ui/react";

export const AddressDetailsHeader = () => {
	return (
		<Flex w={"100%"} align="center" py={4}>
			<Heading as="h1" size="1xl" mr="2">
				Address:
			</Heading>
			<Text noOfLines={[1, 2]}>0xa83114A443dA1CecEFC50368531cACE9F37fCCcb</Text>
		</Flex>
	);
};

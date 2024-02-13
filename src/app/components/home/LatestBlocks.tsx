import { Divider, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import BlockInfo from "../latestBlocksItems/blockInfo";

const LatestBlocks = () => {
	const blockInfo = [1, 2, 3, 4, 5];
	return (
		<Flex
			direction={"column"}
			border="1px solid #E2E8F0"
			borderRadius="md"
			mt={4}
			ml={2}
			mr={2}
			w={{ md: "50%" }}
		>
			<Flex align="center" justify="start" p={2}>
				<Heading as="h2" size="md">
					Latest Blocks
				</Heading>
			</Flex>
			<Divider />
			<Flex direction={"column"} p={2}>
				{blockInfo.map((block) => (
					<>
						<BlockInfo key={block} />
						<Divider />
					</>
				))}
			</Flex>
		</Flex>
	);
};

export default LatestBlocks;

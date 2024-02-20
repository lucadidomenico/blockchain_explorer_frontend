import { Grid, Icon, Text, Tooltip, Flex } from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";
import { useMediaQuery } from "@chakra-ui/react";

interface BlockDetailsItemProps {
	description: string;
	title: string;
	value: string;
}

export const BlockDetailsItem = ({
	description,
	title,
	value,
}: BlockDetailsItemProps) => {
	const [isLargerThan64] = useMediaQuery("(min-width: 64em)");

	return isLargerThan64 ? (
		<Grid templateColumns="30% 70%">
			<Flex alignItems="center" direction={"row"} gap={1}>
				<Tooltip label={description}>
					<span>
						<Icon as={FiInfo} color="gray.500" boxSize="3" />
					</span>
				</Tooltip>
				<Text fontWeight="bold" color="#6c757d">
					{title}
				</Text>
			</Flex>
			<Text>{value}</Text>
		</Grid>
	) : (
		<Flex direction="column">
			<Flex alignItems="center" direction={"row"} gap={1}>
				<Tooltip label={description}>
					<span>
						<Icon as={FiInfo} color="gray.500" boxSize="3" />
					</span>
				</Tooltip>
				<Text fontWeight="bold" color="#6c757d">
					{title}
				</Text>
			</Flex>
			<Text>{value}</Text>
		</Flex>
	);
};

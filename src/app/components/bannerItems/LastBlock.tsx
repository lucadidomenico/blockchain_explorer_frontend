import { Box, Grid, Text } from "@chakra-ui/react";
import { MdOutlineTimer } from "react-icons/md";

const LastBlock = () => {
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
				<MdOutlineTimer size="2em" />
			</Box>
			<Text fontWeight="bold">Last Finalized Block</Text>
			<Text>37824587</Text>
		</Grid>
	);
};

export default LastBlock;

import { Box, Grid, Text } from "@chakra-ui/react";
import { GrTransaction } from "react-icons/gr";

const Transactions = () => {
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
				<GrTransaction size="2em" />
			</Box>
			<Text fontWeight="bold">Transactions</Text>
			<Text>157</Text>
		</Grid>
	);
};

export default Transactions;

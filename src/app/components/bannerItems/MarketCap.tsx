import { Box, Grid, Text } from "@chakra-ui/react";
import { TbWorld } from "react-icons/tb";

const MarketCap = () => {
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
				<TbWorld size="2em" />
			</Box>
			<Text fontWeight="bold">Market Cap</Text>
			<Text>$301,908,530,515.00</Text>
		</Grid>
	);
};

export default MarketCap;

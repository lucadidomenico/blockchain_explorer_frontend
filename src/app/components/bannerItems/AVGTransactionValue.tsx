"use client";
import { Box, Grid, Text } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const data = {
	labels: ["January 25", "February 1", "February 11", "February 27"],
	datasets: [
		{
			label: "",
			data: [65, 59, 80, 125],
			fill: false,
			backgroundColor: "#081D35",
			borderColor: "#081D35",
		},
	],
};

const options = {
	scales: {
		y: {
			beginAtZero: true,
			ticks: {
				callback: function (value: number | string) {
					return value + "k";
				},
			},
		},
	},
	plugins: {
		legend: {
			display: false,
		},
	},
};

const AVGTransactionValue = () => {
	return (
		<Grid
			templateRows="repeat(1, 1fr)"
			templateColumns="repeat(2, 1fr)"
			gap={1}
			h="full"
		>
			<Box
				w="100%"
				gridColumnStart={1}
				gridColumnEnd={3}
				h="full"
				display="flex"
				flexDirection="column"
				alignItems={{ base: "center", md: "start" }}
			>
				<Text fontWeight="bold" textAlign={{ base: "center", md: "start" }}>
					Average Transaction Value
				</Text>
				<Line data={data} options={options} />
			</Box>
		</Grid>
	);
};

export default AVGTransactionValue;

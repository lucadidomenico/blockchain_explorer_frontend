import { Card, CardBody, Heading, Text, Stack } from "@chakra-ui/react";

interface CardBodyItemProps {
	heading: string;
	items: { title: string; value: string }[];
	width: string;
}

export const CardBodyItem = ({ heading, items, width }: CardBodyItemProps) => {
	return (
		<Card width={width}>
			<CardBody>
				<Heading>{heading}</Heading>
				<Stack mt="6" spacing="3">
					{items.map((item) => (
						<>
							<Text key={item.title}>{item.title}</Text>
							<Text key={item.value}>{item.value}</Text>
						</>
					))}
				</Stack>
			</CardBody>
		</Card>
	);
};

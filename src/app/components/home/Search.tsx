"use client";
import { Button, Flex, Link, Text } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { FaYoutube } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export const Search = () => {
	return (
		<Flex
			w="100%"
			pt={{ base: 10, md: 20 }}
			pb={{ base: 10, md: 20 }}
			pl={{ base: 2, lg: 40 }}
			direction={"column"}
			justify={"start"}
			gap={6}
			backgroundColor={"#081D35"}
		>
			<Text fontSize="lg" fontWeight="bold" color={"white"}>
				The Ethereum Blockchain Explorer
			</Text>
			<Flex direction="row" w="100%" align="center" gap={1}>
				<Input
					placeholder="Search by Address or Transaction Hash"
					w={{ base: "80%", md: "50%" }}
					color="white"
				/>
				<Button>
					<FaSearch />
				</Button>
			</Flex>
			<Flex direction="row" w="100%" align="center" gap={1}>
				<Text color={"white"}>Sponsored by</Text>
				<Link color={"white"} href="https://www.youtube.com/@Livello2">
					Livello 2{" "}
				</Link>
				<FaYoutube color={"white"} />
			</Flex>
		</Flex>
	);
};

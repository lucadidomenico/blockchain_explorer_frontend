"use client";
import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { useBreakpointValue } from "@chakra-ui/react";
import { GoMoveToTop } from "react-icons/go";

const Footer = () => {
	const iconSize = useBreakpointValue({ base: "1.5em", md: "2.5em" });
	return (
		<Flex
			direction="row"
			justify="space-between"
			align="center"
			h="100px"
			mt={40}
			backgroundColor={"#F8F9FA"}
			pb={{ base: 4, md: 0 }}
			pt={{ base: 4, md: 0 }}
			px={2}
		>
			<Flex direction="row" gap={{ base: 2, md: 4 }}>
				<FaYoutube size={iconSize} />
				<FaLinkedin size={iconSize} />
				<FaTwitter size={iconSize} />
				<FaGithub size={iconSize} />
				<FaDiscord size={iconSize} />
				<FaTelegram size={iconSize} />
			</Flex>
			<Button
				rightIcon={<GoMoveToTop />}
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
			>
				Back to Top
			</Button>
		</Flex>
	);
};

export default Footer;

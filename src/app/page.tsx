import { Box, Divider } from "@chakra-ui/react";
import styles from "./page.module.css";
import { Header } from "./components/headers/headerMenu/Header";
import { EthereumPrice } from "./components/headers/ethPrice/EthereumPrice";
import { Search } from "./components/home/Search";
import BannerData from "./components/home/BannerData";

export default function Home() {
	return (
		<main className={styles.main}>
			<Box w={"100%"}>
				<EthereumPrice />
				<Divider orientation="horizontal" />
				<Header />
				<Search />
				<BannerData />
			</Box>
		</main>
	);
}

import { Divider } from "@chakra-ui/react";
import styles from "./page.module.css";
import { Header } from "./components/Header";
import { EthereumPrice } from "./components/EthereumPrice";

export default function Home() {
	return (
		<main className={styles.main}>
			<EthereumPrice />
			<Divider orientation="horizontal" />
			<Header />
		</main>
	);
}

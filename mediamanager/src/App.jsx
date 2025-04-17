import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MediaCard from "./components/MediaCard";

function App() {
	return (
		<>
			<Header />
			<main>
				<MediaCard />
				<MediaCard />
				<MediaCard />
				<MediaCard />
				<MediaCard />
				<MediaCard />
				<MediaCard />
			</main>
			{/*<Footer /> */}
		</>
	);
}

export default App;

import {Download, Features, SectionWrapper} from "./components"
import assets from "./assets"
import styles from "./styles/Global"

const App = () => {
	return (
		<>
			<SectionWrapper
				title="An application for taking notes and your progress in their implementation. Supporting IOS and Android"
				showBtn
				mockupImg={assets.homeHero}
				banner="banner02"
			/>
			<Features />
			<Download />
			<div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
				<p className={`${styles.pText} ${styles.whiteText}`}>
					Made with love by {" "}
					<span className="bold">
						Lyshka
					</span>
				</p>
			</div>
		</>
	)
}

export default App
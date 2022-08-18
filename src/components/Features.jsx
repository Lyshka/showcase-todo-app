import assets from "../assets"
import styles from "../styles/Global"

const FeatureCard = ({iconUrl, iconText}) => (
	<div className={styles.featureCard}>
		<img
			src={iconUrl}
			alt="icon"
			className={styles.featureImg}
		/>
		<p className={styles.featureText}>
			{iconText}
		</p>
	</div>
)

const Features = () => {
	return (
		<div className={`${styles.section} ${styles.bgPrimary} `}>
			<div className={`${styles.subSection} flex-col text-center`}>
				<div>
					<h1 className={`${styles.h1Text} ${styles.whiteText}`}>
						Technologies
					</h1>
					<p className={`${styles.pText} ${styles.whiteText}`}>
						Todo Lyshka has been developed using a cross-platform technology, React Native.
					</p>
				</div>

				<div className={styles.flexWrap}>
					<FeatureCard
						iconText={"React Native"}
						iconUrl={assets.react}
					/>
					<FeatureCard
						iconText={"JavaScript"}
						iconUrl={assets.javascript}
					/>
					<FeatureCard
						iconText={"Firebase"}
						iconUrl={assets.firebase}
					/>
				</div>
			</div>
		</div>
	)
}

export default Features
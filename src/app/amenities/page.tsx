"use client";
import Image from "next/image";
import styles from "./amenity.module.css";
import GuestReviews from "../components/testimonials/guest-reviews";

export default function Amenities() {
	const reviews = [
		{
			name: "Ayobami Olawale",
			rating: 5,
			testimony:
				"The clubhouse has an amazing vibe! The atmosphere is lively, the drinks are top-notch, and the seating areas are comfortable. It’s the perfect spot to unwind and socialize after a long day.",
		},
		{
			name: "Shola Adeyemi",
			rating: 4,
			testimony:
				"The snooker board setup is fantastic! The tables are well-maintained, and the ambiance makes for a great gaming experience. Whether you're a beginner or a pro, it's a great place to enjoy a game with friends.",
		},
		{
			name: "Shomuyiwa Martins",
			rating: 5,
			testimony:
				"The parking space is spacious, secure, and well-organized. I had no trouble finding a spot, and the security presence gave me peace of mind. A great addition to an already excellent facility!",
		},
	];

	return (
		<div className={styles.container}>
			<div className={styles.amenity_header}>
				<div className={styles.main}>
					<h1>Amenities</h1>
					<p>Experience luxury beyond imagination</p>
				</div>
			</div>

			<div className={styles.resource}>
				<div className={styles.resource_content}>
					<div className={styles.resource_part}>
						<div className={styles.image_container}>
							<Image
								src="/assets/snoker.jpg"
								alt="Snocker"
								width={400}
								height={400}
							/>
						</div>
						<div className={styles.resource_detail}>
							<h2>Snooker</h2>
							<p>
								Our snooker table is available for guests to play at any time.
							</p>
						</div>
					</div>
					<div className={styles.resource_part}>
						<div className={styles.image_container}>
							<Image
								src="/assets/club.jpg"
								alt="Snocker"
								width={400}
								height={400}
							/>
						</div>
						<div className={styles.resource_detail}>
							<h2>Club House</h2>
							<p>
								Our club house is open to guests who want to relax and unwind.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div>
				<GuestReviews reviews={reviews} />
			</div>
		</div>
	);
}

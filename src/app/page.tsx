import { FeaturedRoom } from "./model/room_interface";
import styles from "./page.module.css";
import style from "./featuredroom.module.css";
import Image from "next/image";

export default function Home() {
	const featured_rooms: FeaturedRoom[] = [
		{
			id: 1,
			name: "Presidential Suit",
			description:
				"Experience luxury with breathtaking ocean views,premium amenities, and sophisticated comfort.",
			price: 40000,
			image: "/assets/room1.svg",
		},
		{
			id: 2,
			name: "Executive Room",
			description:
				"Experience luxury with breathtaking ocean views,premium amenities, and sophisticated comfort.",
			price: 30000,
			image: "/assets/room1.svg",
		},
		{
			id: 3,
			name: "Standard Room",
			description:
				"Experience luxury with breathtaking ocean views,premium amenities, and sophisticated comfort.",
			price: 25000,
			image: "/assets/room1.svg",
		},
		{
			id: 4,
			name: "Kings Size Room 1",
			description:
				"Experience luxury with breathtaking ocean views,premium amenities, and sophisticated comfort.",
			price: 25000,
			image: "/assets/room1.svg",
		},
		{
			id: 5,
			name: "Kings Single Room 2",
			description:
				"Experience luxury with breathtaking ocean views,premium amenities, and sophisticated comfort.",
			price: 20000,
			image: "/assets/room1.svg",
		},
	];

	return (
		<div className={styles.page}>
			<div className={styles.main_view}>
				<div className={styles.content}>
					<h1>Experience Luxury</h1>
					<h1>Beyond Compare</h1>
					<p>
						Discover an oasis of tranquility and elegance at our five-star
						resort, where every moment is crafted to perfection.
					</p>
					<button>Explore Our Rooms</button>
				</div>
			</div>

			<div className={style.featured_room}>
				<h2>Featured Rooms</h2>
				<div className={style.room_container}>
					{featured_rooms.map((room) => (
						<div key={room.id} className={style.room}>
							<Image
								src={room.image}
								alt={room.name}
								width={500}
								height={350}
							/>
							<div className={style.room_content}>
								<h3>{room.name}</h3>
								<p>{room.description}</p>
								<div className={style.more}>
									<p>From ₦{room.price}/night</p>
									<button>View Details</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

"use client";
import styles from "./page.module.css";
import style from "./featuredroom.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { all_rooms } from "./model/room";
import GuestReviews from "./components/testimonials/guest-reviews";

export default function Home() {
	const router = useRouter();
	const featured_rooms = all_rooms;

	const routeToRoom = (route: string) => {
		router.push(`/room/${route}`);
	};

	const routeToRooms = () => {
		router.push("/room");
	};

	const reviews = [
		{
			name: "Ayobami Olawale",
			rating: 5,
			testimony:
				"The service was impeccable! The staff was warm and attentive, making sure every need was met. My room was spacious, elegantly furnished, and had a stunning view. The peaceful ambiance made my stay truly relaxing.",
		},
		{
			name: "Shola Adeyemi",
			rating: 4,
			testimony:
				"The hotel's ambiance is soothing, with elegant decor and a relaxing atmosphere. The room was well-maintained and comfortable, and the service was efficient. A great place for both business and leisure stays!",
		},
		{
			name: "Shomuyiwa Martins",
			rating: 5,
			testimony:
				"The attention to detail in both service and room quality was outstanding. The ambiance was serene, and every space felt luxurious. I felt pampered throughout my stay. Highly recommended!",
		},
		{
			name: "Kemi Babalola",
			rating: 4,
			testimony:
				"The room was spotless, cozy, and well-designed, with all the amenities I needed. The staff was courteous and always ready to assist. The overall atmosphere was calm and inviting—perfect for a relaxing getaway.",
		},
		{
			name: "David Omotayo",
			rating: 5,
			testimony:
				"An absolute gem! The rooms were beautifully decorated with plush bedding and modern amenities. The service was top-notch, and the peaceful ambiance made it the perfect escape from the city's hustle.",
		},
		{
			name: "Chinelo Okafor",
			rating: 4,
			testimony:
				"I loved the serene environment and well-kept rooms. The staff was professional and welcoming, ensuring I had everything I needed. The overall experience was fantastic, and I can’t wait to visit again!",
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
					<button onClick={() => routeToRooms()}>Explore Our Rooms</button>
				</div>
			</div>

			<div className={style.featured_room}>
				<h2>Featured Rooms</h2>
				<div className={style.room_container}>
					{featured_rooms.map((room) => (
						<div key={room.id} className={style.room}>
							<Image
								src={room.image1}
								alt={room.name}
								width={500}
								height={350}
							/>
							<div className={style.room_content}>
								<h3>{room.name}</h3>
								<p>{room.description}</p>
								<div className={style.more}>
									<p>From ₦{room.price}/night</p>
									<button onClick={() => routeToRoom(room.route)}>
										View Details
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<div>
				<GuestReviews reviews={reviews} />
			</div>
		</div>
	);
}

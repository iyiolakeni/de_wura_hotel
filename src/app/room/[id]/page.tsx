"use client";
import { useParams } from "next/navigation";
import { all_rooms } from "../../model/room";
import styles from "./room_detail.module.css";
import { RoomCarousel } from "@/app/components/carousel";
import Image from "next/image";
import GuestReviews from "@/app/components/testimonials/guest-reviews";

export default function RoomDetail() {
	const params = useParams();
	const roomId = params.id;

	const room = all_rooms.find((room) => room.route === roomId);

	if (!room) return <div>Room Not found</div>;

	return (
		<div className={styles.container}>
			<RoomCarousel room={room} />
			<div className={styles.room_header}>
				<h1>{room.name}</h1>
				<p>{room.description}</p>
				<div className={styles.flex}>
					<Image src="/assets/people.svg" alt="Guests" width={20} height={20} />
					<p>Up to {room.no_of_guests} Adults</p>
				</div>
				<div className={styles.flex}>
					<Image src="/assets/bed.svg" alt="Guests" width={20} height={20} />
					<p>{room.bed_size}</p>
				</div>
			</div>

			<div className={styles.amenity_container}>
				<h2>Amenities</h2>
				<div className={styles.amenities}>
					<div className={styles.amenities_details}>
						<Image src="/assets/wifi.svg" alt="Wifi" width={20} height={20} />
						<p>Free Wifi</p>
					</div>
					<div className={styles.amenities_details}>
						<Image src="/assets/wifi.svg" alt="Wifi" width={20} height={20} />
						<p>Free Wifi</p>
					</div>
					<div className={styles.amenities_details}>
						<Image src="/assets/tv.svg" alt="Wifi" width={20} height={20} />
						<p>Smart TV</p>
					</div>
					<div className={styles.amenities_details}>
						<Image src="/assets/wifi.svg" alt="Wifi" width={20} height={20} />
						<p>Free Wifi</p>
					</div>
					<div className={styles.amenities_details}>
						<Image src="/assets/bar.svg" alt="Wifi" width={20} height={20} />
						<p>Bar</p>
					</div>
				</div>
			</div>

			<div>
				<GuestReviews reviews={room.reviews} />
			</div>
		</div>
	);
}

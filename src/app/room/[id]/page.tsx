"use client";
import { useParams } from "next/navigation";
import { all_rooms } from "../../model/room";
import styles from "./room_detail.module.css";
// import Image from "next/image";
import { RoomCarousel } from "@/app/components/carousel";

export default function RoomDetail() {
	const params = useParams();
	const roomId = params.id;

	const room = all_rooms.find((room) => room.route === roomId);

	if (!room) return <div>Room Not found</div>;

	return (
		<div className={styles.container}>
			<div className={styles.room_header}>
				<RoomCarousel room={room} />
			</div>
			<h1>Room Detail</h1>
			<h2>{room.name}</h2>
			<div className="room-description">
				<p>{room.description}</p>
				<p>Price: ₦{room.price} per night</p>
				<p>Bed: {room.bed_size}</p>
				<p>Guests: {room.no_of_guests}</p>
			</div>
		</div>
	);
}

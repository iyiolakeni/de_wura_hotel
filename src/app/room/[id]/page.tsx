"use client";
import { useParams } from "next/navigation";
import { all_rooms } from "../../model/room";
import styles from "./room_detail.module.css";
import { RoomCarousel } from "@/app/components/carousel";

export default function RoomDetail() {
	const params = useParams();
	const roomId = params.id;

	const room = all_rooms.find((room) => room.route === roomId);

	if (!room) return <div>Room Not found</div>;

	return (
		<div className={styles.container}>
			<RoomCarousel room={room} />
			<div className={styles.room_header}>
				<h1>Room Detail</h1>
				<h2>{room.name}</h2>
			</div>
		</div>
	);
}

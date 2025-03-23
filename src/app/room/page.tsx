"use client";
import Image from "next/image";
import { RoomComparison, RoomType } from "../model/room_interface";
import styles from "./all_room.module.css";
import { useRouter } from "next/navigation";

export default function Room() {
	const router = useRouter();
	const all_rooms: RoomType[] = [
		{
			id: 1,
			name: "Presidential Suit",
			route: "presidential-suit",
			price: 40000,
			image: "/assets/room1.svg",
			status: "Available",
			length: 45,
			no_of_guests: 4,
			bed: "King Size",
			extra1: "Free Wifi",
			extra1Image: "/assets/wifi.svg",
			extra2: "Smart TV",
			extra2Image: "/assets/tv.svg",
			extra3: "AC",
			extra3Image: "/assets/ac.svg",
			extra4: "Mini Bar",
			extra4Image: "/assets/bar.svg",
		},
		{
			id: 2,
			name: "Executive Room",
			route: "executive-room",
			price: 30000,
			image: "/assets/room1.svg",
			status: "Available",
			length: 45,
			no_of_guests: 4,
			bed: "King Size",
			extra1: "Free Wifi",
			extra1Image: "/assets/wifi.svg",
			extra2: "Smart TV",
			extra2Image: "/assets/tv.svg",
			extra3: "AC",
			extra3Image: "/assets/ac.svg",
			extra4: "Mini Bar",
			extra4Image: "/assets/bar.svg",
		},
		{
			id: 3,
			name: "Standard Room",
			route: "standard-room",
			price: 25000,
			image: "/assets/room1.svg",
			status: "Available",
			length: 45,
			no_of_guests: 4,
			bed: "King Size",
			extra1: "Free Wifi",
			extra1Image: "/assets/wifi.svg",
			extra2: "Smart TV",
			extra2Image: "/assets/tv.svg",
			extra3: "AC",
			extra3Image: "/assets/ac.svg",
			extra4: "Mini Bar",
			extra4Image: "/assets/bar.svg",
		},
		{
			id: 4,
			name: "Kings Size Room 1",
			route: "kings-size-room-1",
			price: 25000,
			image: "/assets/room1.svg",
			status: "Available",
			length: 45,
			no_of_guests: 4,
			bed: "King Size",
			extra1: "Free Wifi",
			extra1Image: "/assets/wifi.svg",
			extra2: "Smart TV",
			extra2Image: "/assets/tv.svg",
			extra3: "AC",
			extra3Image: "/assets/ac.svg",
			extra4: "Mini Bar",
			extra4Image: "/assets/bar.svg",
		},
		{
			id: 5,
			name: "Kings Single Room 2",
			route: "kings-single-room-2",
			price: 20000,
			image: "/assets/room1.svg",
			status: "Available",
			length: 45,
			no_of_guests: 4,
			bed: "King Size",
			extra1: "Free Wifi",
			extra1Image: "/assets/wifi.svg",
			extra2: "Smart TV",
			extra2Image: "/assets/tv.svg",
			extra3: "AC",
			extra3Image: "/assets/ac.svg",
			extra4: "Mini Bar",
			extra4Image: "/assets/bar.svg",
		},
	];

	const room_comparison: RoomComparison[] = [
		{
			id: 1,
			name: "Presidential Suit",
			room_size: 32,
			price: 40000,
			bed_type: "King Size",
		},
		{
			id: 2,
			name: "Executive Room",
			price: 30000,
			room_size: 45,
			bed_type: "King Size",
		},
		{
			id: 3,
			name: "Standard Room",
			price: 25000,
			bed_type: "King Size",
			room_size: 50,
		},
		{
			id: 4,
			name: "Kings Size Room 1",
			price: 25000,
			bed_type: "King Size",
			room_size: 40,
		},
		{
			id: 5,
			name: "Kings Single Room 2",
			price: 20000,
			room_size: 60,
			bed_type: "King Size",
		},
	];
	return (
		<div className={styles.rooms}>
			<div className={styles.header}>
				<h2>Our Luxury Accomodation</h2>
				<p>
					Experience unparalleled comfort in our thoughtfully designed rooms and
					suites, each offering a perfect blend of luxury and functionality.
				</p>
			</div>

			<div className={styles.room_container}>
				{all_rooms.map((room) => (
					<div key={room.id} className={styles.room}>
						<Image src={room.image} alt={room.name} width={100} height={100} />
						<div className={styles.room_content}>
							<div className={styles.room_content_header}>
								<div className={styles.room_content_head}>
									<h2>{room.name}</h2>
									<p>From ₦{room.price} per night</p>
								</div>
								<p className={styles.status}>{room.status}</p>
							</div>
							<div className={styles.details}>
								<div className={styles.detail}>
									<Image
										alt="Meter"
										src={"/assets/room_length.svg"}
										width={20}
										height={20}
									/>
									<p>{room.length} meter</p>
								</div>
								<div className={styles.detail}>
									<Image
										alt="Meter"
										src={"/assets/people.svg"}
										width={20}
										height={20}
									/>
									<p>{room.no_of_guests} Guests</p>
								</div>
								<div className={styles.detail}>
									<Image
										alt="Meter"
										src={"/assets/bed.svg"}
										width={20}
										height={20}
									/>
									<p>{room.bed}</p>
								</div>
							</div>
							<hr />
							<div className={styles.extra}>
								<div className={styles.extra_details}>
									<Image
										src={room.extra1Image || ""}
										alt={room.extra1 || ""}
										width={20}
										height={20}
									/>
									<p>{room.extra1}</p>
								</div>
								<div className={styles.extra_details}>
									<Image
										src={room.extra2Image || ""}
										alt={room.extra2 || ""}
										width={20}
										height={20}
									/>
									<p>{room.extra2}</p>
								</div>
								<div className={styles.extra_details}>
									<Image
										src={room.extra3Image || ""}
										alt={room.extra3 || ""}
										width={20}
										height={20}
									/>
									<p>{room.extra3}</p>
								</div>
								<div className={styles.extra_details}>
									<Image
										src={room.extra4Image || ""}
										alt={room.extra4 || ""}
										width={20}
										height={20}
									/>
									<p>{room.extra4}</p>
								</div>
							</div>
							<button onClick={() => router.push(`/room/${room.route}`)}>
								View More
							</button>
						</div>
					</div>
				))}
			</div>

			<div className={styles.compare}>
				<h2>Compare Room Types</h2>
				<table>
					<thead>
						<tr>
							<td>Features</td>
							{room_comparison.map((room) => (
								<td key={room.id}>{room.name}</td>
							))}
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Room Size</td>
							{room_comparison.map((room) => (
								<td key={room.id}>{room.room_size} m²</td>
							))}
						</tr>
						<tr>
							<td>Price</td>
							{room_comparison.map((room) => (
								<td key={room.id}>{room.price}</td>
							))}
						</tr>
						<tr>
							<td>Bed Type</td>
							{room_comparison.map((room) => (
								<td key={room.id}>{room.bed_type}</td>
							))}
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

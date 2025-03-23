"use client";

import Link from "next/link";
import styles from "./nav.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("../components/MapComponent"), {
	ssr: false,
});

export const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footer_container}>
				<div className={styles.content_1}>
					<Image src="/assets/logo.jpeg" alt="Logo" width={40} height={40} />
					<p>
						Experience luxury beyond compare at our exotic place, where every
						moment is crafted to perfection
					</p>
				</div>
				<div className={styles.content_1}>
					<h3>Quick Links</h3>
					<ul className={styles.list}>
						<li>
							<Link href="/about">About Us</Link>
						</li>
						<li>
							<Link href="/room">Rooms</Link>
						</li>
						<li>
							<Link href="/about">Amenities</Link>
						</li>
						<li>
							<Link href="/about">Club House</Link>
						</li>
					</ul>
				</div>
				<div className={styles.content_1}>
					<h3>Contact Us</h3>
					<div className={styles.row}>
						<Image
							src="/assets/location.svg"
							alt="Phone"
							width={20}
							height={20}
						/>
						<p>9, Oyekunle Street, Ijaiye, Meiran, Lagos</p>
					</div>
					<div className={styles.row}>
						<Image src="/assets/phone.svg" alt="Phone" width={20} height={20} />
						<p>+91 9876543210</p>
					</div>
					<div className={styles.row}>
						<Image src="/assets/email.svg" alt="Mail" width={20} height={20} />
						<p>info@luxuryhotel.com</p>
					</div>
					<div className={styles.row}></div>
				</div>
				<div className={styles.content_1}>
					<h3>Our Location</h3>
					<MapComponent />
				</div>
			</div>
		</div>
	);
};

export const Header = () => {
	const activeLink = usePathname();

	return (
		<div className={styles.header}>
			<div className={styles.logo}>
				<Image src="/assets/logo.jpeg" alt="Logo" width={40} height={40} />
			</div>
			<div className={styles.nav}>
				<Link
					href="/"
					className={activeLink === "/" ? styles.active : styles.link}>
					Home
				</Link>
				<Link
					href="/room"
					className={activeLink === "/room" ? styles.active : styles.link}>
					Rooms
				</Link>
				<Link
					href="#projects"
					className={activeLink === "#projects" ? styles.active : styles.link}>
					Amenities
				</Link>
				<Link
					href="#contact"
					className={activeLink === "#contact" ? styles.active : styles.link}>
					Contact
				</Link>
			</div>
		</div>
	);
};

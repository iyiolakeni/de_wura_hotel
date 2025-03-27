"use client";

import { useState } from "react";
import styles from "./contact.module.css";
import MapComponent from "../components/map/map";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "Reservations",
		message: "",
	});

	const handleChange = (e: { target: { name: string; value: string } }) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const contactEmail = "dewuraalfred@gmail.com";
		const mailtoLink = `mailto:${contactEmail}?subject=${encodeURIComponent(
			formData.subject
		)}&body=${encodeURIComponent(
			`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
		)}`;
		window.location.href = mailtoLink;
	};

	const hotelAddress =
		"11 Lekan-Oyekunle St, Abule Egba, Lagos 102213, Lagos Nigeria";

	return (
		<div className={styles.contactPage}>
			<div className={styles.contactHeader}>
				<h1>Contact Us</h1>
				<p>
					We&apos;re here to help and answer any question you might have. We
					look forward to hearing from you.
				</p>
			</div>
			<div className={styles.contactContainer}>
				<div className={styles.getInTouch}>
					<h2>Get in Touch</h2>
					<form onSubmit={handleSubmit} className={styles.contactForm}>
						<div className={styles.formGroup}>
							<label htmlFor="name">Name</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								required
							/>
						</div>

						<div className={styles.formGroup}>
							<label htmlFor="email">Email</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								required
							/>
						</div>

						<div className={styles.formGroup}>
							<label htmlFor="phone">Phone</label>
							<input
								type="tel"
								id="phone"
								name="phone"
								value={formData.phone}
								onChange={handleChange}
							/>
						</div>

						<div className={styles.formGroup}>
							<label htmlFor="subject">Subject</label>
							<select
								id="subject"
								name="subject"
								value={formData.subject}
								onChange={handleChange}>
								<option value="Reservations">Reservations</option>
								<option value="General Inquiry">General Inquiry</option>
								<option value="Support">Support</option>
							</select>
						</div>

						<div className={styles.formGroup}>
							<label htmlFor="message">Message</label>
							<textarea
								id="message"
								name="message"
								value={formData.message}
								onChange={handleChange}
								required></textarea>
						</div>

						<button type="submit" className={styles.sendMessage}>
							Send Message
						</button>
					</form>
				</div>

				<div className={styles.contactInfo}>
					<div className={styles.infoBlock}>
						<h2>Contact Information</h2>
						<div className={styles.contactDetails}>
							<div className={styles.detail}>
								<span className={styles.icon}>
									<Image
										src={"/assets/location.svg"}
										width={20}
										height={20}
										alt="Location"
									/>
								</span>
								<p>{hotelAddress}</p>
							</div>
							<div className={styles.detail}>
								<span className={styles.icon}>
									<Image
										src={"/assets/phone.svg"}
										width={30}
										height={30}
										alt="Phone"
									/>
								</span>
								<p>
									<Link href="tel:+2348101035359">+2348101035359, </Link>
									<Link href="tel:08088476099">08088476099, </Link>
									<Link href="tel:08101035359">08101035359</Link>
								</p>
							</div>
							<div className={styles.detail}>
								<span className={styles.icon}>
									<Image
										src={"/assets/email.svg"}
										width={20}
										height={20}
										alt="Email"
									/>
								</span>
								<p>
									<Link href="mailto:dewuraalfred@gmail.com">
										dewuraalfred@gmail.com
									</Link>
								</p>
							</div>
							<div className={styles.detail}>
								<span className={styles.icon}>🕒</span>
								<p>24/7 Front Desk Service</p>
							</div>
						</div>
					</div>

					<MapComponent />
				</div>
			</div>

			<div className={styles.footer}>
				<h2>Follow Us</h2>
				<div className={styles.socialLinks}>
					<a href="#" className={styles.socialIcon}>
						<Image
							src={"/assets/facebook.svg"}
							width={20}
							height={20}
							alt="Facebook"
						/>
					</a>
					<a href="#" className={styles.socialIcon}>
						<Image
							src={"/assets/instagram.svg"}
							width={20}
							height={20}
							alt="Instagram"
						/>
					</a>
					<a href="#" className={styles.socialIcon}>
						<Image
							src={"/assets/twitter.svg"}
							width={20}
							height={20}
							alt="Twitter"
						/>
					</a>
					<a href="#" className={styles.socialIcon}>
						<Image
							src={"/assets/tiktok.svg"}
							width={20}
							height={20}
							alt="Tiktok"
						/>
					</a>
				</div>
			</div>
		</div>
	);
}

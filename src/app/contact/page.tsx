"use client";

import { useState } from "react";
import styles from "./contact.module.css";
import MapComponent from "../components/map/map";
import Image from "next/image";
import Link from "next/link";
import Alert from "../components/alerts/alert";

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

	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		try {
			const response = await fetch("https://formspree.io/f/xanednwv", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				<Alert
					message="Message sent successfully!"
					type="success"
					onClose={() => {}}
				/>;
				setFormData({
					name: "",
					email: "",
					phone: "",
					subject: "",
					message: "",
				});
			} else {
				<Alert
					message="Something went wrong.!"
					type="error"
					onClose={() => {}}
				/>;
			}
		} catch (error) {
			alert(`Failed to send message. ${error}`);
			<Alert
				message={`Failed to send message. ${error}`}
				type="error"
				onClose={() => {}}
			/>;
		} finally {
			setLoading(false);
		}
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

						<button
							type="submit"
							className={styles.sendMessage}
							disabled={loading}>
							{loading ? "Sending..." : "Send Message"}
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
									{/* <Link href="tel:+2348101035359">+2348101035359, </Link> */}
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
									<Link href="mailto:goldfred6303@gmail.com">
										goldfred6303@gmail.com
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
					<Link
						href="https://facebook.com/dewuraalfred"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.socialIcon}>
						<Image
							src={"/assets/facebook.svg"}
							width={20}
							height={20}
							alt="Facebook"
						/>
					</Link>
					<Link
						href="https://www.instagram.com/dewuraalfred"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.socialIcon}>
						<Image
							src={"/assets/instagram.svg"}
							width={20}
							height={20}
							alt="Instagram"
						/>
					</Link>
					<Link
						target="_blank"
						href="https://x.com/dewuraalfred"
						rel="noopener noreferrer"
						className={styles.socialIcon}>
						<Image
							src={"/assets/twitter.svg"}
							width={20}
							height={20}
							alt="Twitter"
						/>
					</Link>
					<Link
						href="https://www.tiktok.com/@dewuraalfred"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.socialIcon}>
						<Image
							src={"/assets/tiktok.svg"}
							width={20}
							height={20}
							alt="Tiktok"
						/>
					</Link>
					<Link
						href="https://wa.me/2348101035359"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.socialIcon}>
						<Image
							src={"/assets/whatsapp.svg"}
							width={20}
							height={20}
							alt="WhatsApp"
						/>
					</Link>
				</div>
			</div>
		</div>
	);
}

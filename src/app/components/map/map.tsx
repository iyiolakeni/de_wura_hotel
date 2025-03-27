"use client";
import { useState, useEffect } from "react";
import styles from "./map.module.css";

export default function MapComponent() {
	const [mapUrl, setMapUrl] = useState("");

	useEffect(() => {
		// Latitude & Longitude (Replace with actual dynamic values)
		const latitude = 6.6449640292590715;
		const longitude = 3.270243225338087;

		// Google Maps direct embed URL (No API key needed)
		const url = `https://www.google.com/maps?q=${latitude},${longitude}&output=embed`;

		setMapUrl(url);
	}, []);

	return (
		<div className={styles.mapContainer}>
			{mapUrl ? (
				<iframe
					src={mapUrl}
					width="100%"
					height="400"
					frameBorder="0"
					allowFullScreen
					title="Google Maps Location"></iframe>
			) : (
				<div className={styles.mapPlaceholder}>Loading map...</div>
			)}
		</div>
	);
}

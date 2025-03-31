"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./carousel.module.css";
import { RoomPage } from "../model/room_interface";

// Define types for our component
interface CarouselImage {
	src: string;
	alt: string;
}

interface RoomCarouselProps {
	room: RoomPage;
}

export const RoomCarousel: React.FC<RoomCarouselProps> = ({ room }) => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [isAutoplay, setIsAutoplay] = useState<boolean>(true);
	const [images, setImages] = useState<CarouselImage[]>([]);

	// Extract images from room data on component mount
	useEffect(() => {
		if (room) {
			// Collect all images from the room object
			const imageArray: CarouselImage[] = [];
			for (let i = 1; i <= 10; i++) {
				const imageKey = `image${i}` as keyof RoomPage;
				const imageSrc = room[imageKey] as string | undefined;

				if (imageSrc) {
					imageArray.push({
						src: imageSrc,
						alt: `${room.name} - View ${i}`,
					});
				}
			}
			setImages(imageArray);
		}
	}, [room]);

	// Handle next/previous navigation
	const goToNext = (): void => {
		setCurrentIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	};

	const goToPrevious = (): void => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	const goToSlide = (index: number): void => {
		setCurrentIndex(index);
	};

	// Set up autoplay
	useEffect(() => {
		let interval: NodeJS.Timeout | undefined;

		if (isAutoplay && images.length > 1) {
			interval = setInterval(() => {
				goToNext();
			}, 5000); // 5 seconds between slides
		}

		return () => {
			if (interval) {
				clearInterval(interval);
			}
		};
	}, [isAutoplay, images.length]);

	// Pause autoplay on hover
	const handleMouseEnter = (): void => setIsAutoplay(false);
	const handleMouseLeave = (): void => setIsAutoplay(true);

	// If no images, show placeholder
	if (images.length === 0) {
		return <div className={styles.placeholder}>No images available</div>;
	}

	return (
		<div
			className={styles.carouselContainer}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			{/* Main image display */}
			<div className={styles.imageContainer}>
				<Image
					src={images[currentIndex].src}
					alt={images[currentIndex].alt}
					fill
					className={styles.carouselImage}
					priority={currentIndex === 0}
				/>
			</div>

			{/* Navigation Arrows - only show if more than one image */}
			{images.length > 1 && (
				<>
					<button
						onClick={goToPrevious}
						className={`${styles.navButton} ${styles.prevButton}`}
						aria-label="Previous image">
						&lt;
					</button>
					<button
						onClick={goToNext}
						className={`${styles.navButton} ${styles.nextButton}`}
						aria-label="Next image">
						&gt;
					</button>
				</>
			)}

			{/* Thumbnail navigation */}
			{images.length > 1 && (
				<div className={styles.thumbnailContainer}>
					{images.map((image, index) => (
						<div
							key={index}
							className={`${styles.thumbnail} ${
								index === currentIndex ? styles.activeThumbnail : ""
							}`}
							onClick={() => goToSlide(index)}>
							<Image
								src={image.src}
								alt={`Thumbnail ${index + 1}`}
								fill
								className={styles.thumbnailImage}
							/>
						</div>
					))}
				</div>
			)}

			{/* Indicators - dots at the bottom */}
			{/* {images.length > 1 && (
				<div className={styles.indicators}>
					{images.map((_, index) => (
						<button
							key={index}
							onClick={() => goToSlide(index)}
							className={`${styles.indicator} ${
								index === currentIndex ? styles.activeIndicator : ""
							}`}
							aria-label={`Go to image ${index + 1}`}
						/>
					))}
				</div>
			)} */}
		</div>
	);
};

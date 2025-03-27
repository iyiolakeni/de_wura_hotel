"use client";

import React from "react";
import styles from "./guest-reviews.module.css";

interface ReviewProps {
	name: string;
	rating: number;
	testimony: string;
}

const ReviewCard = ({ name, rating, testimony }: ReviewProps) => {
	const renderStars = () => {
		return Array.from({ length: 5 }).map((_, index) => (
			<span
				key={`star-${index}`}
				className={`${styles.star} ${index < rating ? styles.filled : ""}`}
				aria-hidden="true">
				★
			</span>
		));
	};

	return (
		<div className={styles.reviewCard}>
			<div
				className={styles.starContainer}
				aria-label={`${rating} out of 5 stars`}>
				{renderStars()}
			</div>
			<p className={styles.testimony}>{testimony}</p>
			<p className={styles.name}>{name}</p>
		</div>
	);
};

interface GuestReviewsProps {
	reviews: ReviewProps[];
}

const GuestReviews = ({ reviews }: GuestReviewsProps) => {
	return (
		<section className={styles.reviewsContainer}>
			<h2 className={styles.heading}>Guest Reviews</h2>
			<div className={styles.reviewGrid}>
				{reviews.map((review, index) => (
					<ReviewCard key={review.name + index} {...review} />
				))}
			</div>
		</section>
	);
};

export default GuestReviews;

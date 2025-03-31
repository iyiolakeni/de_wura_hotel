import { RoomPage } from "./room_interface";

export const all_rooms: RoomPage[] = [
	{
		id: 1,
		name: "Presidential Suite",
		route: "presidential-suite",
		description:
			"The Presidential Suite is the most luxurious room in the hotel. It is a two-bedroom suite with a separate living room, dining room, kitchen, and a private balcony. The suite is perfect for families or guests who want to experience the ultimate luxury.",
		price: 40000,
		bed_size: "King Size",
		no_of_guests: 4,
		image1: "/assets/presidential/13.jpg",
		image2: "/assets/presidential/1.jpg",
		image3: "/assets/presidential/2.jpg",
		image4: "/assets/presidential/3.jpg",
		image5: "/assets/presidential/4.jpg",
		image6: "/assets/presidential/5.jpg",
		image7: "/assets/presidential/6.jpg",
		image8: "/assets/presidential/7.jpg",
		image9: "/assets/presidential/8.jpg",
		image10: "/assets/presidential/9.jpg",
		image11: "/assets/presidential/10.jpg",
		image12: "/assets/presidential/11.jpg",
		image13: "/assets/presidential/12.jpg",
		reviews: [
			{
				name: "Ayobami Olawale",
				rating: 5,
				testimony:
					"The Presidential Suite is pure luxury! From the moment I stepped in, I was blown away by the elegant decor, spacious layout, and breathtaking city views. The personalized service made me feel like royalty. A truly unforgettable experience!",
			},
			{
				name: "Shola Adeyemi",
				rating: 5,
				testimony:
					"Exceptional in every way! The suite was impeccably designed, with plush furnishings and state-of-the-art amenities. The private lounge and butler service added a special touch to my stay. Perfect for business or leisure!",
			},
			{
				name: "Chinelo Okafor",
				rating: 5,
				testimony:
					"A five-star experience! The Presidential Suite is the epitome of comfort and sophistication. The spacious bedroom, luxurious bathroom, and exclusive services exceeded my expectations. I will definitely return!",
			},
		],
	},
	{
		id: 2,
		name: "Executive Room",
		route: "executive-room",
		description:
			"The Executive Room is a spacious room with a king-size bed, a separate living area, and a private balcony. The room is perfect for business travelers or guests who want a little extra space to relax and unwind.",
		price: 30000,
		bed_size: "King Size",
		no_of_guests: 4,
		image1: "/assets/executive/1.jpg",
		image2: "/assets/executive/2.jpg",
		image3: "/assets/executive/3.jpg",
		image4: "/assets/executive/4.jpg",
		image5: "/assets/executive/1.jpg",
		reviews: [
			{
				name: "Michael Adesanya",
				rating: 5,
				testimony:
					"The Executive Room was everything I needed for a perfect stay. The ambiance was sophisticated, the bed was incredibly comfortable, and the workspace was well-equipped. Excellent service and a fantastic experience overall!",
			},
			{
				name: "Grace Nwogu",
				rating: 4,
				testimony:
					"A beautiful blend of comfort and elegance! The room was spacious, well-furnished, and had a breathtaking view. The staff was attentive, ensuring I had everything I needed for a relaxing and productive stay.",
			},
			{
				name: "Tobi Alade",
				rating: 5,
				testimony:
					"An exceptional stay! The Executive Room offered a peaceful retreat with modern amenities and top-tier service. The attention to detail in the room design and the overall atmosphere made my stay truly enjoyable.",
			},
		],
	},
	{
		id: 3,
		name: "Standard Room",
		route: "standard-room",
		description:
			"The Standard Room is a comfortable room with a king-size bed and a private balcony. The room is perfect for couples or solo travelers looking for a cozy and relaxing stay.",
		price: 25000,
		bed_size: "King Size",
		no_of_guests: 4,
		image1: "/assets/standard/1.jpg",
		image2: "/assets/standard/2.jpg",
		image3: "/assets/standard/3.jpg",
		image4: "/assets/standard/4.jpg",
		image5: "/assets/standard/5.jpg",
		reviews: [
			{
				name: "Samuel Johnson",
				rating: 4,
				testimony:
					"The Standard Room was cozy, clean, and well-maintained. The bed was comfortable, and the amenities were just right for a relaxing stay. Great value for money with excellent service from the staff!",
			},
			{
				name: "Amaka Chukwu",
				rating: 4,
				testimony:
					"A wonderful stay! The room was simple yet elegant, with all the essentials I needed. The atmosphere was peaceful, and the staff was friendly and helpful throughout my visit. Would definitely stay here again!",
			},
			{
				name: "David Adewale",
				rating: 5,
				testimony:
					"Perfect for a short getaway! The Standard Room was spacious and well-lit, with a comfortable bed and a clean, modern bathroom. The service was top-notch, making my stay even more enjoyable!",
			},
		],
	},
	// {
	// 	id: 4,
	// 	name: "Kings Size Room 1",
	// 	route: "kings-size-room-1",
	// 	description:
	// 		"The Kings Size Room 1 is a spacious room with a king-size bed, a separate living area, and a private balcony. The room is perfect for business travelers or guests who want a little extra space to relax and unwind.",
	// 	price: 25000,
	// 	bed_size: "King Size",
	// 	no_of_guests: 4,
	// 	image1: "/assets/kings/1.jpg",
	// 	image2: "/assets/kings/2.jpg",
	// 	image3: "/assets/kings/3.jpg",
	// 	image4: "/assets/kings/4.jpg",
	// 	image5: "/assets/kings/5.jpg",
	// 	reviews: [
	// 		{
	// 			name: "James Olatunji",
	// 			rating: 5,
	// 			testimony:
	// 				"The King Size Room was absolutely amazing! The bed was incredibly comfortable, and the room had a stylish, modern touch. The ambiance was peaceful, making it the perfect place to unwind after a long day. Highly recommended!",
	// 		},
	// 		{
	// 			name: "Efe Osagie",
	// 			rating: 4,
	// 			testimony:
	// 				"Spacious, clean, and well-designed! The King Size bed was plush and inviting, and the room had all the amenities I needed for a relaxing stay. The staff was courteous and always ready to assist. A great experience overall!",
	// 		},
	// 		{
	// 			name: "Chidinma Okorie",
	// 			rating: 5,
	// 			testimony:
	// 				"I had an unforgettable stay in the King Size Room! The decor was elegant, the lighting was perfect, and the bed felt like sleeping on a cloud. The service was exceptional, making my visit truly special.",
	// 		},
	// 	],
	// },
	// {
	// 	id: 5,
	// 	name: "Kings Single Room 2",
	// 	route: "kings-single-room-2",
	// 	description:
	// 		"The Kings Single Room 2 is a comfortable room with a king-size bed and a private balcony. The room is perfect for couples or solo travelers looking for a cozy and relaxing stay.",
	// 	price: 20000,
	// 	bed_size: "King Size",
	// 	no_of_guests: 4,
	// 	image1: "/assets/kings/3.jpg",
	// 	image2: "/assets/kings/1.jpg",
	// 	image3: "/assets/kings/2.jpg",
	// 	image4: "/assets/kings/4.jpg",
	// 	image5: "/assets/kings/5.jpg",
	// 	reviews: [
	// 		{
	// 			name: "Peter Adeyemi",
	// 			rating: 5,
	// 			testimony:
	// 				"The King Single Room was perfect for my stay! The bed was incredibly comfortable, and the room had a modern yet cozy feel. Everything was spotless, and the service was excellent. I’ll definitely be back!",
	// 		},
	// 		{
	// 			name: "Amina Yusuf",
	// 			rating: 4,
	// 			testimony:
	// 				"A great stay! The room was well-furnished, quiet, and had everything I needed. The King Single bed was spacious and comfortable, and the staff was friendly and attentive. Fantastic value for the price!",
	// 		},
	// 		{
	// 			name: "Tunde Eze",
	// 			rating: 5,
	// 			testimony:
	// 				"I was impressed with the King Single Room! It had a classy design, was very clean, and the bed was just the right size for a peaceful night’s sleep. The hotel staff made sure my stay was smooth and enjoyable.",
	// 		},
	// 	],
	// },
];

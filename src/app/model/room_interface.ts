export interface FeaturedRoom {
	id: number;
	name: string;
	description: string;
	price: number;
	image: string;
}

export interface RoomType {
	id: number;
	name: string;
	route: string;
	price: number;
	image: string;
	status: string;
	length: number;
	no_of_guests: number;
	bed: string;
	extra1?: string;
	extra1Image?: string;
	extra2?: string;
	extra2Image?: string;
	extra3?: string;
	extra3Image?: string;
	extra4?: string;
	extra4Image?: string;
}

export interface RoomComparison {
	id: number;
	name: string;
	room_size: number;
	bed_type: string;
	price: number;
}

export interface RoomPage {
	id: number;
	name: string;
	route: string;
	description: string;
	price: number;
	image1: string;
	image2: string;
	image3: string;
	image4: string;
	image5: string;
	image6?: string;
	image7?: string;
	image8?: string;
	image9?: string;
	image10?: string;
	image11?: string;
	image12?: string;
	image13?: string;
	reviews: { name: string; rating: number; testimony: string }[];
	bed_size: string;
	no_of_guests: number;
}

export interface RoomImage {
	src: string;
	alt: string;
}

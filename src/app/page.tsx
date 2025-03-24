"use client";
import styles from "./page.module.css";
import style from "./featuredroom.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { all_rooms } from "./model/room";

export default function Home() {
  const router = useRouter();
  const featured_rooms = all_rooms;

  const routeToRoom = (route: string) => {
    router.push(`/room/${route}`);
  };

  return (
    <div className={styles.page}>
      <div className={styles.main_view}>
        <div className={styles.content}>
          <h1>Experience Luxury</h1>
          <h1>Beyond Compare</h1>
          <p>
            Discover an oasis of tranquility and elegance at our five-star
            resort, where every moment is crafted to perfection.
          </p>
          <button>Explore Our Rooms</button>
        </div>
      </div>

      <div className={style.featured_room}>
        <h2>Featured Rooms</h2>
        <div className={style.room_container}>
          {featured_rooms.map((room) => (
            <div key={room.id} className={style.room}>
              <Image
                src={room.image1}
                alt={room.name}
                width={500}
                height={350}
              />
              <div className={style.room_content}>
                <h3>{room.name}</h3>
                <p>{room.description}</p>
                <div className={style.more}>
                  <p>From ₦{room.price}/night</p>
                  <button onClick={() => routeToRoom(room.route)}>
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

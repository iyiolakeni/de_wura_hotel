import { useEffect, useState } from "react";
import styles from "./alert.module.css";

interface AlertProps {
	message: string;
	type: "success" | "error";
	onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, type, onClose }) => {
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setVisible(false);
			setTimeout(onClose, 300);
		}, 3000);

		return () => clearTimeout(timer);
	}, [onClose]);

	return (
		<div
			className={`${styles.alert} ${styles[type]} ${
				!visible ? styles.hidden : ""
			}`}>
			{message}
			<button className={styles.closeBtn} onClick={() => setVisible(false)}>
				✖
			</button>
		</div>
	);
};

export default Alert;

import { useEffect, useState } from "react";

export default function useWindowDimensions() {
	const hasWindow = typeof window !== "undefined";

	function getWindowDimensions() {
		const screenWidth = hasWindow ? window.innerWidth : null;
		const screenHeight = hasWindow ? window.innerHeight : null;
		return {
			screenWidth,
			screenHeight,
		};
	}

	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	useEffect(() => {
		if (hasWindow) {
			const handleResize = () => {
				setWindowDimensions(getWindowDimensions());
			};

			window.addEventListener("resize", handleResize);
			return () => window.removeEventListener("resize", handleResize);
		}
	}, [hasWindow]);

	return windowDimensions;
}

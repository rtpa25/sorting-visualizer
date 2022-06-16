import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxtHooks";
import useWindowDimensions from "../../hooks/useWindowDimension";
import { generateList } from "../../store/reducers/arrSlice";
import NavBar from "../NavBar";
import { StyledDiv } from "./styles";

const MainBody = () => {
	const { list } = useAppSelector((state) => state.listReducer);
	const dispatch = useAppDispatch();
	const { screenWidth } = useWindowDimensions();
	const numWidth = Math.floor(screenWidth! / (list.length * 3));
	const width = `${numWidth}px`;
	const numMargin =
		list.length < 11
			? 6
			: list.length < 20
			? 4
			: list.length < 50
			? 3.5
			: list.length < 100
			? 3
			: list.length < 130
			? 2.5
			: 2;
	const margin = `${numMargin}px`;
	const color = numWidth > 20 ? "white" : "transparent";
	const numFont =
		numWidth > 70
			? 20
			: numWidth > 60
			? 18
			: numWidth > 50
			? 16
			: numWidth > 40
			? 14
			: numWidth > 30
			? 12
			: numWidth > 20
			? 10
			: 8;
	const fontSize = `${numFont}px`;

	useEffect(() => {
		dispatch(
			generateList({
				min: 5,
				max: 400,
				size: 70,
			})
		);
	}, [dispatch]);

	return (
		<div style={{ height: "100vh" }}>
			<NavBar />
			<StyledDiv>
				{list.map((elem, idx) => {
					return (
						<div
							key={idx}
							style={{
								backgroundColor: "#38A3A5",
								color: color,
								height: `${elem * 1.5}px`,
								width: width,
								marginLeft: margin,
								marginRight: margin,
								marginTop: 0,
								display: "inline-block",
								fontSize: fontSize,
							}}>
							{elem}
						</div>
					);
				})}
			</StyledDiv>
		</div>
	);
};

export default MainBody;

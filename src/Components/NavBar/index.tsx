import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/reduxtHooks";
import { basicJSsort, generateList } from "../../store/reducers/arrSlice";
import {
	NavBarBody,
	NavBarButton,
	NavBarSlider,
	NavBarSliderInput,
	NavBarSliderText,
} from "./styles";

const NavBar = () => {
	const dispatch = useAppDispatch();
	const [size, setSize] = useState<number>(70);

	const radnomArrayClickHandler = () => {
		dispatch(
			generateList({
				min: 5,
				max: 400,
				size: size,
			})
		);
	};

	useEffect(() => {
		dispatch(
			generateList({
				min: 5,
				max: 400,
				size: size,
			})
		);
	}, [dispatch, size]);

	const basicSortHandler = () => {
		dispatch(basicJSsort());
	};

	return (
		<NavBarBody>
			<NavBarButton onClick={radnomArrayClickHandler}>
				Generate Random Array
			</NavBarButton>
			<NavBarButton onClick={basicSortHandler}>BasicJSSort</NavBarButton>
			<NavBarSlider>
				<NavBarSliderText id='arraySize'>Array Size</NavBarSliderText>
				<NavBarSliderInput
					id='changeSize'
					type='range'
					min='10'
					max='100'
					value={size}
					onChange={(e) => {
						setSize(parseInt(e.target.value));
					}}
				/>
			</NavBarSlider>
		</NavBarBody>
	);
};

export default NavBar;

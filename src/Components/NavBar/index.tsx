import { FC } from "react";

import {
	NavBarBody,
	NavBarButton,
	NavBarSlider,
	NavBarSliderInput,
	NavBarSliderText,
} from "./styles";

interface NavBarProps {
	size: number;
	setSize: React.Dispatch<React.SetStateAction<number>>;
	bubbleSort: () => Promise<void>;
	mergeSort: () => Promise<void>;
	insertionSort: () => Promise<void>;
	selectionSort: () => Promise<void>;
	quickSort: () => Promise<void>;
	randomizeArray: () => void;
}

const NavBar: FC<NavBarProps> = ({
	size,
	setSize,
	bubbleSort,
	mergeSort,
	insertionSort,
	selectionSort,
	quickSort,
	randomizeArray,
}) => {
	return (
		<NavBarBody>
			<NavBarButton onClick={randomizeArray}>
				Generate Random Array
			</NavBarButton>
			<NavBarButton onClick={selectionSort}>Selection Sort</NavBarButton>
			<NavBarButton onClick={bubbleSort}>BubbleSort</NavBarButton>
			<NavBarButton onClick={mergeSort}>MergeSort</NavBarButton>
			<NavBarButton onClick={quickSort}>QuickSort</NavBarButton>
			<NavBarButton onClick={insertionSort}>InsertionSort</NavBarButton>
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

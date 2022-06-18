import { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimension";
import NavBar from "../NavBar";
import { StyledDiv } from "./styles";

const ANIMATION_SPEED = 50;

const MainBody = () => {
	const [list, setList] = useState<number[]>([]);
	const [size, setSize] = useState<number>(50);
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

	const randomVals = (min: number, max: number) => {
		let randomVal = Math.floor(Math.random() * (max - min + 1) + min);
		return randomVal;
	};

	const sleep = (milliSeconds: number) => {
		return new Promise((resolve) => setTimeout(resolve, milliSeconds));
	};

	const finishedAnimation = async () => {
		for (let i = 0; i < list.length; i++) {
			let bar = document.getElementById(i.toString())!.style;
			bar.backgroundColor = "#38A3A5";
			await sleep(ANIMATION_SPEED);
		}
		// setDisableOptions(false);
	};
	const randomizeArray = () => {
		for (let i = 0; i < list.length; i++) {
			let bar = document.getElementById(i.toString())!.style;
			bar.backgroundColor = "#38A3A5";
		}
		let array = [];
		for (let i = 0; i < size; i++) {
			array.push(randomVals(20, 400));
		}
		setList(array);
	};

	useEffect(() => {
		randomizeArray();
	}, [size]);

	// ------------ ALGORITHMS ------------ //

	const bubbleSort = async () => {
		let currentArr = [...list];
		let sorted = false;

		while (!sorted) {
			sorted = true;

			for (let i = 0; i < currentArr.length - 1; i++) {
				for (let j = 0; j < currentArr.length - i - 1; j++) {
					if (currentArr[j] > currentArr[j + 1]) {
						let temp = currentArr[j];
						currentArr[j] = currentArr[j + 1];
						currentArr[j + 1] = temp;
						setList([...currentArr]);
						let bar1 = document.getElementById(j.toString())!.style;
						let bar2 = document.getElementById(
							(j + 1).toString()
						)!.style;
						bar1.backgroundColor = "#DC143C";
						bar2.backgroundColor = "#6A5ACD";

						await sleep(ANIMATION_SPEED);

						bar1.backgroundColor = "#FF7F50";
						bar2.backgroundColor = "#FF7F50";

						sorted = false;
					}
				}
			}
			if (sorted) finishedAnimation();
		}
	};

	// Merge Sort
	const mergeSort = async () => {
		let currentArr = [...list]; //directly list will not get mutated as passed by value
		await sort(currentArr, 0, currentArr.length - 1);
		finishedAnimation();
	};

	const sort = async (arr: number[], low: number, high: number) => {
		if (low < high) {
			let mid = Math.floor((low + high) / 2);
			await sort(arr, low, mid);
			await sort(arr, mid + 1, high);
			await merge(arr, low, mid, high);
		}
	};
	const merge = async (
		arr: number[],
		low: number,
		mid: number,
		high: number
	) => {
		let i = low;
		let j = mid + 1;
		let k = 0;
		let tempArr = [];

		while (i <= mid && j <= high) {
			if (arr[i] < arr[j]) {
				tempArr[k] = arr[i];
				i++;
				k++;
			} else {
				tempArr[k] = arr[j];
				j++;
				k++;
			}
			setList([...tempArr, ...list]);

			let bar1 = document.getElementById(i.toString());
			let bar2 = document.getElementById(j.toString());
			if (bar1 && bar2) {
				bar1.style.backgroundColor = "#DC143C";
				bar2.style.backgroundColor = "#6A5ACD";

				await sleep(ANIMATION_SPEED);

				bar1.style.backgroundColor = "#FF7F50";
				bar2.style.backgroundColor = "#FF7F50";
			}
		}

		while (i <= mid) {
			tempArr[k] = arr[i];
			setList([...tempArr, ...list]);

			let bar1 = document.getElementById(i.toString());
			let bar2 = document.getElementById(j.toString());
			if (bar1 && bar2) {
				bar1.style.backgroundColor = "#DC143C";
				bar2.style.backgroundColor = "#6A5ACD";

				await sleep(ANIMATION_SPEED);

				bar1.style.backgroundColor = "#FF7F50";
				bar2.style.backgroundColor = "#FF7F50";

				i++;
				k++;
			}
		}

		while (j <= high) {
			tempArr[k] = arr[j];
			setList([...tempArr, ...list]);

			let bar1 = document.getElementById(i.toString());
			let bar2 = document.getElementById(j.toString());
			if (bar1 && bar2) {
				bar1.style.backgroundColor = "#DC143C";
				bar2.style.backgroundColor = "#6A5ACD";
				await sleep(ANIMATION_SPEED);

				bar1.style.backgroundColor = "#FF7F50";
				bar2.style.backgroundColor = "#FF7F50";

				j++;
				k++;
			}
		}

		for (let i = low; i <= high; i++) {
			arr[i] = tempArr[i - low];

			setList([...arr]);
		}
	};

	//insertion sort
	const insertionSort = async () => {
		let currentArr = [...list];
		let sorted = false;

		while (!sorted) {
			sorted = true;
			for (let i = 1; i < currentArr.length; i++) {
				let current = currentArr[i];
				let j = i - 1;
				while (j >= 0 && currentArr[j] > current) {
					currentArr[j + 1] = currentArr[j];
					setList([...currentArr]);

					let bar1 = document.getElementById(
						(j + 1).toString()
					)!.style;
					let bar2 = document.getElementById(j.toString())!.style;
					bar1.backgroundColor = "#DC143C";
					bar2.backgroundColor = "#6A5ACD";

					await sleep(ANIMATION_SPEED);

					bar1.backgroundColor = "#FF7F50";
					bar2.backgroundColor = "#FF7F50";

					j--;
					sorted = false;
				}
				currentArr[j + 1] = current;
				setList([...currentArr]);
			}
			if (sorted) finishedAnimation();
		}
	};

	//selection sort
	const selectionSort = async () => {
		let currentArr = [...list];
		let sorted = false;

		while (!sorted) {
			sorted = true;

			for (let i = 0; i < currentArr.length - 1; i++) {
				for (let j = i + 1; j < currentArr.length; j++) {
					if (currentArr[i] > currentArr[j]) {
						let swap1 = currentArr[i];
						let swap2 = currentArr[j];
						currentArr[i] = swap2;
						currentArr[j] = swap1;
						setList([...currentArr]);

						let bar1 = document.getElementById(i.toString())!.style;
						let bar2 = document.getElementById(j.toString())!.style;
						bar1.backgroundColor = "#DC143C";
						bar2.backgroundColor = "#6A5ACD";

						await sleep(ANIMATION_SPEED);

						bar1.backgroundColor = "#FF7F50";
						bar2.backgroundColor = "#FF7F50";

						sorted = false;
					}
				}
			}
			if (sorted) finishedAnimation();
		}
	};

	// Quick Sort
	const quickSort = async () => {
		let currentArr = [...list];

		await sorts(currentArr, 0, currentArr.length - 1);
		finishedAnimation();
	};

	const sorts = async (arr: number[], left: number, right: number) => {
		if (left < right) {
			let partitionIndex = partition(arr, left, right);

			setList([...arr]);
			await sleep(ANIMATION_SPEED);
			await sorts(arr, left, partitionIndex - 1);
			await sorts(arr, partitionIndex + 1, right);
		}
	};

	const partition = (arr: number[], left: number, right: number) => {
		let pivot = arr[right];
		let i = left - 1;
		for (let j = left; j < right; j++) {
			if (arr[j] < pivot) {
				i++;
				let temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;

				let bar1 = document.getElementById(i.toString())!.style;
				let bar2 = document.getElementById(j.toString())!.style;
				bar1.backgroundColor = "#DC143C";
				bar2.backgroundColor = "#6A5ACD";

				setTimeout(() => {
					bar1.backgroundColor = "#ff7f50";
					bar2.backgroundColor = "#ff7f50";
				}, 200);

				setList([...arr]);
			}
		}

		let temp = arr[i + 1];
		arr[i + 1] = arr[right];
		arr[right] = temp;

		return i + 1;
	};

	return (
		<div style={{ height: "100vh" }}>
			<NavBar
				size={size}
				setSize={setSize}
				bubbleSort={bubbleSort}
				mergeSort={mergeSort}
				insertionSort={insertionSort}
				selectionSort={selectionSort}
				quickSort={quickSort}
				randomizeArray={randomizeArray}
			/>
			<StyledDiv>
				{list.map((elem: any, idx: number) => {
					return (
						<div
							id={idx.toString()}
							key={idx}
							style={{
								backgroundColor: "#38A3A5",
								color: color,
								height: elem,
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

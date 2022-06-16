export const randomIntFromInterval = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

//swap helper fucntion that swaps numbers in array
export const swap = (arr: number[], i: number, j: number) => {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
};

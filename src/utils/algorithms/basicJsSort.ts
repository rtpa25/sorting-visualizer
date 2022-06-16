export const basicSort = (arr: number[]): number[] => {
	const newArr = [...arr];
	newArr.sort((a, b) => a - b);
	return newArr;
};

//Like merge sort exploits the fact that that arrays of 0 or 1 elements are always sorted
//Working by selecting one element (called Pivot) and finding the index where the pivot should end up in the sorted array
//Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot.

import { swap } from "..";

//pivot helper fucntion
const pivotHelper = (arr: number[], start = 0, end = arr.length - 1) => {
	let pivot = arr[start];
	let swapIndex = start;
	for (let i = start + 1; i < arr.length; i++) {
		if (pivot > arr[i]) {
			swapIndex++;
			swap(arr, swapIndex, i);
		}
	}
	swap(arr, start, swapIndex);
	return swapIndex;
};

export const quickSort = (arr: number[], left = 0, right = arr.length - 1) => {
	//base case is when left = right which takes account of the fact every array which has one element is sorted like merge sort and in that case we just return the array
	if (left < right) {
		let pivotIndex = pivotHelper(arr, left, right);
		//left
		quickSort(arr, left, pivotIndex - 1);
		//right
		quickSort(arr, pivotIndex + 1, right);
	}
	return arr;
};

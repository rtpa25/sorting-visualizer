import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { randomIntFromInterval } from "../../utils";
import { basicSort } from "../../utils/algorithms/basicJsSort";

interface ListState {
	list: number[];
}

const initialState: ListState = {
	list: [],
};

export const counterSlice = createSlice({
	name: "list",
	initialState: initialState,
	reducers: {
		generateList: (
			state: ListState,
			action: PayloadAction<{
				max: number;
				min: number;
				size: number;
			}>
		) => {
			const arr: number[] = [];
			const { min, max, size } = action.payload;
			for (let i = 0; i < size; i++) {
				arr.push(randomIntFromInterval(min, max));
			}
			state.list = arr;
		},

		basicJSsort: (state: ListState) => {
			state.list = basicSort(state.list);
		},
	},
});

export const { generateList, basicJSsort } = counterSlice.actions;

export default counterSlice.reducer;

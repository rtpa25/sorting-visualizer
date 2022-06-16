import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { randomIntFromInterval } from "../../utils";

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
	},
});

export const { generateList } = counterSlice.actions;

export default counterSlice.reducer;

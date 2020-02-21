export const initialModeState = {
	darkMode: false,
};

export const modeReducer = (state = initialModeState, action) => {
	switch (action.type) {
		case 'SET_MODE':
			// console.log(action.payload);
			return {
				darkMode: action.payload,
			};
		default:
			return state;
	}
};

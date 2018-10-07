import {
	FETCH_HISTORICAL_POPULATIONS_MAX_MIN_REQUEST,
	FETCH_HISTORICAL_POPULATIONS_MAX_MIN_SUCCESS,
	FETCH_HISTORICAL_POPULATIONS_MAX_MIN_FAILURE
} from 'actions/types';

const initialState = {
	maxStates: [],
	maxStatesPercentage: null,
	minStates: [],
	minStatesPercentage: null,
	totalPopulation: null,
	isFetching: false,
	lastFetched: null
};

function historicalPopulations(state = initialState, action) {
	switch (action.type) {
		case FETCH_HISTORICAL_POPULATIONS_MAX_MIN_REQUEST: {
			return {
				...state,
				isFetching: true
			};
		}
		case FETCH_HISTORICAL_POPULATIONS_MAX_MIN_SUCCESS: {
			const data = action.payload;
			const reversedMinStates = data.min_states.slice(0).reverse();
			return {
				...state,
				isFetching: false,
				maxStates: data.max_states,
				minStates: reversedMinStates,
				maxStatesPercentage: data.max_states_percentage,
				minStatesPercentage: data.min_states_percentage,
				lastFetched: Date.now()
			};
		}
		case FETCH_HISTORICAL_POPULATIONS_MAX_MIN_FAILURE: {
			return { ...state, isFetching: false };
		}
		default:
			return state;
	}
}

export default historicalPopulations;

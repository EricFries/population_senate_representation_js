import { RSAA } from 'redux-api-middleware';

import { serialize } from 'api/utils';
import { HISTORICAL_POPULATIONS_MAX_MIN_ENDPOINT } from 'api/endpoints';

import {
	FETCH_HISTORICAL_POPULATIONS_MAX_MIN_REQUEST,
	FETCH_HISTORICAL_POPULATIONS_MAX_MIN_SUCCESS,
	FETCH_HISTORICAL_POPULATIONS_MAX_MIN_FAILURE
} from 'actions/types';

export const fetchHistoricalPopulationsMaxMin = filters => {
	const queryParams = serialize(filters);
	const endpoint = `${HISTORICAL_POPULATIONS_MAX_MIN_ENDPOINT}?${queryParams}`;

	return {
		[RSAA]: {
			endpoint,
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
			types: [
				FETCH_HISTORICAL_POPULATIONS_MAX_MIN_REQUEST,
				FETCH_HISTORICAL_POPULATIONS_MAX_MIN_SUCCESS,
				FETCH_HISTORICAL_POPULATIONS_MAX_MIN_FAILURE
			]
		}
	};
};

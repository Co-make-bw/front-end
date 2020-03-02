import { combineReducers } from 'redux';
import { onboardingReducer } from './onboardingReducer';
import { dashboardReducer } from './dashboardReducer';
import { issuesReducer } from './issuesReducer';

export const rootReducer = combineReducers({
	onboardingReducer,
	dashboardReducer,
	issuesReducer
});

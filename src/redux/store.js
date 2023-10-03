import {configureStore} from '@reduxjs/toolkit';
import { createReduxContainer } from 'react-navigation-redux-helpers';
import rootReducer from './reducers';

const store = configureStore(rootReducer);

// Create a navigation container
export const AppNavigatorContainer = createReduxContainer(AppNavigator);

export default configureStore;
import React from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { AppNavigatorContainer } from './src/redux/store';
import HomeScreen from './src/screens/HomeScreen';
import AddTodoScreen from './src/screens/AddTodoScreen';
import TodoDetailsScreen from './src/screens/TodoDetailsScreen';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  AddTodo: { screen: AddTodoScreen },
  TodoDetails: { screen: TodoDetailsScreen },
});

const AppContainer = createAppContainer(MainNavigator);

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigatorContainer />
    </Provider>
  );
};

export default App;
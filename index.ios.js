// IOS ONLY

// Import a library to help create a component

import React from 'react'; // Import is ES6 code
// import destructuring (aka pick what you want only):
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import TodaysWorkInfo from './src/components/TodaysWorkInfo';
import Calendar from './src/components/Calendar';

// Create a component (an object that produces something that can be placed on the screen of our mobile device)

const App = () => (
	<View>
		<Header headerText={'Does Coleman Work?'} />
		<TodaysWorkInfo />
		<Calendar />
	</View>
);

// Render it to the device
// A Component is a javascript function that returns some amount of JSX

AppRegistry.registerComponent('DoesColemanWork2', () => App);

// Import libraries for making a component

import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, DatePickerIOS } from 'react-native';
import { getFutureWorkInfo } from './DateCalculations';
// Make a component

class Calendar extends Component {

  state = {
    date: new Date(),
	futureWorkInfo: ''
  };

  onDateChange = (date) => {
    this.setState({date: date, futureWorkInfo: getFutureWorkInfo(date)});
  };

  render() {
    return (
      <View>
        <Heading label="Check other days:" />
        <DatePickerIOS
          date={this.state.date}
          mode="date"
          onDateChange={this.onDateChange}
        />
		<Text>
			{ '\n' }
		</Text>
		<Text style={styles.workInfo}>
			{ this.state.futureWorkInfo }
		</Text>
      </View>
    );
  }

}

class Heading extends React.Component {
  render() {
    return (
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>
          {this.props.label}
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  textinput: {
    height: 26,
    width: 50,
    borderWidth: 0.5,
    borderColor: '#0f0f0f',
    padding: 4,
    fontSize: 13,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  labelView: {
    marginRight: 10,
    paddingVertical: 2,
  },
  label: {
    fontWeight: '500',
  },
  headingContainer: {
    padding: 4,
    backgroundColor: '#d1d1d1',
  },
  heading: {
    fontWeight: '500',
    fontSize: 14,
	textAlign: 'center',
	backgroundColor: '#d1d1d1'
  },
  workInfo: {
    fontWeight: '500',
    fontSize: 24,
	textAlign: 'center'
  }
});

// Make the component available to other parts of the app

export default Calendar; // I want other files in our project to make use of this.

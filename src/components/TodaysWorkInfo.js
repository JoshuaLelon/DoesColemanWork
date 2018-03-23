import React, { Component } from 'react';
import { View, Text, AppState, StyleSheet } from 'react-native';
import { getTodaysWorkInfoText } from './DateCalculations';
//worked tues april 11th

class TodaysWorkInfo extends Component {
    
  state = {
    appState: AppState.currentState
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState) => {
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!');
      this.render();
    }
    this.setState({appState: nextAppState});
  }

    render() {
    const todaysWorkInfoText = getTodaysWorkInfoText();
    const today = new Date();

    return ( < View >
                <Text style={styles.todaysDateText}> 
                    { 'Today\'s Date:' }
                </Text>
                < Text style={styles.todaysDate}>
                    { today.toDateString() }
                < /Text>
                <Text>
                    { '\n' }
                </Text>
                <Text style={styles.workInfo}>
                    { todaysWorkInfoText }
                </Text>
                <Text>
                    { '\n' }
                </Text>
            < /View>
    );
    }
};

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
    backgroundColor: '#f6f7f8',
  },
  todaysDateText: {
    fontWeight: '200',
    fontSize: 12,
	textAlign: 'center'
  },
  todaysDate: {
    fontWeight: '200',
    fontSize: 14,
	textAlign: 'center'
  },
  workInfo: {
    fontWeight: '500',
    fontSize: 24,
	textAlign: 'center'
  }
});

export default TodaysWorkInfo;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TimerComponent } from './TimerComponent';
import { isValidDate, getRemainingTime, checkAndRunCallback } from './utils';

const defaultStateTimeRemaining = {
  total: '',
  days: '',
  hours: '',
  minutes: '',
  seconds: ''
};

class TimerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id ? this.props.id : '',
      offsetGMT: this.props.offsetGMT ? this.props.offsetGMT : '',
      startTime: this.props.startTime ? this.props.startTime : '',
      endTime: this.props.endTime ? this.props.endTime : '',
      callback: this.props.callback ? this.props.callback : '',
      showTimer: false,
      timeRemaining: defaultStateTimeRemaining,
      error: ''
    };
    this.init = this.init.bind(this);
  }

  init() {
    const { startTime, endTime, offsetGMT } = this.state;

    // Validation
    if (!isValidDate(endTime) || !isValidDate(startTime)) {
      this.setState({ error: 'Invalid date format. Use MM/DD/YYYY HH:MM:SS' });
      return;
    }

    // Some mutations ~ converting time formats -_-"
    const endTimeFormatted = endTime + ` ${offsetGMT}`;
    const startTimeFormatted = startTime + ` ${offsetGMT}`;

    const startTimeMs = new Date(startTimeFormatted);
    const endTimeMs = new Date(endTimeFormatted);
    const currentTimeMs = new Date();

    if (startTimeMs >= endTimeMs) {
      this.setState({ error: 'Start time must be before end time' });
      return;
    }

    if (endTimeMs <= currentTimeMs) {
      this.setState({ error: 'End time must be in the future' });
      return;
    }

    // Start the timer
    const updateTimer = (endTime) => {
      const t = getRemainingTime(endTime);
      // Updating state
      const totalTimeRemaining = t.total;
      const daysRemaining = ('0' + t.days).slice(-2);
      const hoursRemaining = ('0' + t.hours).slice(-2);
      const minutesRemaining = ('0' + t.minutes).slice(-2);
      const secondsRemaining = ('0' + t.seconds).slice(-2);
      this.setState({
        showTimer: true,
        timeRemaining: {
          total: totalTimeRemaining,
          days: daysRemaining,
          hours: hoursRemaining,
          minutes: minutesRemaining,
          seconds: secondsRemaining
        },
        error: ''
      });
      // Terminate timer
      if (!(t.total > 0)) {
        clearInterval(timerInterval);
        this.setState({
          timeRemaining: defaultStateTimeRemaining,
          showTimer: false,
          error: 'Countdown timer expired'
        });
      }
    };
    
    updateTimer(endTimeFormatted);
    const timerInterval = setInterval(function () {
      updateTimer(endTimeFormatted);
    }, 1000);
    
    const { callback } = this.state;
    if (callback) {
      checkAndRunCallback(callback);
    }
  }

  componentDidMount() {
    this.init();
  }

  render() {
    const { showTimer, timeRemaining, error } = this.state;
    return (
      <div className='timerWrapper'>
        {showTimer ? (
          <TimerComponent timerState={this.state} />
        ) : (
          <div>{error}</div>
        )}
      </div>
    );
  }
}

TimerContainer.propTypes = {
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  callback: PropTypes.func,
  offsetGMT: PropTypes.string,
  id: PropTypes.string
};

TimerContainer.defaultProps = {
  offsetGMT: 'GMT+0530',
  startTime: '03/03/2024 00:00:00',
  endTime: '03/09/2024 12:00:00'
  
};

export default TimerContainer;
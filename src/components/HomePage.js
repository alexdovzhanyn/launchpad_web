import React from 'react';

import SampleText from '../components/sample-text';

class HomePage extends React.Component {
  render() {
    return (
      <SampleText onClick={ this.props.onTodoClick }>Hey yo</SampleText>
    )
  }
}

export default HomePage;

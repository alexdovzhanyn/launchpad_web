import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePageContainer from './containers/HomePageContainer';

class App extends React.Component {
  render() {
    return (
    	<Router>
    		<Switch>
					<Route component={ HomePageContainer }/>
				</Switch>
			</Router>
		)
  }
}

export default App;